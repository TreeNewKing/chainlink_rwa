import { ethers } from "hardhat"

async function main() {
    const fractionalizedRealEstateTokenAddress=''

    // 获取签名者
   const signers = await ethers.getSigners();
   const deployer = signers[0];
 console.log('部署者为',await deployer.getAddress())
    let englishAuction=await (await ethers.getContractFactory("EnglishAuction")).connect(deployer).deploy(fractionalizedRealEstateTokenAddress);
    englishAuction.waitForDeployment()
    console.log('englishAuction is deployed in '+await englishAuction.getAddress())
    // let rs=await randomDogNFT.createCollectible('123');
    // console.log(rs);
}
main()