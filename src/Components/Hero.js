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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import fb from "../Images/fb.svg";
import tw from "../Images/tw.svg";
import ln from "../Images/ln.svg";
import db from "../Images/db.svg";
import gb from "../Images/gb.svg";

export default function Hero() {
  const [imgHeight, setImgHeight] = useState(null);
  const [iconHeight, setIconHeight] = useState(null);
  const setImageSize = () => {
    if (window.innerWidth < 900) {
      setImgHeight(100);
      setIconHeight(25);
    } else {
      setImgHeight(300);
      setIconHeight(50);
    }
  };
  useEffect(() => {
    setImageSize();
  });
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
      <Stack
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack sx={{ mt: "-15%", ml: "5%" }}>
          <img
            src={person}
            alt="personimage"
            height={imgHeight}
            width={imgHeight}
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              objectFit: "cover",
              border: "10px solid #fff",
            }}
          />
        </Stack>
        <Stack sx={{flex:1,ml:"20px", mt:"20px", flexDirection:"column"}}>
              <Stack justifyContent="space-between" sx={{display:"flex", flexDirection:{xs:"column",md:"row"}}} >
                <Stack direction="column" sx={{ alignItems:{xs:"center",md:"flex-start"}}}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, fontSize: "30px" }}
                    gutterBottom
                  >
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
                    disableRipple
                    sx={{
                      borderRadius: "20px",
                      boxShadow: 0,
                      bgcolor: "#e8e8e8",
                      color: "#222222",
                      p: "5px",
                      fontWeight: 500,
                      "&:hover": { backgroundColor: "#e8e8e8" },
                    }}
                  >
                    Jaipur, Rajasthan
                  </Button>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    my: { xs: "10px", md: "0px" },
                  }}
                >
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
                      border: "2px solid #e8e8e8",
                    }}
                  >
                    <EditIcon />
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
                      border: "2px solid #e8e8e8",
                    }}
                  >
                    <PlusIcon />
                    <span style={{ marginLeft: "10px" }}>Add section</span>
                  </Button>
                </Stack>
              </Stack>
              <Stack
                direction="row"                
                spacing={3}
                sx={{ color: "" , mt:"20px", justifyContent:{xs:"center",md:"start"}}}
              >
                <img src={fb} height={iconHeight}/>
                <img src={tw} height={iconHeight}/>
                <img src={ln} height={iconHeight}/>
                <img src={db} height={iconHeight}/>
                <img src={gb} height={iconHeight}/>
                
              </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
