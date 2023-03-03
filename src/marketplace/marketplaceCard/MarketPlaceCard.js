import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { styles } from './MarketPlaceCard.styles'

function MarketPlaceCard({tokenId,imageUri,name,symbol,price, buyNft=()=>{} ,idItem}) {
  return (
    <Box
    sx={styles.container}
  >
    <Box
      sx={styles.imageContainer}
    >
        <img
          alt="NFt image"
          src={imageUri}
          width={"100%"}
          height={"200px"}
          style={{ objectFit: "contain" }}
        />
    </Box>
    <Box
      sx={styles.descriptionContainer}
    >
         <Box sx={styles.infoContainer}>
          <Typography fontWeight={"700"} color="grey.500">{name}</Typography>
          <Typography fontWeight={"700"}>{symbol}</Typography>
        </Box>
        <Box sx={styles.infoContainer}>
          <Typography color="grey.500">Token Id</Typography>
          <Typography variant="lBold" fontSize={"30px"} sx={{ mt: 1 }}>
            {tokenId}
          </Typography>
        </Box>
        <Box sx={styles.infoContainer}>
          <Typography color="grey.500">Price</Typography>
          <Typography variant="lBold" fontSize={"30px"} sx={{ mt: 1 }}>
            {price} Wei
          </Typography>
        </Box>
      
     
      
    </Box>
      <Box sx={{ ...styles.infoContainer, alignItems:"center" }}>
        
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