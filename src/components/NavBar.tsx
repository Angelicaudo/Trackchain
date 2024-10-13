"use client";

import Image from "next/image";
import { ConnectButton } from "./WalletConnect";


export default function NavBar() {
    return (
        <nav className="flex justify-evenly sm:justify-between items-center	 px-0 sm:px-24 py-4">
          <div>
            <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} />
          </div>
          <div>
            <ConnectButton />
          </div>
        </nav>
    )
}