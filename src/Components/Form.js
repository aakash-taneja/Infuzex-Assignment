import {  Typography,AppBar,TextField,Button, Stack, Box} from '@mui/material';
import * as React from "react";
import EditIcon from './EditIcon';
export default function Form() {
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
      <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" sx={{fontWeight: 600, mb:"20px", fontSize:"18px"}}>Additional Information</Typography>  
          <Box sx={{border:"1px solid", borderRadius:"10px", py: '5px', px:'8px', height:'29px'}}><EditIcon/></Box>                      
      </Stack>
      <Stack direction="row" justifyContent='space-between'>
        <form>
          <TextField sx={{width:"100%", my:"5px"}} type="text" label="Email" variant="outlined" />        
          <TextField sx={{width:"100%", my:"5px"}} type="text" label="Phone" variant="outlined" />        
          <TextField sx={{width:"100%", my:"5px"}} type="text" label="Gender" variant="outlined" />        
          <TextField sx={{width:"100%", my:"5px"}} type="text" label="Address" variant="outlined" />                
        </form>
      </Stack>
  </Stack >
      
  );
}
