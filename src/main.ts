import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from "./config";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger('Main-Gateway');

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1/api');

  await app.listen(envs.PORT ?? 3000);

  logger.log(`Gateway corriendo en el puerto: ${envs.PORT}`);
}
bootstrap();
