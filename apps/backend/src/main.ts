import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorFilter } from './error.filter';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurações de CORS com múltiplas origens
  const corsOptions: CorsOptions = {
    origin: 'https://app.marcianotattoo.com.br',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  app.enableCors(corsOptions);

  // Porta onde o backend vai ouvir
  await app.listen(3001); // O backend geralmente roda na 3001, se o frontend estiver na 3000
}

bootstrap();
