import { RpcNodeModule } from './rpc-node/rpc-node.module'
import { AuthModule } from './auth/auth.module'
import { BalanceModule } from './balance/balance.module'
import { ChainModule } from './chain/chain.module'
import { EcosystemModule } from './ecosystem/ecosystem.module'
import { MnemonicModule } from './mnemonic/mnemonic.module'
import { ScheduleModule } from './schedule/schedule.module'
import { SocialModule } from './social/social.module'
import { TokenModule } from './token/token.module'
import { TwitterModule } from './twitter/twitter.module'
import { WalletModule } from './wallet/wallet.module'

export default [
  WalletModule,
  ChainModule,
  SocialModule,
  EcosystemModule,
  TwitterModule,
  TokenModule,
  BalanceModule,
  AuthModule,
  ScheduleModule,
  MnemonicModule,
  RpcNodeModule
]
