import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from 'src/dto/create-article.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.articlesService.findAll();
  }
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.articlesService.findOne(id);
    } catch (error) {
      throw new NotFoundException('Nothing with that id');
    }
  }

  @Post()
  async create(@Body() body: CreateArticleDto) {
    try {
      console.log('body');
      return await this.articlesService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Article alredy exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      return await this.articlesService.delete(id);
    } catch (error) {
      throw new NotFoundException('Nothing with that id');
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateArticleDto) {
    try {
      return await this.articlesService.update(id, body);
    } catch (error) {
      throw new NotFoundException('Nothing with that id');
    }
  }
}
