import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import person from "../Images/person.webp";
import paint from "../Images/paint.jpg";
import EditIcon from "./EditIcon";
import PlusIcon from "./PlusIcon";
import FbIcon from "./FbIcon";
import TwtIcon from "./Twticon";
import GitIcon from "./GitIcon";
import LnIcon from "./LnIcon";

export default function Hero() {
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
          style={{
            borderRadius: "15px 15px 0px 0px",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack sx={{ mt: "-15%", ml: "5%" }}>
          <img
            src={person}
            alt="personimage"
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              objectFit: "cover",
              height: " 300px",
              width: "300px",
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
        <Stack>
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
