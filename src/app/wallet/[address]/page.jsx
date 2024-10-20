"use client";

import Link from 'next/link'
import Image from 'next/image';

import { useAccount, useReadContract } from 'wagmi';
import { baseSepolia } from "viem/chains";

import { useState, useEffect } from "react";

import { trackchainContract } from "@/contract/deployedContract"


const OwnedItems = ({ params }) => {
  const address = params.address;

  const account = useAccount();

  const [items, setItems] = useState([]);

  const { data } = useReadContract({
    abi: trackchainContract.abi,
    address: trackchainContract.address,
    functionName: "getItemsByOwner",
    args: [address],
    chainId: baseSepolia.id
  });

  useEffect(() => {
    if (data) {
        setItems(data);
    }
  }, [data]);


  return (
    <div>
      <section className="top-6 sm:top-14 relative">
        <div className="flex flex-row justify-between px-6 sm:px-24">
            <p className=" text-white font-semibold text-xl">{address} Items</p>
            <Link className="shadow-2xl flex gap-3 items-center border-2 text-white border-red-600 rounded-3xl  px-4 py-2 " href={`/wallet/add-item`}>Add Your Item</Link>
        </div>

        <section className="flex flex-col sm:flex-row  justify-center items-center gap-9 top-10 relative">
            {items.map((item, index) => (
              <div key={index} className=" shadow-2xl rounded-2xl border-2 border-red-600 w-64 sm:w-72 text-white">
                  <div className="flex flex-col justify-center items-center gap-4 py-6">
                      <div className=" flex flex-col items-center text-center border border-red-600 w-44 h-40- py-4  bg-white rounded-xl shadow-2xl">
                          <Image src="/boxImg.png" alt="" height={"160"} width={"160"} />
                      </div>
                      <p>Item Name | <Link href={`/wallet/${address}/${item.itemId}`}>{item.name}</Link></p>
                      <p>Item ID | <Link href={`/wallet/${address}/${item.itemId}`}>{item.itemId}</Link></p>
                      {account.address == address && <Link className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2" href={`/wallet/${address}/${item.itemId}/transfer`}>Transfer Item</Link>}
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