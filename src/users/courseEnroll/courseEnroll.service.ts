import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userEnrollCourse } from './userEnrollCourse.model';

@Injectable()
export class EnrollmentService {
  private enroll: userEnrollCourse[] = [];
  constructor(
    @InjectModel('Enroll') private readonly enrollmodule: Model<userEnrollCourse>
    ) {}

    async enrollCourse(data:any){
        const enroll = await new this.enrollmodule({
            ...data
        }).save()
        return enroll;
    }

 
}




