import { baseSepolia, base } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'TrackChain',
  projectId: '619c01ad2dc9529ae668a3464f2bee2f', // Not recommended to upload ID...but here I am 
  chains: [base, baseSepolia],
  ssr: true,
});