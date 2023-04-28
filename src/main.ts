import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ResponseInterceptor } from './interceptor/response'
import { HttpExceptionFilter } from './filter/except'
import { ENV_DEV } from './utils/env'

const PORT = process.env.PORT || 8080

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ENV_DEV ? ['log', 'debug', 'error', 'warn'] : ['error', 'warn']
  })
  app.enableCors()
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(PORT)

  console.log(
    `Server started in ${process.env.APP_MODE} mode, http://127.0.0.1:${PORT}`
  )
}
bootstrap()
