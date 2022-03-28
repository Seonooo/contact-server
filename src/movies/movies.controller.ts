import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") movieId: string) {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }
    @Delete(":id")
    remove(@Param('id') movieId: string) {
        return this.moviesService.deleteOne(movieId);
    }

    // put은 모든 리소스 업데이트, patch는 일부만 업데이트
    @Patch(':id')
    path(@Param('id') movieId: string, @Body() movieUpdateData) {
        return this.moviesService.update(movieId, movieUpdateData);
    }


}