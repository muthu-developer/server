import { User } from "src/user/user.model";

export interface Product{
    product_id: string,
    product_name: string,
    material_type: string,
    quantity: number,
    category:string,
    warrenty: Date,
    dealer_name: string
}