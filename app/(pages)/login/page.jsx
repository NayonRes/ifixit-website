import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const style = {
  outer: {
    background: "url('/bg-sm.png')",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    backgroundSize: "container",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    width: '100%'
  },
  wrapper: {
    maxWidth: "650px",
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
  },
  form: {
    display: "grid",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    width: "100%",
  },
  label: { fontSize: 14, fontWeight: 500, mb: 1, color: "#555" },
  input: {
    "& .MuiOutlinedInput-root": {
      color: "#000",
      height: "45px",
      background: "#fff",
    },
  },
};

const page = () => {
  return (
    <Box sx={style.outer}>
      <Box sx={style.wrapper}>
        <img src="/logo.svg" alt="iFixit logo" width="60px" />
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Log in to your account
        </Typography>
        <Typography variant="body1" color="text.light" sx={{ mb: 3 }}>
          Welcome back! Please enter your details.
        </Typography>
        <Box sx={style.form}>
          <Box>
            <Typography sx={style.label}>Email</Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter your email"
              sx={style.input}
            />
          </Box>
          <Box>
            <Typography sx={style.label}>Email</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              sx={style.input}
            />
          </Box>
          <Box>
            <Button fullWidth variant="contained" sx={{ height: "45px" }}>
              Sign in
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
