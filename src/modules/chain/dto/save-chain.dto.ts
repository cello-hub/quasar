export class SaveChainDto {
  id?: number
  topic: string
  chain_id: number
  symbol: string
  evm: boolean
  testnet?: boolean
  explorer: string
}
