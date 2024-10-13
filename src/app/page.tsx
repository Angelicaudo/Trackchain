"use client";

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import { base } from "viem/chains";
import { useReadContract } from "wagmi";
import { namehash } from "viem/ens";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const [nameHash, setNameHash] = useState("");

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

  // Trigger the contract read when nameHash is set
  const { data } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: 'addr',
    args: nameHash ? [nameHash] : undefined, // Only pass args when nameHash exists
    chainId: base.id,
  });

  // Update walletAddress when the contract read returns data
  useEffect(() => {
    if (data && data !== "0x0000000000000000000000000000000000000000") {      
      // Redirect to wallet page
      router.push(`/wallet/${data}`);
    }
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Check if the input ends with ".base.eth"
    if (value.endsWith(".base.eth")) {
      // Resolve basename to wallet address
      const hash = namehash(value);

      setNameHash(hash); // Update state to trigger contract read
    }
  };

  // TODO: Abstract away the BNS resolution logic

  return (
        <div>
          <section>
            <div className="flex flex-col justify-center items-center gap-8 top-28 relative">
              <div className="flex flex-col gap-5">
                <div>
                  <Image src="/herobg.png" alt={"img"} height={"400"} width={"400"} />
                </div>

                <div>
                  <p className="text-white text-center tracking-widest">Effortlessly record and track the complete ownership <br /> history of your items.</p>
                </div>
              </div>

              <div>

                <div className="flex items-center  border-2 border-red-600 rounded-xl overflow-hidden w-full max-w-md bg-white text-black">
                  <IoIosSearch className="h-8 w-8 text-stone-950 mx-3 text-8xl-" />
                  <input
                    type="text"
                    placeholder="Search using base name"
                    className="w-full sm:w-[300px]  py-2 px-3 focus:outline-none placeholder:text-black"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* verify item */}
          <section className="top-60 relative">
            <div className="text-white flex justify-center flex-col items-center gap-8">
              <div className="border border-red-600 rounded-2xl">
                <p className="px-4 py-2 ">Newly Verified Item</p>
              </div>

              <div>
                <p className="text-center">Ownership is verified before an item is added to the <br /> blockchain</p>
              </div>
              {/* box id */}
              <div className="grid grid-cols-2  sm:grid-cols-5 gap-4">
                <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                  <Image src="/boxImg.png" alt="" height={"80"} width={"80"} />
                  <p>arbiter34..</p>
                </div>

                <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                  <Image src="/boxImg.png" alt="" height={"80"} width={"80"} />
                  <p>arbiter34..</p>
                </div>

                <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                  <Image src="/boxImg.png" alt="" height={"80"} width={"80"} />
                  <p>arbiter34..</p>
                </div>

                <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                  <Image src="/boxImg.png" alt="" height={"80"} width={"80"} />
                  <p>arbiter34..</p>
                </div>

                <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                  <Image src="/boxImg.png" alt="" height={"80"} width={"80"} />
                  <p>arbiter34..</p>
                </div>
              </div>
            </div>

            {/* how to achieve this */}
            <section >
              {/*  */}
              <div className="flex flex-col justify-center text-white items-center gap-8 top-28 relative">
                <div className="border border-red-600 rounded-2xl">
                  <p className="px-4 py-2 ">How we achieve this</p>
                </div>

                <div>
                  <p className="text-center tracking-wider">Trackchain allows users to trace and verify the ownership transfer <br /> of items, ensuring that the entire history <br /> of each item is transparently recorded and fully traceable on the blockchain.</p>
                </div>
              </div>
              {/* the main achievement box */}
              <div className="flex flex-col justify-center items-center top-44 sm:top-60 relative">
                <Image src="/group image.png" alt="" height={"800"} width={"800"} />
              </div>
            </section>

            {/*  */}

            <section className="top-60 sm:top-80 relative">
              <div className=" grid grid-cols-1 sm:grid-cols-3 text-white justify-items-center	">
              <div>
                <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} />
              </div>

              <div>
                <p>FAQ</p>
              </div>

              <div>
                <p>@2024 TrackChain.</p>
              </div>

              </div>
            </section>

          </section>
        </div>
  );
}
