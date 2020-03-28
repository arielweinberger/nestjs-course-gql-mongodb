import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
  @Query(returns => LessonType)
  lesson() {
    return {
      id: 'asdjo12j31a',
      name: 'Physics Class',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString()
    };
  }

  @Mutation(returns => LessonType)
  createLesson() {
    
  }
}