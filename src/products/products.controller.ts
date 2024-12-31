import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { PRODUCTS_SERVICE } from "../config";
import { ClientProxy } from "@nestjs/microservices";

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCTS_SERVICE) private readonly productsClient: ClientProxy
  ) {
  }

  @Post()
  createProduct() {
    return 'Crea un producto';
  }

  @Get()
  findAll() {
    return this.productsClient.send({ cmd: 'find-all-products' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'Muestra el producto con el id: ' + id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'Elimina el producto con el id: ' + id;
  }

  @Patch(':id')
  patchProduct(
    @Param('id') id: string,
    @Body() body: any
  ) {
    return 'Actualiza el producto con el id: ' + id;
  }

}
