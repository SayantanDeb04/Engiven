const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // Deploy token
  const Token = await hre.ethers.getContractFactory("ImpactToken");
  const token = await Token.deploy("ImpactToken", "IMPT");
  await token.deployed();
  console.log("ImpactToken:", token.address);

  // Deploy charity
  const Charity = await hre.ethers.getContractFactory("Charity");
  const ngoAddress = deployer.address; // change to real NGO address when deploying for real
  const target = hre.ethers.utils.parseEther("10"); // 10 ETH target (example)
  const deadline = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30; // 30 days from now
  const approvers = [deployer.address]; // example approvers
  const approvalsRequired = 1;
  const tokensPerWei = 1; // tiny for testing; tune for real deployment

  const charity = await Charity.deploy(ngoAddress, target, deadline, approvers, approvalsRequired, token.address, tokensPerWei);
  await charity.deployed();
  console.log("Charity:", charity.address);

  // Transfer token ownership to charity so the charity contract can mint rewards
  const tx = await token.transferOwnership(charity.address);
  await tx.wait();
  console.log("Token ownership transferred to charity");

  // Add a sample milestone
  const tx2 = await charity.addMilestone("Initial setup", 20);
  await tx2.wait();
  console.log("Added milestone (20%)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
