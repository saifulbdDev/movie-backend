import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { MovieDocument } from './movie.schema';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('Movie')
    private readonly movieModel: Model<MovieDocument>,
  ) {}

  async create(
    name: string,
    price: number,
    description: string,
  ): Promise<MovieDocument> {
    const newMovie = new this.movieModel({ name, price, description });
    return newMovie.save();
  }

  async findAll(): Promise<MovieDocument[]> {
    return this.movieModel.find().exec();
  }

  async find(id: string): Promise<MovieDocument> {
    return this.movieModel.findById(id).exec();
  }

  async update(
    id: string,
    newName: string,
    newDescription: string,
  ): Promise<MovieDocument> {
    const existingMovie = await this.find(id);

    existingMovie.name = newName ?? existingMovie.name;
    existingMovie.description = newDescription ?? existingMovie.description;

    return existingMovie.save();
  }

  async delete(id: string) {
    console.log(id);
    return this.movieModel.remove({ _id: id }).exec();
  }
}
