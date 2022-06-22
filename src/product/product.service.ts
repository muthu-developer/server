import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product> ){}

    async getAllProduct(): Promise<Product[]>{
        return await this.productModel.find();
    }

    async addProduct(product: Product):Promise<Product>{
        try{
            let exsitProduct = await this.productModel.findOne({"product_name":product.product_name});
            if(!exsitProduct){
                product.product_id = randomUUID();
                let newProduct = new this.productModel(product);
                let saved = await newProduct.save();
                return Promise.resolve(saved);
            }
        }
        catch(error){
            return Promise.reject("Invalid Product Details")
        }
    }

    async getProductwithDelear():Promise<Product[]>{
        const productandDelar = await this.productModel.aggregate([
            {
                $lookup:{
                    from:"users",
                    localField: "dealer_name",
                    foreignField: "name",
                    as:"Full Details"
                }
            }
        ]);
        return productandDelar;
    }
}
