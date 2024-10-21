# TrackChain Frontend - Ownership Tracking DApp

This is the frontend for **TrackChain**, a decentralised application (DApp) built to interact with the [TrackChain smart contract](https://sepolia.basescan.org/address/0xAA11a1Ca9CE13B9cb7B6ca00270Eeec27bA15287), which allows users to track ownership history on the Base blockchain. The frontend is developed using **Next.js** and integrates with **RainbowKit** and **Wagmi** to enable wallet connections and seamless contract interaction. You can view the live app [here](trackchain.vercel.app).

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Smart Contract Interaction](#smart-contract-interaction)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Connect Wallet**: Users can connect their Ethereum wallet using **RainbowKit**.
- **Create New Item**: Users can create a new item on the blockchain, initializing the item's ownership history.
- **Transfer Ownership**: Current owners can transfer ownership of their items to another address.
- **View Ownership History**: Users can view the entire ownership history of an item, including previous owners and the date of transfers.
- **Fetch Items by Owner**: Users can view all items currently owned by a specific wallet address.

## Prerequisites

To get started, make sure you have the following installed:

- **Node.js** (version 14.x or later)
- **NPM** or **Yarn** package manager
- **Metamask** or any other supported Ethereum wallet extension

You will also need a deployed version of the **TrackChain** smart contract on a compatible Base network.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Angelicaudo/Trackchain.git
   ```

2. Navigate to the project directory:

   ```bash
   cd trackchain
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or if you're using Yarn:

   ```bash
   yarn install
   ```

### Running the App

1. Create a `.env.local` file in the root of your project and configure the necessary environment variables (see [Environment Variables](#environment-variables)).

2. Run the development server:

   ```bash
   npm run dev
   ```

   or if you're using Yarn:

   ```bash
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Smart Contract Interaction

This frontend interacts with the **TrackChain** smart contract deployed on an Base-compatible blockchain using **Wagmi** and **RainbowKit**.

- **RainbowKit** is used for wallet connection and authentication.
- **Wagmi** provides React hooks for calling smart contract functions such as creating an item, transferring ownership, and retrieving item details.

### Key Contract Interactions

1. **Create Item**:
   - Users can create a new item with a unique `itemId` and name.
   - Calls the `createItem` function from the smart contract.

2. **Transfer Ownership**:
   - Users can transfer the ownership of an item they own.
   - Calls the `transferOwnership` function of the contract.

3. **Get Ownership History**:
   - Users can retrieve the complete ownership history of an item, showing past and current owners along with transfer dates.

4. **Get Items Owned by a Wallet**:
   - Users can query all items currently owned by a specific wallet address.

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
NEXT_PUBLIC_WALLETCONNECT_ID=your_walletconnect_project_id
```

## Contributing

If you'd like to contribute to the TrackChain frontend, please follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.