import Image from "next/image";
import Link from 'next/link'
import { TbArrowBackUp } from "react-icons/tb";



export default function Home() {
    return (
        <div className=" bg-black">
            <section className="bg-heroImg bg-cover bg-center h-screen bg-repeat">
                <nav className="flex justify-evenly sm:justify-between items-center	 px-0 sm:px-24 py-4">
                    <div>
                        <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} />
                    </div>
                    <div>
                        <button className=" text-white border rounded-2xl p-2 border-red-600">CONNECT WALLET </button>
                    </div>
                </nav>
                {/* successfully verified -script*/}
                <section className="flex flex-col justify-center items-center gap-8 top-16 relative">
                    <div>
                        <Image src="/Successful.png" alt={"img"} height={"500"} width={"500"} />
                    </div>

                    <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-80 sm:w-96 text-white">
                        <div className="flex flex-col justify-center items-center gap-4 py-6">
                            <div className=" flex flex-col items-center text-center border border-red-600 w-60 bg-white h-60- rounded-xl shadow-2xl">
                                <img src="boxImg.png" alt="" height={"200"} width={"200"} />
                            </div>
                            {/* array */}
                            <p>Item Name | <a href="#"> Avarter-Banshee</a></p>
                            <p>Item ID |<a href="#">AvaV1A1zP1ee</a></p>
                            <p> Current Holder | <a href="#">1A1zP1eQ</a>...</p>
                            {/* array */}

                        </div>
                    </div>
                    <Link className="shadow-2xl flex gap-3 items-center border-2 text-white border-red-600 rounded-2xl  px-8 py-2 " href="/profile">BACK  <a className="text-red-600 text-2xl" href="/profile"><TbArrowBackUp /></a></Link>

                    <div></div>
                </section>
                {/*  */}
            </section>

        </div>
    );
}