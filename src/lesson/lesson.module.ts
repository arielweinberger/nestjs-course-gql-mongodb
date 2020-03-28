import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson])
  ],
  providers: [
    LessonResolver,
    LessonService
  ]
})
export class LessonModule {}
