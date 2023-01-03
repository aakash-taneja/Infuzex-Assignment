import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import sample from '../Images/apple.jpg';

export default function ImageCard() {
  return (
    <Stack sx={{my:'30px',display:"flex", flexDirection:{xs:"column",md:"row"}, alignItems:{xs:"center"}}}>
        <img src={sample} alt='sample' style={{height:'125px', width:'200px', borderRadius:'10px'}}/>
        <Box sx={{display:"flex",flexDirection:{xs:"column"},ml:'20px',mt:{xs:"10px"},alignItems:{xs:"center",md:"flex-start"}}}>
            <Typography variant="h5" sx={{fontWeight:600}}>Frontend Web Developer</Typography>
            <Typography variant="subtitle2"sx={{fontWeight:500}}>Apple.Inc</Typography>
            <Typography variant="subtitle1"sx={{color:'#c0c0c0'}}>Aug 2021 - Present - 1yr</Typography>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{ boxShadow: 0,bgcolor:'rgba(87, 255, 85, 0.5)', color:'rgba(0, 190, 14, 1)',p:'5px'}}>Present</Button>
                <Button variant="contained" sx={{ boxShadow: 0,bgcolor:'rgba(67, 128, 255, 0.5)', color:'rgba(0, 69, 199, 0.95)',p:'5px'}}>Internship</Button>
            </Stack>
        </Box>        
    </Stack>
  );
}
