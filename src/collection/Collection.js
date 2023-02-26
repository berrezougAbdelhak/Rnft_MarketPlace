import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material';
import { ethers } from "ethers";
import abi from  "../contract/abi.json"
import axios from 'axios'
function Collection() {
    const [imageUrl,setImageUrl]=useState()
    const getAccount=async()=>{

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts= await provider.send("eth_requestAccounts", [])
        console.log(accounts)
        const nftContract = new ethers.Contract('0x18008Ed3694DdC7dDFC3d62e7878b2E7e5a8Cb33', abi, provider);
        const uri=await nftContract.tokenURI(0)
        console.log("uri :" ,uri )
        const meta = await (await axios.get(uri)).data.image
        setImageUrl(meta)
        console.log("META :" ,meta )
    
    }   
    getAccount()
  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
            {imageUrl && <img src={imageUrl} alt="nft" width={"300px"} />}
          </Box>
  )
}

export default Collection