"use client";

import Link from 'next/link'
import { TbArrowBackUp } from "react-icons/tb";
import Image from 'next/image';

import { useReadContract } from 'wagmi';
import { baseSepolia } from "viem/chains";

import { useState, useEffect } from "react";


interface OwnershipRecord {
  currentOwner: string;
  previousOwner: string;
  dateTransferred: number;
}

interface Item {
    name: string;
    itemId: string;
    ownershipHistory: OwnershipRecord[];
}


const TrackChainAddress = "0x9da1832cd9dd3ba900ea172ec4702318697df074";
const TrackChainABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_ownerAddress",
        "type": "address"
      }
    ],
    "name": "getItemsByOwner",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "itemId",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "currentOwner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "dateTransferred",
                "type": "uint256"
              }
            ],
            "internalType": "struct OwnershipHistoryTwo.OwnershipRecord[]",
            "name": "ownershipHistory",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct OwnershipHistoryTwo.Item[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },  
];


const OwnedItems = ({ params }: { params: { address: string } }) => {
  // const address = params.address;
  const address = "0xd85288006DcA5D7daeFD462eEdBF8899fD445B08"; // TODO: Remove this line and uncomment the top line
  const [items, setItems] = useState<Item[]>([]);

  const { data } = useReadContract({
    abi: TrackChainABI,
    address: TrackChainAddress,
    functionName: "getItemsByOwner",
    args: [address],
    chainId: baseSepolia.id
  });

  useEffect(() => {
    if (data) {
        setItems(data as Item[]); // Set the fetched items into the state
    }
  }, [data]);


  return (
    <div>
      <section className="top-6 sm:top-14 relative">
        <div className="flex flex-row justify-between px-6 sm:px-24">
            <p className=" text-white font-semibold text-xl">{address} Items</p>
            <Link className="shadow-2xl flex gap-3 items-center border-2 text-white border-red-600 rounded-3xl  px-4 py-2 " href={`/wallet/${address}/add-item`}>Add Item</Link>
        </div>

        <section className="flex flex-col sm:flex-row  justify-center items-center gap-9 top-10 relative">
            {items.map((item, index) => (
              <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-64 sm:w-72 text-white">
                  <div className="flex flex-col justify-center items-center gap-4 py-6">
                      <div className=" flex flex-col items-center text-center border border-red-600 w-44 h-40- py-4  bg-white rounded-xl shadow-2xl">
                          <Image src="/boxImg.png" alt="" height={"160"} width={"160"} />
                      </div>
                      <p>Item Name | <Link href={`/wallet/${address}/${item.itemId}`}>{item.name}</Link></p>
                      <p>Item ID | <Link href={`/wallet/${address}/${item.itemId}`}>{item.itemId}</Link></p>
                      <Link className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2" href={`/wallet/${address}/${item.itemId}/transfer`}>Transfer Item</Link>
                  </div>
              </div>
            ))}
        </section>
        <div className="top-40 relative text-white-">j</div>
      </section>
    </div>
  );
}

export default OwnedItems;