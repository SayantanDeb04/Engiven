// src/blockchain/integration.ts
import CharityABI from "./Charity.full.json";
import TokenABI from "./ImpactToken.full.json";
import { ethers } from "ethers";

export async function connectWallet() {
  if (!(window as any).ethereum) throw new Error("No wallet provider found");
  const provider = new ethers.BrowserProvider((window as any).ethereum);
  await (window as any).ethereum.request({ method: "eth_requestAccounts" });
  const signer = await provider.getSigner();
  return { provider, signer };
}

export function getCharityContract(address: string, signerOrProvider: any) {
  return new ethers.Contract(address, (CharityABI as any).abi ?? CharityABI, signerOrProvider);
}

export function getTokenContract(address: string, signerOrProvider: any) {
  return new ethers.Contract(address, (TokenABI as any).abi ?? TokenABI, signerOrProvider);
}

export async function donateToCharity(charityAddress: string, signer: any, amountEth: string) {
  const contract = getCharityContract(charityAddress, signer);
  const tx = await contract.donate({ value: ethers.parseEther(amountEth) });
  await tx.wait();
  return tx;
}
