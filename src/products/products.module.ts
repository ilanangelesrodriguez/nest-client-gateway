import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { envs, PRODUCTS_SERVICE } from "../config";

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCTS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.PRODUCTS_MICROSERVICE_HOST || '127.0.0.1',
          port: envs.PRODUCTS_MICROSERVICE_PORT || 3002,
        }
      },
    ]),
  ],
})
export class ProductsModule {}
