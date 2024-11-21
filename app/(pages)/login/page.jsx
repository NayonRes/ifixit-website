import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const style = {
  outer: {
    background: "url('/bg-sm.png')",

    height: "90vh",
    backgroundSize: "container",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    width: "100%",
    paddingTop: { sm: "100px", md: "150px" },
  },
  wrapper: {
    maxWidth: "400px",
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
  remember: {
    display: "flex",
    gap: 1,

    alignItems: "center",
    fontSize: 14,
  },
  social_button: {
    height: "45px",
    border: "1px solid #ddd",
    color: "#333",
  },
  social_button2: {
    height: "45px",
    border: "1px solid #000",
    color: "#fff",
    background: "#000",
  },
  social_button_inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
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
        <Typography variant="body1" color="text.light" sx={{ mb: 3, textAlign: 'center' }}>
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
          <Box sx={style.remember}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember for 30 days"
              sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
            />
            <Link href="#" sx={{ textDecoration: "none", fontWeight: 500 }}>
              Forgot Password
            </Link>
          </Box>
          <Box>
            <Button fullWidth variant="contained" sx={{ height: "45px" }}>
              Sign in
            </Button>
          </Box>
          <Box>
            <Button fullWidth variant="outlined" sx={style.social_button}>
              <Box sx={style.social_button_inner}>
                <img src="/icons/google.png" alt="" /> Sign in with Google
              </Box>
            </Button>
          </Box>
          <Box>
            <Button fullWidth variant="outlined" sx={style.social_button2}>
              <Box sx={style.social_button_inner}>
                <img src="/icons/apple.png" alt="" /> Sign in with Apple
              </Box>
            </Button>
          </Box>
          <Box
            sx={{ fontSize: 14, textAlign: "center", mt: 2 }}
            color="text.light"
          >
            Don’t have an account?
            <Link
              href="#"
              sx={{ textDecoration: "none", fontWeight: 500, ml: 1 }}
            >
              Sign up
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
