import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { BadRequestException, ForbiddenException } from '@nestjs/common';
import { Tokens } from './types';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signupLocal: jest.fn(),
            signinLocal: jest.fn(),
            logout: jest.fn(),
            refreshTokens: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('signupLocal', () => {
    it('should register a user successfully', async () => {
      const dto: AuthDto = { email: 'test@test.com', password: 'password' };
      const tokens: Tokens = { access_token: 'at', refresh_token: 'rt' };

      jest.spyOn(authService, 'signupLocal').mockResolvedValue(tokens);

      const result = await authController.signupLocal(dto);

      expect(authService.signupLocal).toHaveBeenCalledWith(dto);
      expect(result).toEqual(tokens);
    });

    it('should throw an error if email or password is missing', async () => {
      const dto: AuthDto = { email: '', password: '' };

      try {
        await authController.signupLocal(dto);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.response).toEqual({
          message: [
            'email should not be empty',
            'password should not be empty',
          ],
          error: 'Bad Request',
          statusCode: 400,
        });
      }
    });
  });

  describe('signinLocal', () => {
    it('should login a user successfully', async () => {
      const dto: AuthDto = { email: 'test@test.com', password: 'password' };
      const tokens: Tokens = { access_token: 'at', refresh_token: 'rt' };

      jest.spyOn(authService, 'signinLocal').mockResolvedValue(tokens);

      const result = await authController.signinLocal(dto);

      expect(authService.signinLocal).toHaveBeenCalledWith(dto);
      expect(result).toEqual(tokens);
    });

    it('should throw an error if email or password is incorrect', async () => {
      const dto: AuthDto = {
        email: 'wrong@test.com',
        password: 'wrongpassword',
      };

      jest
        .spyOn(authService, 'signinLocal')
        .mockRejectedValue(new ForbiddenException('Access Denied'));

      await expect(authController.signinLocal(dto)).rejects.toThrow(
        ForbiddenException,
      );
    });
  });

  describe('logout', () => {
    it('should logout a user successfully', async () => {
      const userId = '123';

      jest.spyOn(authService, 'logout').mockResolvedValue(undefined);

      const result = await authController.logout(userId);

      expect(authService.logout).toHaveBeenCalledWith(userId);
      expect(result).toBeUndefined();
    });
  });

  describe('refreshTokens', () => {
    it('should refresh tokens successfully', async () => {
      const refreshToken = 'some-refresh-token';
      const userId = '123';
      const tokens: Tokens = { access_token: 'at', refresh_token: 'rt' };

      jest.spyOn(authService, 'refreshTokens').mockResolvedValue(tokens);

      const result = await authController.refreshTokens(refreshToken, userId);

      expect(authService.refreshTokens).toHaveBeenCalledWith(
        userId,
        refreshToken,
      );
      expect(result).toEqual(tokens);
    });

    it('should throw an error if refresh token is invalid', async () => {
      const refreshToken = 'invalid-refresh-token';
      const userId = '123';

      jest
        .spyOn(authService, 'refreshTokens')
        .mockRejectedValue(new ForbiddenException('Access Denied'));

      await expect(
        authController.refreshTokens(refreshToken, userId),
      ).rejects.toThrow(ForbiddenException);
    });
  });
});
