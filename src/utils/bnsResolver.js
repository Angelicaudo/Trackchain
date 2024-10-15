"use client";

import { useReadContract } from "wagmi";
import { base } from "viem/chains";


// Function to resolve BNS name to wallet address
export const useBNSResolver = (nameHash) => {
  const contractAddress = '0xC6d566A56A1aFf6508b41f6c90ff131615583BCD'; // L2Resolver Contract
  const contractAbi = [
    {
      "inputs": [{ "internalType": "bytes32", "name": "node", "type": "bytes32" }],
      "name": "addr",
      "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function",
    }
  ];

  const { data } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: 'addr',
    args: nameHash ? [nameHash] : undefined,
    chainId: base.id,
  });

  return { data };
};
