import * as mongoose from 'mongoose';
export const userEnrollCourseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  facebookId: {
    type: String,
    required: true,
  },
});

export interface userEnrollCourse {
  name: string;
  email: string;
  phone: string;
  facebookId: string;
}
