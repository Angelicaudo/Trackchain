import Image from "next/image";
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
                <section className="flex flex-col justify-center items-center gap-8 top-10 relative">

                    <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-80 sm:w-96 text-white">
                        <div className="flex flex-col justify-center items-center gap-4 py-6">
                            <div className=" flex flex-col items-center text-center border border-red-600 w-60 bg-white h-60- rounded-xl shadow-2xl">
                                <img src="boxImg.png" alt="" height={"200"} width={"200"} />
                            </div>
                            {/* array */}
                            <p>Item Name | <a href="#"> Avarter-Banshee</a></p>
                            <p>Item ID |<a href="#">AvaV1A1zP1ee</a></p>
                            <p> Current Holder | <a href="#">1A1zP1eQ</a>...</p>
                            <p> Listed by | <a href="#">1A1zP1eQ</a>...</p>

                            {/* array */}

                        </div>
                        <div className="flex flex-row justify-center p-4 gap-6">
                            <button className="bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-1 text-white">TRACK ITEM</button>
                            <button className="shadow-2xl flex gap-3 items-center border-2 text-white border-red-600 rounded-2xl  px-8 py-2 ">BACK <a className="text-red-600 text-2xl" href=""><TbArrowBackUp /></a> </button>
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
                                        <a className=" font-normal" href="#">Base name</a></th>
                                    <th className="w-3/12 px-4 py-2 text-left border-b">Transfer <br /> <a  className=" font-normal" href="#">date/time</a></th>
                                    <th className="w-3/12 px-4 py-2 text-left border-b">Address <br /><a  className=" font-normal" href="#">From/to</a></th>
                                    <th className="w-3/12 px-4 py-2 text-left  border-b">Status</th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="  px-4 py-2 "><a href="#">Avarter-Banshee</a></td>
                                    <td className=" px-4 py-2"><a href="#">02-24/11:30pm</a></td>
                                    <td className=" px-4 py-2"><a href="#">arbiter34pb1..
                                        1A1zP1eP5Q3...</a></td>
                                    <td className=" px-4 py-2 ">Successful</td>
                                    


                                </tr>

                            </tbody>


                        </table>

                        {/* table test */}

                    </div>
                    <div></div>

                </section>


                {/* <section>

                    <div className="overflow-x-auto flex w-6/12 top-28 relative border border-red-600 rounded-2xl">
                        <h1 className="text-white font-bold text-2xl">Ownership History</h1>
                        <table className="w-9-/12- table-fixed-  text-white" >
                            <thead className="bg-black"> 
                            djthbsnao thieje
                            
                                <tr>
                                    <th className="w-3/12 px-4 py-2 text-left">Holder
                                        Base name</th>
                                    <th className="w-3/12 px-4 py-2 text-left">Transfer date/time</th>
                                    <th className="w-3/12 px-4 py-2 text-left">Address From/to</th>
                                    <th className="w-3/12 px-4 py-2 text-left">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" px-4 py-2 "><a href="#">Avarter-Banshee</a></td>
                                    <td className=" px-4 py-2 "><a href="#">Avarter-Banshee</a></td>
                                    <td className=" px-4 py-2"><a href="#">02-24/11:30pm</a></td>
                                    <td className=" px-4 py-2"><a href="#">arbiter34pb1..
                                        1A1zP1eP5Q3...</a></td>
                                    <td className=" px-4 py-2">Successful</td>


                                </tr>
                        
                            </tbody>
                        </table>
                    </div>

                </section> */}

                {/*  */}
            </section>

        </div>
    );
}