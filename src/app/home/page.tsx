"use client"; // This tells Next.js this is a Client Component
import Image from "next/image";


// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";


// const Navbar: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="bg-heroImg bg-cover bg-center h-screen bg-repeat">
//             <div className="container mx-auto flex justify-between items-center px-0 sm:px-24 py-4">
//                 <div className="text-white text-lg font-bold">
//                     <Link href="/"> <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} /> </Link>
//                 </div>
//                 <div className="hidden md:flex space-x-4">
//                     <Link href="/" className="flex justify-around items-center text-white border rounded-2xl w-20 sm:w-28 py-1  border-red-600">
//                         <Image src="/base.png" alt={"img"} height={"20"} width={"20"} />
//                         <p>BASE</p>
//                     </Link>
//                     {/* array */}
//                     <Link href="#"  className="flex justify-around items-center text-white border rounded-2xl w-20 sm:w-36 py-1 px-4- border-red-600">
//                         pb1...f58xcmxd
//                     </Link>

//                     {/* array */}

//                 </div>
//                 <div className="md:hidden">
//                     <button
//                         onClick={toggleMenu}
//                         id="menu"
//                         className="flex justify-around items-center text-white border rounded-2xl w-20 sm:w-36 py-1 px-4 border-red-600"
//                     >
//                         {isOpen ? "pb1.." : "pb1.."}
//                     </button>
//                 </div>
//             </div>

//             {isOpen && (
//                 <div className="md:hidden flex justify-end ">
//                     <div className="flex flex-col space-y-4 mt-2 border border-red-600 shadow-2xl rounded-xl px-2 py-4 ">
//                         <Link href="/profile" className="shadow-2xl text-white border rounded-2xl text-center py-1 px-4 border-red-600">
//                             My profile
//                         </Link>
//                         <Link href="#" className=" shadow-2xl text-white border rounded-2xl text-center py-1 px-4 border-red-600">
//                             Discount Wallet
//                         </Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

import { useState } from 'react';
import Link from 'next/link';

const ToggleButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <nav>
            <div className="flex justify-between items-cente-r px-0 sm:px-24 py-4">
                <div className="text-white text-lg font-bold">
                    <Link href="#"> <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} /> </Link>
                </div>
                {/*  */}
                <div className="flex gap-4">

                    
                    <div>
                        <Link href="#" className="flex justify-around items-center text-white border rounded-2xl w-20 sm:w-28 py-1  border-red-600">
                            <Image src="/base.png" alt={"img"} height={"20"} width={"20"} />
                            <p>BASE</p>
                        </Link>

                    </div>
                    <div>
                        <Link
                            href="#"
                            className="flex justify-around items-center text-white border rounded-2xl py-1 px-4 border-red-600"
                            onClick={handleClick}
                        >
                            pb1...f58xcmxd
                        </Link>

                        {isVisible && (
                            <div className=" overflow-none- ">
                                <div className="flex flex-col space-y-4 mt-2 border border-red-600 shadow-2xl rounded-xl px-2 py-4">
                                    <Link
                                        href="/profile"
                                        className="shadow-2xl text-white border rounded-2xl text-center py-1 px-4 border-red-600"
                                    >
                                        My profile
                                    </Link>
                                    <Link
                                        href="#"
                                        className="shadow-2xl text-white border rounded-2xl text-center py-1 px-4 border-red-600"
                                    >
                                        Discount Wallet
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                {/*  */}
            </div>

        </nav>
    );
};

export default ToggleButton;



