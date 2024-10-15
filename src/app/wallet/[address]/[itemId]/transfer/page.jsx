
import Image from "next/image";
import Link from 'next/link'
import { TbArrowBackUp } from "react-icons/tb";



export default function TransferItem({ params }) {
  const address = params.address;
  const itemId = params.itemId
  
    return (
        <div>
          {/* successfully verified -script*/}
          <section className="flex flex-col justify-center items-center gap-8 top-10 relative">
              <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-80 sm:w-80 text-white">
                  <div className="flex flex-col justify-center items-center gap-4 py-6">
                      <div className=" flex flex-col items-center text-center border border-red-600 w-60 bg-white h-60- rounded-xl shadow-2xl">
                          <Image src="/boxImg.png" alt="" height={"200"} width={"200"} />
                      </div>
                      {/* array */}
                      <p>Item Name | Avarter-Banshee</p>
                      <p>Item ID | AvaV1A1zP1ee</p>
                      {/* array */}

                  </div>
              </div>

              <input className="shadow-2xl border-4 rounded-xl focus:outline-none border-red-800 w-96 h-14 px-4 bg-white" type="text" placeholder="Enter Recipient address" />

              <div className="flex flex-row justify-center gap-6 text-white">
                  <Link className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2" href="#">Transfer Item</Link>
                  <Link className="shadow-2xl flex gap-3  items-center border-2 border-red-600 rounded-2xl  px-8 py-2 " href={`/wallet/${address}/${itemId}`}>BACK <span className="text-red-600 text-2xl"><TbArrowBackUp /></span></Link>
              </div>
              <div></div>
          </section>
          {/*  */}
        </div>
    );
}