import { Stack } from "@mui/system";
import React from "react";
import AboutCard from "./AboutCard";
import Form from "./Form";
import Hero from "./Hero";
import Resume from "./Resume";
import Skills from "./Skills";
import SummaryCard from "./SummaryCard";
import WorkingStatus from "./WorkingStatus";
import Applications from "./Applications";
import Language from "./Language";

export default function Body() {
  return (
    <Stack direction="row" sx ={{bgcolor:'#f3f3f3'}} justifyContent="space-evenly">
      <Stack direction="column " sx={{width:"60%"}}>
        <Hero/>
        <SummaryCard />
        <AboutCard />
        <AboutCard />
        <AboutCard />
        <Skills />
        <Resume/>
        <Language/>
      </Stack>
      <Stack direction="column" sx={{width:"20%"}}> 
        <Applications/>
        <WorkingStatus/>
        <Form/>
      </Stack>
    </Stack>

    // <h1>helo</h1>
  );
}
