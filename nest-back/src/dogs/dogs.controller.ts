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
  Query,
} from '@nestjs/common';
import { CreateDogDto } from 'src/dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Public()
  @Get()
  async findAll(@Query() query: ExpressQuery) {
    return await this.dogsService.findAll(query);
  }
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.dogsService.findOne(id);
    } catch (error) {
      throw new NotFoundException('Nothing with that id');
    }
  }

  @Post()
  async create(@Body() body: CreateDogDto) {
    try {
      console.log(body);
      return await this.dogsService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Dog alredy exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    try {
      return await this.dogsService.delete(id);
    } catch (error) {
      throw new NotFoundException('Nothing with that id');
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateDogDto) {
    try {
      return await this.dogsService.update(id, body);
    } catch (error) {
      throw new NotFoundException('Nothing with that id');
    }
  }
}
