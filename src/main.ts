import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ResponseInterceptor } from './interceptor/response'
import { HttpExceptionFilter } from './filter/except'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(3000)

  console.log('http://127.0.0.1:3000')
}
bootstrap()
