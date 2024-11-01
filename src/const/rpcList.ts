import { shuffleArray } from 'src/utils/shuffleArray';

const optRPCList = [
  'https://mainnet.optimism.io',
  'https://lb.nodies.app/v1/3606eebc8e2a4935a77619545f300d8a',
  // 'https://optimism.drpc.org',
  // `https://lb.drpc.org/ogrpc?network=optimism&dkey=${process.env.NEXT_PUBLIC_DKEY}`,
  // 'https://optimism.meowrpc.com',
];

const arbRPCList = [
  'https://arb1.arbitrum.io/rpc',
  'https://lb.nodies.app/v1/ea394185e55e4f0596447e844d5bcf60',

  // 'https://arbitrum.drpc.org',
  // `https://lb.drpc.org/ogrpc?network=arbitrum&dkey=${process.env.NEXT_PUBLIC_DKEY}`,
  // 'https://arbitrum.meowrpc.com',
];

const basRPCList = [
  'https://mainnet.base.org/',
  'https://lb.nodies.app/v1/5e931fc9d78449dbb8b954d9e760a03d',

  // 'https://base.meowrpc.com',
  // // 'https://base.drpc.org',
  // `https://lb.drpc.org/ogrpc?network=base&dkey=${process.env.NEXT_PUBLIC_DKEY}`,
];

export const publicRPCList = {
  '10': shuffleArray(optRPCList),
  '42161': shuffleArray(arbRPCList),
  '8453': shuffleArray(basRPCList),
};
