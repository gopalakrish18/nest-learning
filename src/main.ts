import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('My Learning App API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableShutdownHooks();

  /*Class validator*/
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips out properties that don't have validation decorators
      forbidNonWhitelisted: true, // Throws an error if unknown properties are passed
      transform: true, // Automatically transforms payloads to DTO class instances
    }),
  );


  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
