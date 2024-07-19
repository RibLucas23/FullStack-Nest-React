import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    DogsModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_URL}@cluster0.dpzkvas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    ),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
