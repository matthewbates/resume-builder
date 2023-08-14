import { LinearProgress, Box, Typography } from "@mui/material";

export default function LinearProgressWithLabel({ name, value }) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <LinearProgress
            sx={{ height: 15 }}
            variant="determinate"
            value={value}
          />
        </Box>
        <Typography>{value}%</Typography>
      </Box>
    </Box>
  );
}
