import { LinearProgress, Box, Typography } from "@mui/material";

export default function LinearProgressWithLabel({ name, value }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", ml: 5, mr: 5 }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{ height: 15 }}
          variant="determinate"
          value={value}
        />
      </Box>
      <Box>
        <Typography variant="body1">{value}%</Typography>
      </Box>
    </Box>
  );
}
