import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [StudentService]
})
export class StudentModule {}
