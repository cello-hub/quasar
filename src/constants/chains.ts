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
    topic: TopicEnum.BTC,
    chain_id: 0,
    hex_chain_id: '0x0',
    symbol: 'BTC',
    explorer: ''
  },
  {
    topic: TopicEnum.Ethereum,
    chain_id: 1,
    hex_chain_id: '0x1',
    symbol: 'ETH',
    explorer: 'https://etherscan.io'
  },
  {
    topic: TopicEnum.Binance,
    chain_id: 56,
    hex_chain_id: '0x38',
    symbol: 'BNB',
    explorer: 'https://bscscan.com'
  },
  {
    topic: TopicEnum.Polygon,
    chain_id: 137,
    hex_chain_id: '0x89',
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com'
  },
  {
    topic: TopicEnum.Optimism,
    chain_id: 10,
    hex_chain_id: '0xa',
    symbol: 'ETH',
    explorer: 'https://optimistic.etherscan.io'
  },
  {
    topic: TopicEnum.Arbitrum,
    chain_id: 42161,
    hex_chain_id: '0xa4b1',
    symbol: 'ETH',
    explorer: 'https://arbiscan.io'
  },
  {
    topic: TopicEnum.Solana,
    chain_id: 1,
    hex_chain_id: '0x1',
    symbol: 'SOL',
    explorer: 'https://solscan.io'
  },
  {
    topic: TopicEnum.ZkSync,
    chain_id: 324,
    hex_chain_id: '0x144',
    symbol: 'ETH',
    explorer: 'https://explorer.zksync.io'
  },
  {
    topic: TopicEnum.Aptos,
    chain_id: 1,
    hex_chain_id: '0x1',
    symbol: 'APT',
    explorer: 'https://explorer.aptoslabs.com'
  },
  {
    topic: TopicEnum.Sui,
    chain_id: 1,
    hex_chain_id: '0x1',
    symbol: 'SUI',
    explorer: 'https://suiexplorer.com'
  },
  {
    topic: TopicEnum.Fantom,
    chain_id: 250,
    hex_chain_id: '0xfa',
    symbol: 'FTM',
    explorer: 'https://ftmscan.com'
  }
]
