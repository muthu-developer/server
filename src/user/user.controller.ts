import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly UserServive: UserService){}
    @Get()
    async getAllUsers(){
        return await this.UserServive.getAllUser();
    } 
    
    @Post('/create')
    async createUser(@Body() CreateUserDto: CreateUserDto){
        return await this.UserServive.createUser(CreateUserDto)
    }

    @Put('/:user_id')
    async updateUser(@Body() userinfo: CreateUserDto, @Param("user_id") user_id:string){
        return await this.UserServive.updateUser(userinfo,user_id);
    }

    @Delete("/delete/:user_id")
    async deleteUser(@Param("user_id") user_id:string){
        return await this.UserServive.deleteUser(user_id);
    }

    @Get("/:user_id")
    async getUserByID(@Param("user_id") user_id:string){
        return await this.UserServive.getUserByID(user_id);
    }
}
