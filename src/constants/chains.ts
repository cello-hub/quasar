export enum TopicEnum {
  BTC = 'BTC',
  Ethereum = 'Ethereum',
  Binance = 'Binance',
  Polygon = 'Polygon',
  Optimism = 'Optimism',
  Arbitrum = 'Arbitrum',
  Solana = 'Solana',
  ZkSync = 'ZkSync',
  Aptos = 'Aptos',
  Sui = 'Sui',
  Fantom = 'Fantom'
}

export default [
  {
    topic: 'BTC',
    chain_id: 0,
    symbol: 'BTC',
    explorer: '',
    evm: false
  },
  {
    topic: 'Ethereum',
    chain_id: 1,
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
    evm: true
  },
  {
    topic: 'Binance',
    chain_id: 56,
    symbol: 'BNB',
    explorer: 'https://bscscan.com',
    evm: true
  },
  {
    topic: 'Polygon',
    chain_id: 137,
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com',
    evm: true
  },
  {
    topic: 'Optimism',
    chain_id: 10,
    symbol: 'ETH',
    explorer: 'https://optimistic.etherscan.io',
    evm: true
  },
  {
    topic: 'Arbitrum',
    chain_id: 42161,
    symbol: 'ETH',
    explorer: 'https://arbiscan.io',
    evm: true
  },
  {
    topic: 'Solana',
    chain_id: 1,
    symbol: 'SOL',
    explorer: 'https://solscan.io',
    evm: true
  },
  {
    topic: 'ZkSync',
    chain_id: 324,
    symbol: 'ETH',
    explorer: 'https://explorer.zksync.io',
    evm: true
  },
  {
    topic: 'Aptos',
    chain_id: 1,
    symbol: 'APT',
    explorer: 'https://explorer.aptoslabs.com',
    evm: false
  },
  {
    topic: 'Sui',
    chain_id: 1,
    symbol: 'SUI',
    explorer: 'https://suiexplorer.com',
    evm: false
  },
  {
    topic: 'Fantom',
    chain_id: 250,
    symbol: 'FTM',
    explorer: 'https://ftmscan.com',
    evm: true
  }
]
