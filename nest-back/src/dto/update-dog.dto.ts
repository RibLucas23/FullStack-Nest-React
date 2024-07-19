import { IsOptional, IsString } from 'class-validator';

export class UpdateDogDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  raze?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  size?: string;

  @IsString()
  @IsOptional()
  age?: string;

  @IsString()
  @IsOptional()
  gender?: string;
  @IsString()
  @IsOptional()
  image: string;
}
