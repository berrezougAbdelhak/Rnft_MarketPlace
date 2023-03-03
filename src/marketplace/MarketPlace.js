import React from "react";
import { useEffect, useState } from "react";
import MarketPlaceCard from "./marketplaceCard/MarketPlaceCard";
import { Grid } from "@mui/material";
import { nftContract } from "../contract/NFT";
import { marketPlaceContract } from "../contract/MarketPlaceContract";
import UseMarketPlace from "../customHooks/UseMarketPlace";

function MarketPlace() {
  const [data, setData] = useState([[]]);
  useEffect(() => {
    getNftInfo();
  }, []);
  const buyNft = async (idItem, price) => {
    await marketPlaceContract.createMarketSale(
      "0xa214075B21e5A66Cf98bCbd77cF653D7247CA861",
      idItem,
      { value: price }
    );
  };
  const getNftInfo = async () => {
    const dataTemp = await UseMarketPlace(nftContract, marketPlaceContract);
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
