"use client";

import Image from "next/image";
import Link from 'next/link'
import { TbArrowBackUp } from "react-icons/tb";
import { useReadContract, useWriteContract } from "wagmi";
import { useState, useEffect } from "react";
import { baseSepolia } from "viem/chains";
import { namehash } from "viem/ens";
import { useBNSResolver } from "@/utils/bnsResolver";
import { trackchainContract } from "@/contract/deployedContract"


export default function TransferItem({ params }) {
  const address = params.address;
  const itemId = params.itemId;

  const [nameHash, setNameHash] = useState(null);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [item, setItem] = useState({
    name: "",
    itemId: "",
    ownershipHistory: [{
      currentOwner: "",
      previousOwner: "",
      dateTransferred: 0
    }],
  });

  const { data: walletAddress } = useBNSResolver(nameHash);
  useEffect(() => {
    if (walletAddress && walletAddress !== "0x0000000000000000000000000000000000000000") {
      setRecipientAddress(walletAddress);
    }
  }, [walletAddress]);

  const { data: onchainItem } = useReadContract({
    abi: trackchainContract.abi,
    address: trackchainContract.address,
    functionName: "getOwnershipHistory",
    args: [itemId],
    chainId: baseSepolia.id
  });
  useEffect(() => {
    if (onchainItem) {
        setItem(onchainItem);
    }
  }, [onchainItem]);

  const { error, status, writeContract } = useWriteContract();

  const handleChange = (e) => {
    const value = e.target.value;

    setRecipientAddress(value);

    if (value.endsWith(".base.eth")) {
      var hash = namehash(value);

      setNameHash(hash);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (recipientAddress.startsWith("0x")) {
      if (recipientAddress == address) {
        alert("Recipient cannot be current owner!");

        return;
      }

      if (confirm(`Do you want to transfer ${item.name} to ${recipientAddress}?`)) {
        writeContract({
          abi: trackchainContract.abi,
          address: trackchainContract.address,
          functionName: "transferOwnership",
          args: [
            itemId,
            recipientAddress
          ]      
        });

        console.log(status);

        if (status == "error") {
          alert("An error occurred!");
          console.log(error);
        }
      }
    }
  }
  
  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-8 top-10 relative" onSubmit={handleSubmit}>
        <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-80 sm:w-80 text-white">
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <div className=" flex flex-col items-center text-center border border-red-600 w-60 bg-white h-60- rounded-xl shadow-2xl">
              <Image src="/boxImg.png" alt="" height={"200"} width={"200"} />
            </div>
            <p>Item Name | {item.name}</p>
            <p>Item ID | {item.itemId}</p>
          </div>
        </div>

        <input className="shadow-2xl border-4 rounded-xl focus:outline-none border-red-800 w-96 h-14 px-4 bg-white" type="text" placeholder="Enter recipient base name or address" value={recipientAddress} onChange={handleChange} />

        <div className="flex flex-row justify-center gap-6 text-white">
          <button type="submit" className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2">Transfer Item</button>
          <Link className="shadow-2xl flex gap-3  items-center border-2 border-red-600 rounded-2xl  px-8 py-2 " href={`/wallet/${address}/${itemId}`}>BACK <span className="text-red-600 text-2xl"><TbArrowBackUp /></span></Link>
        </div>
        <div></div>
      </form>
    </div>
  );
}