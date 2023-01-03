import {  Typography,AppBar,TextField,Button, Stack, MenuItem, InputLabel, FormControl} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from "react";
export default function WorkingStatus() {
    const [age, setAge] = React.useState('ten');
    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value as string);
    //   };
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
          <Typography variant="h6" sx={{fontWeight: 600, mb:"20px", fontSize:"18px"}}>Working Status</Typography>                        
      </Stack>
      <Stack direction="row" justifyContent='space-between'>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          placeholder='sd'
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>                  
        </FormControl >
      </Stack>
  </Stack >
      
  );
}
