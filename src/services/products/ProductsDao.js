import { ProductModel } from "./models/Products";

export class ProductsDao {
  async createProduct(Product) {
    const newProduct = new ProductModel(Product);
    await newProduct.save();
    return newProduct.toJSON();
  }
}