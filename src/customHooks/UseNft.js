import {provider} from "../contract/provider"
import axios from "axios";
const UseNft = async (nftContract) => {
  const account = await provider.send("eth_requestAccounts", []);
  let name = await nftContract.name();
  let symbol = await nftContract.symbol();
  let totalSupply = await nftContract.totalSupply();
  totalSupply = parseInt(totalSupply._hex);
  let dataTemp = [];
  for (let i = 1; i <= totalSupply; i++) {
    const owner = await nftContract.ownerOf(i);
    if (owner.toLowerCase() === account[0].toLowerCase()) {
      const uri = await nftContract.tokenURI(i);
      const imageUri = await (await axios.get(uri)).data.image;
      const approved = await nftContract.getApproved(i);
      const tokenId = i;
      dataTemp.push([i, imageUri, name, symbol, approved, tokenId]);
    }
  }
  return dataTemp
};

export default UseNft;
