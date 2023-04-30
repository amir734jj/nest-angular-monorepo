import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { User } from '../../lib/model';

const usr: User = { name: 'mair' };
console.log(usr);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
