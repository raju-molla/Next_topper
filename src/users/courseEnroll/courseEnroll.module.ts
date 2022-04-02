import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollmentController } from './courseEnroll.controller';
import { EnrollmentService } from './courseEnroll.service';
import { userEnrollCourseSchema } from './userEnrollCourse.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Enroll', schema: userEnrollCourseSchema },
    ]),
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
})
export class EnrolmentModule {}
