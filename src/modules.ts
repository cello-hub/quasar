import { ChainModule } from './chain/chain.module'
import { EventModule } from './event/event.module'
import { SocialModule } from './social/social.module'
import { TwitterModule } from './twitter/twitter.module'
import { UserModule } from './user/user.module'
import { WalletModule } from './wallet/wallet.module'

export default [
  WalletModule,
  ChainModule,
  SocialModule,
  EventModule,
  TwitterModule,
  UserModule
]
