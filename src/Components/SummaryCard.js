import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import EditIcon from "./EditIcon";
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export default function SummaryCard() {
  return (
    <Stack
      direction="column"
      sx={{
        border: 2,
        borderRadius: "15px",
        borderColor: "#c8c8c8",
        padding: 2,
        bgcolor: "#fff",
        mt: 4,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Summary
        </Typography>
        <Box
          sx={{
            border: "1px solid",
            borderRadius: "10px",
            py: "5px",
            px: "8px",
          }}
        >
          <EditIcon />
        </Box>
      </Stack>
      <Typography variant="h6" mt={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam magni sit
        quos odio molestiae. Vitae hic, doloribus enim aspernatur tempora alias
        aliquid est incidunt cumque temporibus tempore iusto saepe veritatis
        illum laboriosam dolor, error ducimus iste sed dolores nisi fugiat?
        Consequatur rem ipsum, odit ullam doloribus dicta, soluta praesentium
        labore aliquid eligendi, earum quaerat.
      </Typography>
      <Stack direction="row" justifyContent="flex-end">
        <Typography variant="h6" sx={{ borderBottom: "1px solid blue" }}>
          see more
        </Typography>
      </Stack>
    </Stack>
  );
}
