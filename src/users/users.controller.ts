import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserData } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get('/all-user')
    getAllUser() : Promise<UserData[]>{
        return this.userService.getAllUser()
    }

    @Post('/register')
    async register (@Body() data: createUserDto): Promise<UserData>{
        return await this.userService.register(data);
    }

    @Post('/login')
    async login(
        @Body('username') username:string,
        @Body('password') password:string,
        @Body('email') email:string)
        :Promise<object>{
            return await this.userService.login(username,password,email)
    }   

    @Get(':id')
    async getSingleUser(@Param('id') userId: string): Promise<UserData> {
      return await this.userService.getSingleUser(userId);
    }

    @Put("update/:id")
    async update(@Param('id') userId: string, @Body() data: createUserDto):Promise<UserData> {
      const user = await this.userService.updateUser(userId,data);
      
       
      return user;
    }
    @Delete("delete/:id")
    async deleteUser(@Param('id') userId: string): Promise<object> {
        return await this.userService.deleteUser(userId);
    }
   
}
