import { BalanceModule } from './balance/balance.module'
import { ChainModule } from './chain/chain.module'
import { EcosystemModule } from './ecosystem/ecosystem.module'
import { SocialModule } from './social/social.module'
import { TokenModule } from './token/token.module'
import { TwitterModule } from './twitter/twitter.module'
import { UserModule } from './user/user.module'
import { WalletModule } from './wallet/wallet.module'

export default [
  WalletModule,
  ChainModule,
  SocialModule,
  EcosystemModule,
  TwitterModule,
  UserModule,
  TokenModule,
  BalanceModule
]