import { http, createConfig } from 'wagmi';
import { base, mainnet, baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
 
export const config = createConfig({
  chains: [base, mainnet],
  connectors: [
    coinbaseWallet({
      appName: 'TrackChain',
      preference: 'smartWalletOnly',
    }),
  ],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
    [baseSepolia.id]: http(),
  },
  ssr: true
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}