import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>){}
    
    async getAllUser(): Promise<User[]>{
        return await this.userModel.find();
    }

    async createUser(user: User): Promise<User>{
        user.sub = randomUUID();
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async updateUser(user:User,user_id: string): Promise<User>{
        const _user_ = await this.userModel.findOne({'_id':user_id});
        _user_.sub = randomUUID();
        _user_.name = user.name;
        _user_.email =  user.email;
        _user_.phone = user.phone;
        _user_.department = user.department;
        _user_.location = user.location;
        _user_.group = user.group;
        return await _user_.save();
    }

    async deleteUser(user_id: string): Promise<boolean>{
        const user = await this.userModel.findOne({"_id":user_id});
        if(user){
            await user.delete();
            return true
        }
        else{
            return false
        }
    }

    async getUserByID(user_id:string): Promise<User>{
        try{
            const userByID = await this.userModel.findOne({"_id":user_id});
            if(userByID){
                return userByID;
            }
        }
        catch(error){
            return Promise.reject("User Not Found")
        }
    }
}
