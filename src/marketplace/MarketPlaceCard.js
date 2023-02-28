import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function MarketPlaceCard({tokenId,imageUri,name,symbol,price, buyNft=()=>{} ,idItem}) {
  return (
    <Box
    sx={{
      p: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: 4,
      boxShadow: "0px 4px 6px 1px rgba(0,0,0,0.2)",
      my: 2,
      minHeight: "90%",
    }}
  >
    <Box
      sx={{
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        overflow: "hidden",
        maxWidth: "90%",
        mb: 1,
      }}
    >
      <Box width={"300px"} height="200px">
        <img
          alt="NFt image"
          src={imageUri}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
         <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography fontWeight={"700"} color="grey.500">{name}</Typography>
          <Typography fontWeight={"700"}>{symbol}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography color="grey.500">Token Id</Typography>
          <Typography variant="lBold" fontSize={"30px"} sx={{ mt: 1 }}>
            {tokenId}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography color="grey.500">Price</Typography>
          <Typography variant="lBold" fontSize={"30px"} sx={{ mt: 1 }}>
            {price} Wei
          </Typography>
        </Box>
      
     
      
    </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
        
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={ () => buyNft(idItem,price)}
        >
          Buy the NFT
        </Button>
      
        <Button
          variant="contained"
          sx={{ color: "white", bgcolor: "primary.main", mt: 2 }}
        >
          Order a physical art
        </Button>
      </Box>

    

  </Box>


  )
}

export default MarketPlaceCard