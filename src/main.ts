import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // Change this to your Next.js app URL
    methods: ['GET', 'POST'], // Add other methods if needed
    credentials: true, // Allow credentials to be included
  });


  await app.listen(3001);
}
bootstrap();
