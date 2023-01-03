import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

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
        <Stack direction="row"  >
            <Typography variant="h6" sx={{fontWeight: 600}}>Language</Typography>                        
        </Stack>
        <Stack direction="row" justifyContent='space-between'>
            <Stack>
                <Typography variant="h6">Turkish</Typography>
                <Typography variant="h6">Native</Typography>
            </Stack>
            <Stack>
                <Typography variant="h6">English</Typography>
                <Typography variant="h6">Native</Typography>
            </Stack>
            <Stack>
                <Typography variant="h6">English</Typography>
                <Typography variant="h6">Native</Typography>
            </Stack>
        </Stack>
    </Stack >
  )
}
