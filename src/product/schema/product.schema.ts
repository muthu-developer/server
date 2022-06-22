import * as mongoos from "mongoose";
import { UserSchema } from "src/user/schemas/user.schema";

export const ProductSchema = new mongoos.Schema({
    product_id: String,
    product_name: String,
    material_type: String,
    quantity: Number,
    category:String,
    warrenty: Date,
    dealer_name: String
});