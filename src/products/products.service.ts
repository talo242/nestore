import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return { message: 'This action adds a new product' };
  }

  findAll() {
    return { message: `This action returns all products` };
  }

  findOne(id: number) {
    return {
      message: `This action returns a #${id} product`,
    };
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return {
      message: `This action updates a #${id} product`,
    };
  }

  remove(id: number) {
    return {
      message: `This action removes a #${id} product`,
    };
  }
}
