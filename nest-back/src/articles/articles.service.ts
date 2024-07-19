import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from 'src/dto/create-article.dto';
import { UpdateArticle } from 'src/dto/update-article.dto';
import { Articles } from 'src/schemas/articles.schema';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('Articles') private articlesModel: Model<Articles>,
  ) {}

  async findAll() {
    return await this.articlesModel.find();
  }

  async create(createArticle: CreateArticleDto) {
    const createdArticle = await this.articlesModel.create(createArticle);
    return createdArticle;
  }

  async findOne(id: string) {
    return await this.articlesModel.findById(id);
  }
  async delete(id: string) {
    return this.articlesModel.findByIdAndDelete(id);
  }
  async update(id: string, newArticle: UpdateArticle) {
    return this.articlesModel.findByIdAndUpdate(id, newArticle);
  }
}
