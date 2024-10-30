import { ethers } from "hardhat"

async function main() {
    const realEstateTokenAddress='0x9cF04164D51777234a6f97428D1BFc1D40cD6837'
    const usdc='0x5425890298aed601595a70AB815c96711a31Bc65'
    const usdcUsdAggregatorAddress='0x97FE42a7E96640D932bbc0e1580c73E705A8EB73'
    const usdcUsdFeedHeartbeat='86400'
    // 获取签名者
   const signers = await ethers.getSigners();
   const deployer = signers[0];
 console.log('部署者为',await deployer.getAddress())
    let rwaLending=await (await ethers.getContractFactory("RwaLending")).connect(deployer).deploy(realEstateTokenAddress,usdc,usdcUsdAggregatorAddress,usdcUsdFeedHeartbeat);
    rwaLending.waitForDeployment()
    console.log('RwaLending is deployed in '+await rwaLending.getAddress())
    // let rs=await randomDogNFT.createCollectible('123');
    // console.log(rs);
}
main()