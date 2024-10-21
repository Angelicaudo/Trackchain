"use client";

import { TbArrowBackUp } from "react-icons/tb";
import Link from 'next/link'
import { useAccount, useWriteContract } from "wagmi";
import { useState } from "react";
import { trackchainContract } from "@/contract/deployedContract";
import { useRouter } from "next/navigation";


export default function AddItem() {
  const account = useAccount();

  const router = useRouter();

  const [itemId, setItemId] = useState(() => crypto.randomUUID());
  const [itemName, setItemName] = useState("");

  const { status, writeContract } = useWriteContract();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirm(`Do you want to add item ${itemName} to blockchain?`)) {
      writeContract({
        abi: trackchainContract.abi,
        address: trackchainContract.address,
        functionName: "createItem",
        args: [itemId, itemName]
      });

      setTimeout(() => {
        console.log(status);

        if (status == "success") {
          router.push(`/wallet/${account.address}`);
        }
      }, 5000);      
    }
  }

  return (
    <div>
      <section className="flex flex-col gap-14 justify-center items-center text-white top-20 relative">
        <div className="border border-red-600 w-80 h-60 rounded-xl shadow-2xl">
          <div className="flex justify-center items-center top-28 relative">
              <button className="border border-red-600 rounded-xl px-4 py-1">Choose Item</button>
          </div>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input className="shadow-2xl border-4 rounded-xl border-red-800 w-96 h-14 px-4 bg-black focus:outline-none" name="itemname" type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name" />
          <input className="shadow-2xl border-4 rounded-xl border-red-800 w-96 h-14 px-4 bg-black focus:outline-none" name="itemid" type="text" disabled={false} placeholder="Generating Item ID" value={itemId} onChange={(e) => setItemId(e.target.value)} />
          <div className="flex flex-row justify-center gap-6">
            <button type="submit" className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2">Add Item</button>
            <Link href="/" className="shadow-2xl flex gap-3 items-center border-2 border-red-600 rounded-2xl  px-8 py-2 ">BACK <span className="text-red-600 text-2xl"><TbArrowBackUp /></span> </Link>
          </div>
        </form>
        <div></div>
      </section>
    </div>
  );
}
