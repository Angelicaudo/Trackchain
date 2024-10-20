export const trackchainContract = {
  address: "0xAA11a1Ca9CE13B9cb7B6ca00270Eeec27bA15287",
  abi: [
    {
      "inputs":[
        {
          "internalType": "string",
          "name": "_itemId",
          "type":"string"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type":"string"
        }
      ],
      "name": "createItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type":"function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_itemId",
          "type": "string"
        }
      ],
      "name": "getCurrentOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_itemId",
          "type": "string"
        }
      ],
      "name": "getInitialOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ownerAddress",
          "type": "address"
        }
      ],
      "name": "getItemsByOwner",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "itemId",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "currentOwner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "dateTransferred",
                  "type": "uint256"
                }
              ],
              "internalType": "struct TrackChain.OwnershipRecord[]",
              "name": "ownershipHistory",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct TrackChain.Item[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_itemId",
          "type": "string"
        }
      ],
      "name": "getOwnershipHistory",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "itemId",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "currentOwner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "previousOwner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "dateTransferred",
                  "type": "uint256"
                }
              ],
              "internalType": "struct TrackChain.OwnershipRecord[]",
              "name": "ownershipHistory",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct TrackChain.Item",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "itemIds",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "items",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "itemId",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_itemId",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
};