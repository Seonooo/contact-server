import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행시킴 router같은 존재
  providers: [],
})
export class AppModule { }
