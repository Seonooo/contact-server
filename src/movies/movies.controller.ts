import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return "This wii return all movies";
    }

    @Get("search")
    search(@Query("year") searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string) {
        return `This will return one movies with the id : ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }
    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return `This will delete a movie${movieId}`;
    }

    // put은 모든 리소스 업데이트, patch는 일부만 업데이트
    @Patch('/:id')
    path(@Param('id') movieId: string, @Body() movieUpdateData) {
        return {
            updateMovieId: movieId,
            ...movieUpdateData,
        };
    }


}