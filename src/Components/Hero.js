import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import person from "../Images/person.webp";
import paint from "../Images/paint.jpg";
import EditIcon from "./EditIcon";
import PlusIcon from "./PlusIcon";
import FbIcon from "./FbIcon";
import TwtIcon from "./Twticon";
import GitIcon from "./GitIcon";
import LnIcon from "./LnIcon";

export default function Hero() {
  const [imgHeight,setImgHeight]=useState(null);
  const setImageSize = () => {
    if(window.innerWidth < 900) {
        setImgHeight(100)
      } else {
        setImgHeight(300)
      }  
    }
  useEffect(()=>{
    setImageSize()
  })
  return (
    <Stack
      direction="column"
      sx={{
        border: 2,
        borderRadius: "15px",
        borderColor: "#c8c8c8",
        pb: 2,
        bgcolor: "#fff",
        mt: 4,
      }}
    >
      <Stack>
        <img
          src={paint}
          alt="painting images"
          height={imgHeight}
          style={{
            borderRadius: "15px 15px 0px 0px",
            objectFit: "cover",
          }}
        />
      </Stack>
      <Stack sx={{display:"flex", flexDirection:{xs:"column",md:"row"}}} justifyContent="space-between" alignItems="center">
        <Stack sx={{ mt: "-15%", ml: "5%" }}>
          <img
            src={person}
            alt="personimage"
            height={imgHeight}
              width= {imgHeight}
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              objectFit: "cover",              
              border: "10px solid #fff",
            }}
          />
        </Stack>
        <Stack direction="column" justifyContent="flex-start">
          <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "30px" }} gutterBottom>
            Aakash Taneja
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "#888888" }}
						gutterBottom
          >
            Frontend Stack Web Developer
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              boxShadow: 0,
              bgcolor: "#c8c8c8",
              color: "#222222",
              p: "5px",
              fontWeight: 500,
            }}
          >
            Jaipur, Rajasthan
          </Button>
        </Stack>
        <Stack sx={{display:"flex", flexDirection:{xs:"row",md:"column"}, my:{xs:"10px",md:"0px"}}}>
          <Button
            variant="outline"
            sx={{
              boxShadow: 0,
              color: "rgba(0, 69, 199, 1)",
              py: "5px",
              px: "15px",
              borderRadius: "20px",
              mx: "20px",
              my: "5px",
              border: "2px solid #c8c8c8",
            }}
          >
            <EditIcon />{" "}
            <span style={{ marginLeft: "10px" }}>Edit Profile</span>
          </Button>
          <Button
            variant="outline"
            sx={{
              boxShadow: 0,
              color: "rgba(0, 69, 199, 1)",
              py: "5px",
              px: "15px",
              borderRadius: "20px",
              mx: "20px",
              my: "5px",
              border: "2px solid #c8c8c8",
            }}
          >
            <PlusIcon /> <span style={{ marginLeft: "10px" }}>Add section</span>
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={5} sx={{color: ""}}>
        <FbIcon />
        <TwtIcon />
        <LnIcon />
        <GitIcon />
      </Stack>
    </Stack>
  );
}
