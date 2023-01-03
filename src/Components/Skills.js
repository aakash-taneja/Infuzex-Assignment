import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export default function Skills() {
  return (
    <Stack sx={{
        border: 2,
        borderRadius: "15px",
        borderColor: "#c8c8c8",
        px: 3,
        py:2,
        bgcolor: "#fff",
        my:4
      }}>
        <Stack direction="row"  >
            <Typography variant="h6" sx={{fontWeight: 600}}>Skills</Typography>                        
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{m:1}}>
            <Typography variant="h6" sx={{bgcolor:'#d3d3d3', px:'15px',py:'5px',borderRadius:"20px"}}>C++</Typography>  
            <Typography variant="h6" sx={{bgcolor:'#d3d3d3', px:'15px',py:'5px',borderRadius:"20px"}}>C++</Typography>  
        </Stack>
        <Stack direction="row" justifyContent="space-between"  sx={{m:1}}>
            <Typography variant="h6" sx={{bgcolor:'#d3d3d3', px:'15px',py:'5px',borderRadius:"20px"}}>C++</Typography>  
            <Typography variant="h6" sx={{bgcolor:'#d3d3d3', px:'15px',py:'5px',borderRadius:"20px"}}>C++</Typography>  
        </Stack>        
    </Stack >
  )
}
