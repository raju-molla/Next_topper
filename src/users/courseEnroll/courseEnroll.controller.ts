import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './courseEnroll.service';

@Controller('enroll')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  async EnrollCourse(@Body() data:any){
      return await this.enrollmentService.enrollCourse(data);
  }
}
