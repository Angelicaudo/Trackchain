"use client";

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { useBNSResolver } from "../utils/bnsResolver";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { namehash } from "viem/ens";


export default function Home() {
  const router = useRouter();

  const [nameHash, setNameHash] = useState(null);
  const [formData, setFormData] = useState({basename: ""})

  const { data: walletAddress } = useBNSResolver(nameHash);

  // Update walletAddress when the contract read returns data
  useEffect(() => {
    if (walletAddress) {      
      // Redirect to wallet page
      router.push(`/wallet/${walletAddress}`);
    }
  }, [walletAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.basename.endsWith(".base.eth")) {
      const hash = namehash(formData.basename);
      setNameHash(hash);
    }
  }

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
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center  border-2 border-red-600 rounded-xl overflow-hidden w-full max-w-md bg-white text-black">
                    <IoIosSearch className="h-8 w-8 text-stone-950 mx-3 text-8xl-" />
                    <input
                      type="text"
                      name="basename"
                      placeholder="Search using base name"
                      className="w-full sm:w-[300px]  py-2 px-3 focus:outline-none placeholder:text-black"
                      onChange={handleChange}
                    />
                  </div>
                </form>
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
