import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://muthu97876:test123@cluster0.gb28b.mongodb.net/?retryWrites=true&w=majority'), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
