import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrolmentModule } from './users/courseEnroll/courseEnroll.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    EnrolmentModule,
    MongooseModule.forRoot(
      'mongodb+srv://nesttopper:01703634507@cluster0.66f2j.mongodb.net/next-Topper?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
