import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dogs, DogsSchema } from 'src/schemas/dogs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Dogs.name,
        schema: DogsSchema,
      },
    ]),
  ],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
