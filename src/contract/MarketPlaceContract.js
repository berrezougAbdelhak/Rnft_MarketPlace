import {provider,signer} from "./provider"
import { ethers } from "ethers"
import Market_abi from "./Market_abi.json" 
const addressMarketPlace="0x7EB8ebB70ec973E1bBB6cbA76EB9D219880BB59b"

const marketPlaceContract = new ethers.Contract(
    addressMarketPlace,
    Market_abi,
    signer
  );

export {marketPlaceContract,addressMarketPlace}; 
