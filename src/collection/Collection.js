import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ethers } from "ethers";
import nft_abi from "../contract/NFT_abi.json";
import marketplace_abi from "../contract/Market_abi.json";
import axios from "axios";
import CollectionCard from "./CollectionCard";
function Collection() {
  const [imageUrl, setImageUrl] = useState();
  const [data, setData] = useState([[]]);
  const [accounts, setAccounts] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const nftContract = new ethers.Contract(
    "0xa214075B21e5A66Cf98bCbd77cF653D7247CA861",
    nft_abi,
    signer
  );
  const marketPlaceContract = new ethers.Contract(
    "0x7EB8ebB70ec973E1bBB6cbA76EB9D219880BB59b",
    marketplace_abi,
    signer
  );
  const putForSale = async (tokenId) => {
    await nftContract.approve(
      "0x7EB8ebB70ec973E1bBB6cbA76EB9D219880BB59b",
      tokenId
    );
    await marketPlaceContract.createMarketItem(
      "0xa214075B21e5A66Cf98bCbd77cF653D7247CA861",
      tokenId,
      100,
      { value: 10 }
    );
  };
  const handleOpenDialog = () => {
    setOpenDialog((prevStat) => !prevStat);
  };

  useEffect(() => {
    getNftInfo();
  }, []);

  const getNftInfo = async () => {
    const account = await provider.send("eth_requestAccounts", []);
    setAccounts(account);
    let name = await nftContract.name();
    let symbol = await nftContract.symbol();
    let totalSupply = await nftContract.totalSupply();
    totalSupply = parseInt(totalSupply._hex);
    const approved = await nftContract.getApproved(1);
    let dataTemp = [];
    for (let i = 1; i <= totalSupply; i++) {
      const owner = await nftContract.ownerOf(i);
      if (owner.toLowerCase() === account[0].toLowerCase()) {
        console.log("owner==account");
        const uri = await nftContract.tokenURI(i);
        const imageUri = await (await axios.get(uri)).data.image;
        console.log("Image uri", imageUri);
        const approved = await nftContract.getApproved(i);
        const tokenId = i;
        dataTemp.push([i, imageUri, name, symbol, approved, tokenId]);
      }
    }

    setData(dataTemp);
  };
  const [tokenReproduction, setTokenReproduction] = useState("");
  const handleTokenId = (event) => {
    setTokenReproduction(event.target.value);
    console.log(event.target.value);
  };
  const [support, setSupport] = useState("");
  const handleSupport = (event) => {
    setSupport(event.target.value);
    console.log(event.target.value);
  };
  const [dimension, setDimension] = useState("");
  const handleDimension = (event) => {
    setDimension(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((value, index) => (
          <Grid key={index} item xs={4} md={3}>
            <CollectionCard
              tokenId={value[0]}
              image={value[1]}
              name={value[2]}
              symbol={value[3]}
              approved={value[4]}
              putForSale={putForSale}
              openDialog={handleOpenDialog}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleOpenDialog} fullWidth={true}>
        <DialogTitle>Authorization for rNFT to do physical Art </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              justifyContent: "space-around",
              mt: 2,
            }}
          >
            <FormControl sx={{ minWidth: "30%" }}>
              <InputLabel id="demo-simple-select-label">
                Choose your Token ID
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Choose your Token ID"
                onChange={handleTokenId}
                value={tokenReproduction}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {data.map((value, index) => (
                  <MenuItem value={value[5]}>{value[5]}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "30%" }}>
              <InputLabel id="demo-simple-select-label">
                Choose your Support{" "}
              </InputLabel>
              <Select
                value={support}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Choose your Support"
                onChange={handleSupport}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="canvas">Canvas</MenuItem>
                <MenuItem value="toile">Toile</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "30%" }}>
              <InputLabel id="demo-simple-select-label">
                Choose your dimension{" "}
              </InputLabel>
              <Select
                value={dimension}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Choose your dimension"
                onChange={handleDimension}
              >
                 <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="50*50">50*50</MenuItem>
                <MenuItem value="60*60">60*60</MenuItem>
                <MenuItem value="70*70">70*70</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button variant="contained">Sign and deploy</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Collection;
