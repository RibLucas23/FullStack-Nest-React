import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from 'src/schemas/users.schema';
import * as bcrypt from 'bcrypt';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Users') private authModel: Model<Users>,
    private jwtService: JwtService,
  ) {}

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      await this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.at_secret,
          expiresIn: 60 * 15,
        },
      ),
      await this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.rt_secret,
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }
  async updateRtHash(userId: string, rt: string) {
    const hash = await this.hashData(rt);
    await this.authModel.updateOne(
      { _id: userId },
      { $set: { hashedRt: hash } },
    );
  }

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password);
    const user = {
      email: dto.email,
      hash,
    };
    const newUser = await this.authModel.create(user);
    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRtHash(newUser.id, tokens.refresh_token);
    return tokens;
  }
  async signinLocal(dto: AuthDto): Promise<Tokens> {
    const user = await this.authModel.findOne({ email: dto.email });

    if (!user && !user.hashedRt) throw new ForbiddenException('Access Denied');

    const passwordMatches = await bcrypt.compare(dto.password, user.hash);

    if (!passwordMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }
  async logout(userId: string) {
    console.log('asd');
    await this.authModel.updateMany(
      {
        _id: userId,
        hashedRt: { $ne: null },
      },
      {
        $set: { hashedRt: null },
      },
    );
  }
  async refreshTokens(userId: string, rt: string) {
    const user = await this.authModel.findById(userId);
    if (!user) throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(rt, user.hashedRt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }
}
