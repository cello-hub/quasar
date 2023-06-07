export class CreateWalletDto {
  alias: string
  address: string
  secret?: string
  chainId: number
  available: boolean
}
