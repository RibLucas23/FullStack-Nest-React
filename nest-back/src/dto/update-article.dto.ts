import { IsString, IsOptional } from 'class-validator';

export class UpdateArticle {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  image: string;
}
