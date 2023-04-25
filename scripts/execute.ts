import { NestFactory } from '@nestjs/core'
import { AppModule } from '../src/app.module'
import { GetAccounts } from './command/account'

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule)
  const command = process.argv[2]

  // const args = process.argv.slice(3)

  if (command === 'create') {
    await GetAccounts(app)
  } else if (command === 'update') {
  } else {
    process.exit(1)
  }

  await app.close()

  process.exit(0)
}

bootstrap()
