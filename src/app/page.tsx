"use client";

import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

import { ConnectButton } from "@/components/WalletConnect";


export default function Home() {
  return (
    <div className=" bg-black">
      <section className="bg-heroImg bg-cover bg-center h-screen bg-repeat">
        <nav className="flex justify-evenly sm:justify-between items-center	 px-0 sm:px-24 py-4">
          <div>
            <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} />
          </div>
          <div>
            <ConnectButton />
          </div>
        </nav>

        {/* hero */}
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
                  placeholder="Search using item id"
                  className="w-full sm:w-[300px]  py-2 px-3 focus:outline-none placeholder:text-black"
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
                <img src="boxImg.png" alt="" height={"80"} width={"80"} />
                <p>arbiter34..</p>
              </div>

              <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                <img src="boxImg.png" alt="" height={"80"} width={"80"} />
                <p>arbiter34..</p>
              </div>

              <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                <img src="boxImg.png" alt="" height={"80"} width={"80"} />
                <p>arbiter34..</p>
              </div>

              <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                <img src="boxImg.png" alt="" height={"80"} width={"80"} />
                <p>arbiter34..</p>
              </div>

              <div className="bg-zinc-900 hover:bg-white hover:text-black px-8 py-2 rounded-2xl">
                <img src="boxImg.png" alt="" height={"80"} width={"80"} />
                <p>arbiter34..</p>
              </div>
            </div>
          </div>
          {/*  */}

        </section>


      </section>







    </div>
  );
}
