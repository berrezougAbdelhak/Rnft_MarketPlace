import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { styles } from "./CollectionCard.styles";
import { addressMarketPlace } from "../../contract/MarketPlaceContract";
function CollectionCard({
  tokenId,
  image,
  name,
  symbol,
  approved = false,
  putForSale = () => {},
  openDialog
}) {
  return (
    <Box
      sx={styles.container}
    >
      <Box
        sx={styles.imageContainer}
      >
          <img
            alt="NFt image"
            src={image}
            width={"100%"}
            height={"200px"}
            style={{ objectFit: "contain" }}
          />
      </Box>
      <Box
        sx={styles.descriptionContainer}
      >
        <Box sx={styles.infoContainer}>
          <Typography fontWeight={"700"}>{name}</Typography>
          <Typography fontWeight={"700"}>{symbol}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography color="grey.500">Token Id</Typography>
          <Typography variant="lBold" fontSize={"30px"} sx={{ mt: 1 }}>
            {tokenId}
          </Typography>
        </Box>
      </Box>

      {approved !== addressMarketPlace ? (
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => putForSale(tokenId)}
        >
          put the nft up for sale
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ color: "white", bgcolor: "primary.main", mt: 2 }}
          onClick={openDialog}
        >
          Authorization for reproductions
        </Button>
      )}
    </Box>
  );
}

export default CollectionCard;
