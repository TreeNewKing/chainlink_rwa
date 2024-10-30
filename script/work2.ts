import { ethers } from "hardhat"

async function main() {
    const realEstateToken=''
    const functionsRouterAddress='0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0'
   // 获取签名者
   const signers = await ethers.getSigners();
   const deployer = signers[0];
 console.log('部署者为',await deployer.getAddress())
    let issuer=await (await ethers.getContractFactory("Issuer")).connect(deployer).deploy(realEstateToken,functionsRouterAddress);
    issuer.waitForDeployment()
    console.log('issuer is deployed in '+await issuer.getAddress())
    // let rs=await randomDogNFT.createCollectible('123');
    // console.log(rs);
}
main()