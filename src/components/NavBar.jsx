"use client";

import Image from "next/image";
// import { ConnectButton } from "./WalletConnect";
import Link from "next/link";

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function NavBar() {
    return (
        <nav className="flex justify-evenly sm:justify-between items-center	 px-0 sm:px-24 py-4">
          <div>
            <Link href="/">
              <Image src="/logooo.png" alt={"img"} height={"160"} width={"160"} />
            </Link>
          </div>
          <div>
            <ConnectButton />
          </div>
        </nav>
    )
}