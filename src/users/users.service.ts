import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { createUserDto } from './dto/create-user.dto';
import { UserData } from './user.model';

@Injectable()
export class UsersService {
  private user: UserData[] = [];
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserData>,
    private jwtService: JwtService,
  ) {}

  // All user
  async getAllUser(): Promise<UserData[]> {
    const allUser = await this.userModel.find();
    console.log(typeof this.user);

    if (!allUser) {
      throw new NotFoundException('No user found');
    }
    return allUser;
  }

  // CREATE USER
  async register(data: createUserDto): Promise<UserData> {
    try {
      const { password } = data;
      const hashPassword = await bcrypt.hash(password, 10);
      data.password = hashPassword;
      const user = await new this.userModel({
        ...data,
      }).save();
      return user;
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  //   LOGIN
  async login(
    username: string,
    password: string,
    email: string,
  ): Promise<object> {
    // User can login using username or email

    const user = await this.userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (!user) {
      throw new NotFoundException('user is not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new NotFoundException('user password is not matched');
    }

    const payload = {
      username: user.username,
      role: user.role,
      email: user.email,
    };
    const access_token = this.jwtService.sign(payload);

    return {
      Token: access_token,
    };
  }

  //    Get single user
  async getSingleUser(userId: string): Promise<UserData> {
    const user = await this.userModel.findById({ _id: userId });
    if (!user) {
      throw new NotFoundException('user is not found');
    }
    return user;
  }

  //   UPDATE USER
  async updateUser(userId: any, data: createUserDto): Promise<UserData> {
    try{
      const newUser = await this.userModel.findOneAndUpdate(
        { _id: userId },
        data,
        {
          new: true,
        },
      );
      return newUser;

    }
    catch(err){
      return err.message
    }
  }
  //   DELETE USER
  async deleteUser(userId: string): Promise<object> {
    try{
      const newUser = await this.userModel.findOneAndDelete({ _id: userId });
    // console.log(newUser);

    if (!newUser) {
      throw new NotFoundException('User is not found');
    }
    return {
      mgs: 'Delete successFully',
      ...newUser,
    };
    }
    catch(err){
      return {
        err: err.message
      }
    }
  }
















}
