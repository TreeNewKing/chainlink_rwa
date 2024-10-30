import { ethers } from "hardhat"

async function main() {
    // const uri_=""
    const ccipRouterAddress="0xF694E193200268f9a4868e4Aa017A0118C9a8177"
    const linkTokenAddress="0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846"
    const currentChainSelector="14767482510784806043"
    const functionsRouterAddress="0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0"
   // 获取签名者
   const signers = await ethers.getSigners();
   const deployer = signers[0];
 console.log('部署者为',await deployer.getAddress())
    let realEstateToken=await (await ethers.getContractFactory("RealEstateToken")).connect(deployer).deploy(ccipRouterAddress,linkTokenAddress,currentChainSelector,functionsRouterAddress);
    realEstateToken.waitForDeployment()
    console.log('RealEstateToken is deployed in '+await realEstateToken.getAddress())
    // let rs=await randomDogNFT.createCollectible('123');
    // console.log(rs);
}
main()