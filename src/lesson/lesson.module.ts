import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';

@Module({
  providers: [LessonResolver]
})
export class LessonModule {}
