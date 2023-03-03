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
import CollectionCard from "./collectionCard";
import { nftContract,addressNFT } from "../contract/NFT";
import { marketPlaceContract,addressMarketPlace } from "../contract/MarketPlaceContract";
import UseNft from "../customHooks/UseNft";
function Collection() {
  const [data, setData] = useState([[]]);
  const [openDialog, setOpenDialog] = useState(false);
  const putForSale = async (tokenId) => {
    await nftContract.approve(
      addressMarketPlace,
      tokenId
    );
    await marketPlaceContract.createMarketItem(
      addressNFT,
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
    const dataTemp= await UseNft(nftContract)
  
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
