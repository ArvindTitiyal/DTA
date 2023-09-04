import { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { versionKey: false, autoIndex: true }
);

export const ProductModel = model("ProductModel", ProductSchema);