import Image from "next/image";
import Link from 'next/link'
import { TbArrowBackUp } from "react-icons/tb";



export default function Home() {
    return (
        <div className=" bg-black">
            <section className="bg-heroImg bg-cover bg-center h-screen bg-repeat">
                <nav className="flex justify-evenly sm:justify-between items-center	px-0 sm:px-24 py-4">
                    <div>
                        <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} />
                    </div>
                    <div>
                        <button className=" text-white border rounded-2xl p-2 border-red-600">CONNECT WALLET </button>
                    </div>
                </nav>
                {/*  */}
                <section className="top-6 sm:top-14 relative">
                    <div className="flex flex-row justify-between px-6 sm:px-24">
                        <p className=" text-white font-semibold text-xl">Your Items</p>
                        <button className="shadow-2xl flex gap-3 items-center border-2 text-white border-red-600 rounded-3xl  px-4 py-2 ">BACK <a className="text-red-600 text-2xl" href=""><TbArrowBackUp /></a> </button>
                    </div>

                    {/* two box */}
                    <section className="flex flex-col sm:flex-row  justify-center items-center gap-9 top-10 relative">

                        {/*  */}
                        <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-64 sm:w-72 text-white">
                            <div className="flex flex-col justify-center items-center gap-4 py-6">
                                <div className=" flex flex-col items-center text-center border border-red-600 w-44 h-40- py-4  bg-white rounded-xl shadow-2xl">
                                    <img src="boxImg.png" alt="" height={"160"} width={"160"} />
                                </div>
                                {/* array */}
                                <p>Item Name | <a href="#"> Avarter-Balshee</a></p>
                                <p>Item ID |<a href="#">AvaV1A1zP1ee</a></p>
                                <Link className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2" href="/transferitem">Transfer Item</Link>

                                {/* array */}

                            </div>
                        </div>

                        {/* box two */}
                        <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-64 sm:w-72 text-white">
                            <div className="flex flex-col justify-center items-center gap-4 py-6">
                                <div className=" flex flex-col items-center text-center border border-red-600 w-44 py-4 bg-white rounded-xl shadow-2xl">
                                    <img src="boxImg.png" alt="" height={"160"} width={"160"} />
                                </div>
                                {/* array */}
                                <p>Item Name | <a href="#"> Avarter-Banshee</a></p>
                                <p>Item ID |<a href="#">AvaV1A1zP1ee</a></p>
                                <Link className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2" href="/transferitem">Transfer Item</Link>

                                {/* array */}

                            </div>
                        </div>
                        {/* box two end */}

                    </section>
                    {/* box row two box */}
                    <section className="flex flex-col sm:flex-row top-16 relative justify-center items-center gap-9">

                        {/*  */}
                        <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-64 sm:w-72 text-white">
                            <div className="flex flex-col justify-center items-center gap-4 py-6">
                                <div className=" flex flex-col items-center text-center border border-red-600 w-48 h-40- py-4  bg-white rounded-xl shadow-2xl">
                                    <img src="boxImg.png" alt="" height={"160"} width={"160"} />
                                </div>
                                {/* array */}
                                <p>Item Name | <a href="#"> Avarter-Banshee</a></p>
                                <p>Item ID |<a href="#">AvaV1A1zP1ee</a></p>
                                <Link className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2" href="/transferitem">Transfer Item</Link>

                                {/* array */}

                            </div>
                        </div>

                        {/* box two */}
                        <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-64 sm:w-72 text-white">
                            <div className="flex flex-col justify-center items-center gap-4 py-6">
                                <div className=" flex flex-col items-center text-center border border-red-600 w-44 py-4 bg-white rounded-xl shadow-2xl">
                                    <img src="boxImg.png" alt="" height={"160"} width={"160"} />
                                </div>
                                {/* array */}
                                <p>Item Name | <a href="#"> Avarter-Banshee</a></p>
                                <p>Item ID |<a href="#">AvaV1A1zP1ee</a></p>
                                <Link className="shadow-2xl bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-2" href="/transferitem">Transfer Item</Link>

                                {/* array */}

                            </div>
                        </div>
                        {/* box two end */}

                    </section>
                    {/* box row end */}
                    <div className="top-40 relative text-white-">j</div>

                </section>
                {/* two box ended */}

                {/*  */}
            </section>
            <div></div>
        </div>
    );
}