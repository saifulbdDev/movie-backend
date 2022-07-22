import { JwtGuard } from '../auth/guards/jwt.guard';
import { MovieService } from './movie.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MovieDocument } from './movie.schema';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Post()
  createMovie(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description?: string,
  ): Promise<MovieDocument> {
    return this.movieService.create(name, price, description);
  }

  @Get()
  findAllMovie(): Promise<MovieDocument[]> {
    return this.movieService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findMovie(@Param('id') id: string): Promise<MovieDocument> {
    return this.movieService.find(id);
  }

  @Patch(':id')
  updateMovie(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('description') description?: string,
  ): Promise<MovieDocument> {
    return this.movieService.update(id, name, description);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}
