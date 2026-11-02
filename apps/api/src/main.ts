import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {HttpExceptionFilter} from "./common/filters/http-exception.filter.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
  });

  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

    // 1. Общая информация о нашем API
    const config = new DocumentBuilder()
        .setTitle('SeatFlow API')
        .setDescription('API платформы бронирования мероприятий и мест')
        .setVersion('1.0.0')
        .build();

    // 2. Генерация документа и подключение Swagger UI
    SwaggerModule.setup(
        'docs',
        app,
        () => SwaggerModule.createDocument(app, config),
    );

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
