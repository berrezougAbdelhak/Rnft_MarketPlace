import {provider} from "../contract/provider"
import axios from "axios";
const UseMarketPlace=async(nftContract,marketPlaceContract)=> {
        const account = await provider.send("eth_requestAccounts", []);
    
        let name = await nftContract.name();
        let symbol = await nftContract.symbol();
        let i = 0;
        let item = "test";
        let dataTemp = [];
        while (item.nftContract !== "0x0000000000000000000000000000000000000000") {
          i++;
    
          item = await marketPlaceContract.marketItems(i);
        }
        for (let j = 1; j < i; j++) {
          item = await marketPlaceContract.marketItems(j);
          const tokenId = parseInt(item.tokenId._hex);
          const idItem = parseInt(item.id._hex);
          const price = parseInt(item.price);
          const uri = await nftContract.tokenURI(tokenId);
          const owner = await nftContract.ownerOf(tokenId);
          if (owner.toLowerCase() !== account[0].toLowerCase()) {
            const imageUri = await (await axios.get(uri)).data.image;
            dataTemp.push([tokenId, imageUri, name, symbol, price, idItem]);
    
          }
        }
        return dataTemp
}

export default UseMarketPlace