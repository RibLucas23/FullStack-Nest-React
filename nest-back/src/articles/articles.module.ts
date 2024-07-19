import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Articles, ArticlesSchema } from 'src/schemas/articles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Articles.name,
        schema: ArticlesSchema,
      },
    ]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
