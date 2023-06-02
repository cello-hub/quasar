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
    explorer: '',
    evm: false
  },
  {
    topic: TopicEnum.Ethereum,
    chain_id: 1,
    hex_chain_id: '0x1',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
    evm: true
  },
  {
    topic: TopicEnum.Binance,
    chain_id: 56,
    hex_chain_id: '0x38',
    symbol: 'BNB',
    explorer: 'https://bscscan.com',
    evm: true
  },
  {
    topic: TopicEnum.Polygon,
    chain_id: 137,
    hex_chain_id: '0x89',
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com',
    evm: true
  },
  {
    topic: TopicEnum.Optimism,
    chain_id: 10,
    hex_chain_id: '0xa',
    symbol: 'ETH',
    explorer: 'https://optimistic.etherscan.io',
    evm: true
  },
  {
    topic: TopicEnum.Arbitrum,
    chain_id: 42161,
    hex_chain_id: '0xa4b1',
    symbol: 'ETH',
    explorer: 'https://arbiscan.io',
    evm: true
  },
  {
    topic: TopicEnum.Solana,
    chain_id: 1,
    hex_chain_id: '0x1',
    symbol: 'SOL',
    explorer: 'https://solscan.io',
    evm: true
  },
  {
    topic: TopicEnum.ZkSync,
    chain_id: 324,
    hex_chain_id: '0x144',
    symbol: 'ETH',
    explorer: 'https://explorer.zksync.io',
    evm: true
  },
  {
    topic: TopicEnum.Aptos,
    chain_id: 1,
    hex_chain_id: '0x1',
    symbol: 'APT',
    explorer: 'https://explorer.aptoslabs.com',
    evm: false
  },
  {
    topic: TopicEnum.Sui,
    chain_id: 1,
    hex_chain_id: '0x1',
    symbol: 'SUI',
    explorer: 'https://suiexplorer.com',
    evm: false
  },
  {
    topic: TopicEnum.Fantom,
    chain_id: 250,
    hex_chain_id: '0xfa',
    symbol: 'FTM',
    explorer: 'https://ftmscan.com',
    evm: true
  }
]
