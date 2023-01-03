import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import EditIcon from './EditIcon'

export default function Resume() {
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
        <Stack direction="row" justifyContent="space-between" >
            <Typography variant="h6" sx={{fontWeight: 600}}>Language</Typography>       
            <Box sx={{border:"1px solid", borderRadius:"10px", py: '5px', px:'8px', mb:"20px"}}><EditIcon/></Box>                 
        </Stack>
        <Stack direction="row" justifyContent='space-between' sx={{width:"80%"}}>
            <Stack direction="row" justifyContent='space-between' alignItems="center">
                <Box sx={{height:"50px", width:"50px",borderRadius:"50px", bgcolor:"#000", mr:"15px"}}></Box>
                <Stack>
                <Typography variant="h6" sx={{fontSize:"16px", fontWeight:600}}>Turkish</Typography>
                <Typography variant="h6" sx={{fontSize:"14px", fontWeight:500}}>Native</Typography>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent='space-between' alignItems="center">
                <Box sx={{height:"50px", width:"50px",borderRadius:"50px", bgcolor:"#000", mr:"15px"}}></Box>
                <Stack>
                <Typography variant="h6" sx={{fontSize:"16px", fontWeight:600}}>Turkish</Typography>
                <Typography variant="h6" sx={{fontSize:"14px", fontWeight:500}}>Native</Typography>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent='space-between' alignItems="center">
                <Box sx={{height:"50px", width:"50px",borderRadius:"50px", bgcolor:"#000", mr:"15px"}}></Box>
                <Stack>
                <Typography variant="h6" sx={{fontSize:"16px", fontWeight:600}}>Turkish</Typography>
                <Typography variant="h6" sx={{fontSize:"14px", fontWeight:500}}>Native</Typography>
                </Stack>
            </Stack>
        </Stack>
    </Stack >
  )
}
