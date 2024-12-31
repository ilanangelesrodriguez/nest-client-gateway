import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

@Controller('products')
export class ProductsController {
  constructor() {
  }

  @Post()
  createProduct() {
    return 'Crea un producto';
  }

  @Get()
  findAll() {
    return 'Lista todos los productos';
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
