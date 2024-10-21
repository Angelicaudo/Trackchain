import {
    ConnectWallet,
    ConnectWalletText,
    Wallet,
    WalletDropdown,
    WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Address, Name, Identity, Avatar } from "@coinbase/onchainkit/identity";


export function ConnectButton() {
  return (
    <div className="flex justify-end ">
      <Wallet>
        <ConnectWallet className="text-white border rounded-2xl p-2 border-red-600">
          <ConnectWalletText>Connect Wallet</ConnectWalletText>
          <Avatar className="h-6 w-6" />
          <Name className="text-white" />
        </ConnectWallet>
        
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
              <Avatar />
              <Name className="text-white" />
              <Address className="text-white" />
          </Identity>
          <WalletDropdownDisconnect className="text-white" />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}