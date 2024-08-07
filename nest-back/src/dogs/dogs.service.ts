import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDogDto } from 'src/dto/create-dog.dto';
import { UpdateDogDto } from 'src/dto/update-dog.dto';
import { Dogs } from 'src/schemas/dogs.schema';
import { Query } from 'express-serve-static-core';

@Injectable()
export class DogsService {
  constructor(@InjectModel('Dogs') private dogsModel: Model<Dogs>) {}

  async findAll(query: Query) {
    const resPerPage = Number(query.limit) || 4;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    const name = query.name
      ? {
          name: {
            $regex: query.name,
            $options: 'i',
          },
        }
      : {};
    const raze = query.raze
      ? {
          raze: {
            $regex: query.raze,
            $options: 'i',
          },
        }
      : {};

    const totalDocs = await this.dogsModel.countDocuments({ ...name, ...raze });
    const totalPages = Math.ceil(totalDocs / resPerPage);
    const data = await this.dogsModel
      .find({ ...name, ...raze })
      .limit(resPerPage)
      .skip(skip);

    return { data, totalPages };
  }

  async create(createDog: CreateDogDto) {
    const createdDog = await this.dogsModel.create(createDog);
    return createdDog;
  }

  async findOne(id: string) {
    return await this.dogsModel.findById(id);
  }
  async delete(id: string) {
    return this.dogsModel.findByIdAndDelete(id);
  }
  async update(id: string, newDog: UpdateDogDto) {
    return this.dogsModel.findByIdAndUpdate(id, newDog);
  }
}
