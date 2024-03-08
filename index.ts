import { generatePrivateKey, privateKeyToAddress } from "viem/accounts";

function createWallet() {
  const privateKey = generatePrivateKey();
  const publicKey = privateKeyToAddress(privateKey);
  return `${privateKey} - ${publicKey}`;
}

let fileData = "";
for (let i = 0; i < 100; i++) {
  fileData += createWallet() + "\n";
}

await Bun.write("wallets.txt", fileData);

console.log("Wallets created and saved to wallets.txt");
