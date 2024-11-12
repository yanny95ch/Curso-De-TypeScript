import faker from '@faker-js/faker';

import { Products } from './../models/product.model';
import { CreateProductDto, UpdateProductDto } from './../dtos /product.dto';
import {ProductService} from '../models/product-service-model'

export class ProductMemoryService implements ProductService {
  private products: Products[] = [];

  getAll() {
    return this.products;
  }

  create(data: CreateProductDto): Products{
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      }
    }
    return this.add(newProduct);
  }

  add(product: Products) {
    this.products.push(product);
    return product;
  }

  update (id: Products['id'], changes: UpdateProductDto ): Products{
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  findOne(id: Products['id']) {
    return this.products.find(item => item.id === id);
  }

}

