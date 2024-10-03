import { ethers } from "hardhat";

async function main() {
    const erc20TokenAddress = "0x7b44D1E59116ADb307AFED584B7947A778865c9B";

    const erc20Token = await ethers.getContractAt("IERC20", erc20TokenAddress);

    
}
