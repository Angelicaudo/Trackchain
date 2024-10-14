"use client";

import Image from "next/image";
import Link from 'next/link'

import { TbArrowBackUp } from "react-icons/tb";

import { useEffect, useState } from "react";

import { useReadContract } from "wagmi";

import { baseSepolia } from "viem/chains";


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

const truncateAddress = (input: string) =>
  input?.length > 13 ? `${input.substring(0, 11)}...` : input;

const blockTimestampToDate = (timestamp: number) => {
  const date = new Date(Number(timestamp) * 1000);
  return date.toLocaleString('en-GB', { hour12: true });
}

const TrackChainAddress = "0xAA11a1Ca9CE13B9cb7B6ca00270Eeec27bA15287";
const TrackChainABI = [
  {
		"inputs": [
			{
				"internalType": "string",
				"name": "_itemId",
				"type": "string"
			}
		],
		"name": "getOwnershipHistory",
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
				"internalType": "struct OwnershipHistoryTwo.Item",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
];

export default function ItemHistory({ params }: { params: { address: string, itemId: string } }) {
  const address = params.address;
  const itemId = params.itemId;

  const [item, setItem] = useState<Item>({
    name: "",
    itemId: "",
    ownershipHistory: [{
      currentOwner: "",
      previousOwner: "",
      dateTransferred: 0
    }],
  });

  const { data } = useReadContract({
    abi: TrackChainABI,
    address: TrackChainAddress,
    functionName: "getOwnershipHistory",
    args: [itemId],
    chainId: baseSepolia.id
  });

  useEffect(() => {
    if (data) {
        setItem(data as Item);
    }
  }, [data]);

  return (
    <div>
      {/* successfully verified -script*/}
      <section className="flex flex-col justify-center items-center gap-8 top-10 relative">
        <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-80 sm:w-96 text-white">
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <div className=" flex flex-col items-center text-center border border-red-600 w-60 bg-white h-60- rounded-xl shadow-2xl">
                <Image src="/boxImg.png" alt="" height={"200"} width={"200"} />
            </div>

            <p>Item Name | {item.name}</p>
            <p>Item ID | {item.itemId}</p>
            <p> Current Holder | <Link href="#">{truncateAddress(item.ownershipHistory[item.ownershipHistory.length - 1].currentOwner)}</Link></p>
            <p> Listed by | <Link href="#">{truncateAddress(item.ownershipHistory[0].currentOwner)}</Link></p>
          </div>

          <div className="flex flex-row justify-center p-4 gap-6">
            <Link href={`/wallet/${address}/${itemId}/transfer`} className="bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-1 text-white">TRANSFER</Link>
            <Link href={`/wallet/${address}/`} className="shadow-2xl flex gap-3 items-center border-2 text-white border-red-600 rounded-2xl  px-8 py-2 ">BACK <span className="text-red-600 text-2xl"><TbArrowBackUp /></span></Link>
          </div>
        </div>
      </section>
      {/* table history */}

      <section className=" flex flex-col justify-around items-center gap-14 top-32 relative">
        <div className=" shadow-2xl border-2 border-red-600 rounded-2xl px-8 py-4">
          <div className="py-6">
            <h1 className="text-white font-bold text-2xl">Ownership History</h1>
          </div>


          {/* table test */}
          <table className="text-white ">
            <thead className="bg-black">
              <tr className="t">
                <th className="w-3/12 px-4 py-2 text-left border-b">Holder <br />
                  <span className=" font-normal">Base name</span>
                </th>
                <th className="w-3/12 px-4 py-2 text-left border-b">Transfer <br /> <span className=" font-normal">date/time</span></th>
                <th className="w-3/12 px-4 py-2 text-left border-b">Address <br /><span className=" font-normal">From/to</span></th>
                <th className="w-3/12 px-4 py-2 text-left  border-b">Status</th>
              </tr>
            </thead>

            <tbody>
              {item.ownershipHistory.map((item, index) => (
                <tr>
                  <td className="  px-4 py-2 "><Link href="#">{truncateAddress(item.currentOwner)}</Link></td>
                  <td className=" px-4 py-2">{blockTimestampToDate(item.dateTransferred)}</td>
                  <td className=" px-4 py-2"><Link href="#">{truncateAddress(item.previousOwner)}</Link> <br />
                    <Link href="#">{truncateAddress(item.currentOwner)}</Link></td>
                  <td className=" px-4 py-2 ">Successful</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </section>
    </div>
  );
}