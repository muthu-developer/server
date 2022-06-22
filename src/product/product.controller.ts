import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Get("/all")
    async getAllProduct(){
        return await this.productService.getAllProduct()
    }

    @Post("/create-product")
    async createProducts(@Body() body:any){
        return await this.productService.addProduct(body);
    }

    @Get("/product-details")
    async getProductDetails(){
        return await this.productService.getProductwithDelear();
    }
}
