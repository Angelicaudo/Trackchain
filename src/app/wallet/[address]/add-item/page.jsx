import { TbArrowBackUp } from "react-icons/tb";
import Link from 'next/link'


export default function AddItem({ params }) {
  const address = params.address;

  return (
    <div>
      <section className="flex flex-col gap-14 justify-center items-center text-white top-20 relative">
        <div className="border border-red-600 w-80 h-60 rounded-xl shadow-2xl">
          <div className="flex justify-center items-center top-28 relative">
              <button className="border border-red-600 rounded-xl px-4 py-1">Choose Item</button>
          </div>
        </div>

        <form className="flex flex-col  gap-6" action="" method="get">
          <input className="shadow-2xl border-4 rounded-xl border-red-800 w-96 h-14 px-4 bg-black focus:outline-none" type="text" placeholder="Item Name" />
          <input className="shadow-2xl border-4 rounded-xl border-red-800 w-96 h-14 px-4 bg-black focus:outline-none" type="text" placeholder="Generating Item ID" />
          <div className="flex flex-row justify-center gap-6">
            <button className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2">Add Item</button>
            <Link href={`/wallet/${address}/`} className="shadow-2xl flex gap-3 items-center border-2 border-red-600 rounded-2xl  px-8 py-2 ">BACK <span className="text-red-600 text-2xl"><TbArrowBackUp /></span> </Link>
          </div>
        </form>
        <div></div>
      </section>
    </div>
  );
}
