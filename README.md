# ComplaintLedger — Backend API

## 📌 Overview

This is the backend service for the ComplaintLedger DApp. It acts as a bridge between the React frontend and the Ethereum smart contract using Ethers.js.

The API handles complaint submission, retrieval, and integrates with IPFS (via Pinata) for storing file attachments off-chain.

---

## 🚀 Features

* 🔗 Interacts with Ethereum smart contract (Sepolia testnet)
* 📝 Submit complaints on-chain
* 📊 Fetch complaint details and list
* 🔐 Wallet-based authentication (signature verification)
* 📎 File uploads using IPFS (Pinata)

---

## 🛠️ Tech Stack

* **Node.js + Express** — REST API server
* **Ethers.js** — Smart contract interaction
* **Multer** — File upload handling
* **Pinata (IPFS)** — Decentralized file storage
* **dotenv** — Environment variable management

---

## 📂 Project Structure


complaint-backend/
├── index.js                   # Express entry point
├── .env                       # Environment variables (DO NOT COMMIT)
├── routes/
│   ├── submit.js              # POST /submit
│   ├── status.js              # GET /status/:id
│   └── list.js                # GET /list
├── middleware/
│   └── auth.js                # Wallet signature verification
├── services/
│   ├── contract.js            # Ethers.js contract connection
│   └── ipfs.js                # Pinata IPFS upload
├── abi/
│   └── ComplaintRegistry.json # Contract ABI
```

---

## 🔌 API Endpoints

| Method | Route         | Description                      |
| ------ | ------------- | -------------------------------- |
| POST   | `/submit`     | Submit a complaint to blockchain |
| GET    | `/status/:id` | Get complaint by ID              |
| GET    | `/list`       | Get all complaints               |

---

## ⚙️ Setup & Installation

### 1. Install dependencies
npm install
```

### 2. Create `.env` file


PRIVATE_KEY=0xyour_wallet_private_key
CONTRACT_ADDRESS=0xdeployed_contract_address
RPC_URL=https://sepolia.infura.io/v3/your_infura_key
PINATA_API_KEY=your_pinata_key
PINATA_SECRET=your_pinata_secret
PORT=5000
```

⚠️ Never commit your `.env` file

---

### 3. Run the server

npm run dev
```

---

## ⚠️ Important Notes

* Backend wallet must have **Sepolia ETH** for gas fees
* You can get test ETH from: https://sepoliafaucet.com
* Make sure contract is deployed and address is correct

---

## 📌 Project Status

🚧 Active Development

---

## 🤝 Contribution

This backend was developed as part of the ComplaintLedger blockchain project.

---

## 📄 License

For educational purposes only.
