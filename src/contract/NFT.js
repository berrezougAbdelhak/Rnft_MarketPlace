import {signer} from "./provider"
import { ethers } from "ethers"
import nft_abi from "./NFT_abi.json"
const addressNFT="0xa214075B21e5A66Cf98bCbd77cF653D7247CA861"

const nftContract = new ethers.Contract(
    addressNFT,
    nft_abi,
    signer
  );

export {nftContract,addressNFT}; 
