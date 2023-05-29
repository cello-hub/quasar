import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ResponseInterceptor } from './interceptor/response'
import { HttpExceptionFilter } from './filter/except'
import { ENV_DEV } from './utils/env'
import cookieParser from 'cookie-parser'
import { AuthGuard } from './modules/auth/auth.guard'

const PORT = process.env.PORT || 8080
const INTERFACE_PORT = ENV_DEV ? 5173 : 8088
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ENV_DEV ? ['log', 'debug', 'error', 'warn'] : ['error', 'warn']
  })
  app.enableCors({
    origin: `http://localhost:${INTERFACE_PORT}`,
    credentials: true
  })
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())
  app.use(cookieParser())
  app.useGlobalGuards(new AuthGuard())

  await app.listen(PORT)

  console.log(
    `Server started in ${process.env.APP_MODE} mode, http://127.0.0.1:${PORT}`
  )
}
bootstrap()
