import React from "react";
import market_nft from "../contract/Market_abi.json";
import nft_abi from "../contract/NFT_abi.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import MarketPlaceCard from "./MarketPlaceCard";
import { Grid } from "@mui/material";
import axios from "axios";

function MarketPlace() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const marketContract = new ethers.Contract(
    "0x7EB8ebB70ec973E1bBB6cbA76EB9D219880BB59b",
    market_nft,
    signer
  );
  const nftContract = new ethers.Contract(
    "0xa214075B21e5A66Cf98bCbd77cF653D7247CA861",
    nft_abi,
    signer
  );
  const [data, setData] = useState([[]]);
  useEffect(() => {
    getNftInfo();
  }, []);
  const buyNft = async (idItem, price) => {
    await marketContract.createMarketSale(
      "0xa214075B21e5A66Cf98bCbd77cF653D7247CA861",
      idItem,
      { value: price }
    );
  };
  const getNftInfo = async () => {
    const account = await provider.send("eth_requestAccounts", []);

    let name = await nftContract.name();
    let symbol = await nftContract.symbol();
    const uri = await nftContract.owner();
    let i = 0;
    let item = "test";
    let dataTemp = [];
    while (item.nftContract !== "0x0000000000000000000000000000000000000000") {
      i++;

      item = await marketContract.marketItems(i);
    }
    for (let j = 1; j < i; j++) {
      item = await marketContract.marketItems(j);
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
    // console.log("Data temp",dataTemp)
    // console.log("token Id",parseInt(dataTemp[0].tokenId._hex))

    setData(dataTemp);
  };
  return (
    <Grid container spacing={2}>
      {data.map((value, index) => (
        <Grid key={index} item xs={4} md={3}>
          <MarketPlaceCard
            tokenId={value[0]}
            imageUri={value[1]}
            name={value[2]}
            symbol={value[3]}
            price={value[4]}
            idItem={value[5]}

            buyNft={buyNft}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default MarketPlace;
