import { http, createConfig } from 'wagmi';
import { baseSepolia, base } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'TrackChain',
  projectId: '619c01ad2dc9529ae668a3464f2bee2f',
  chains: [base, baseSepolia],
  ssr: true,
});

// export const config = createConfig({
//   chains: [baseSepolia, base],
//   connectors: [
//     coinbaseWallet({
//       appName: 'TrackChain',
//       preference: 'smartWalletOnly',
//     }),
//   ],
//   transports: {
//     [baseSepolia.id]: http(),
//     [base.id]: http(),
//   },
//   ssr: true
// });

