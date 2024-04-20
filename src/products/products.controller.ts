import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('')
  getAllProducts(
    @Query('limit') limit = 0,
    @Query('offset') offset = 0,
    @Query('s') s?: string,
  ): string {
    return `products limit: ${limit || ''}, offset: ${offset || ''}, s: ${s || ''}`;
  }

  @Get('/:id')
  getProductById(@Param('id') id: number): string {
    return `product id: ${id}`;
  }
}
