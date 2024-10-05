"use client";
import React, { useState } from "react";
import Image from "next/image";
// import styles from "./page.module.css";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const ContactForm = () => {
  const theme = useTheme();
  const customeTextFeild = {
    "& label.Mui-focused": {
      color: "#222",
      fontWeight: 700,
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-input": {
      padding: "20px 36px 20px 36px",
    },

    "& .MuiOutlinedInput-root": {
      background: "#e3e3e3",
      // paddingLeft: "24px",

      "& fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },
      "&:hover fieldset": {
        borderColor: "#b4b4b4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#b4b4b4",
      },
    },
  };
  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <Typography variant="h3" color="text.main" sx={{ mb: 2 }}>
          Your Project...My passion
        </Typography>
        <Typography
          variant="base"
          component="p"
          color="text.light"
          sx={{ mb: 2.5, maxWidth: "400px" }}
        >
          Share your ambitions with us and let us make them a reality! Complete
          the form, unlock our team’s expertise
        </Typography>
        <Typography
          variant="base"
          component="p"
          color="text.light"
          sx={{ maxWidth: "400px" }}
        >
          <a className="no_link_design" href="mailto:ifixit@gmail.com">
            <span style={{ fontWeight: 700 }}>E-mail:</span>&nbsp;
            ifixit@gmail.com
          </a>
        </Typography>
        <Typography
          variant="base"
          component="p"
          color="text.light"
          sx={{ mb: 2.5, maxWidth: "400px" }}
        >
          <a className="no_link_design" href="tel:+8801810023501">
            {" "}
            <span style={{ fontWeight: 700 }}>Phone: </span>&nbsp;+88 018 10 02
            35 01
          </a>
        </Typography>
        <Box>
          <a className="no_link_design" href="#">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="zoom_effect"
            >
              <path
                d="M30 15.0376C30 6.73684 23.28 0 15 0C6.72 0 0 6.73684 0 15.0376C0 22.3158 5.16 28.3759 12 29.7744V19.5489H9V15.0376H12V11.2782C12 8.37594 14.355 6.01504 17.25 6.01504H21V10.5263H18C17.175 10.5263 16.5 11.203 16.5 12.0301V15.0376H21V19.5489H16.5V30C24.075 29.2481 30 22.8421 30 15.0376Z"
                fill="#6D6D6D"
              />
            </svg>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a className="no_link_design" href="#">
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="zoom_effect"
            >
              <mask
                id="mask0_47_191"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="29"
                height="30"
              >
                <path
                  d="M0 0.804688H28.3908V29.1955H0V0.804688Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_47_191)">
                <path
                  d="M16.8701 1.01396L16.0184 0.894421C13.4586 0.524829 10.8465 0.890469 8.48666 1.94871C6.12677 3.00696 4.11631 4.71421 2.68966 6.87143C1.17173 8.93347 0.266851 11.3822 0.0791644 13.9358C-0.108523 16.4894 0.428605 19.0441 1.62874 21.3059C1.75156 21.5326 1.82803 21.7815 1.85368 22.038C1.87934 22.2946 1.85366 22.5536 1.77816 22.8002C1.16552 24.9071 0.597701 27.0289 0 29.2553L0.747126 29.0312C2.76437 28.4933 4.78161 27.9553 6.79885 27.4622C7.22463 27.3737 7.66718 27.4154 8.06896 27.5818C9.8788 28.4651 11.8566 28.951 13.8697 29.007C15.8828 29.063 17.8846 28.6877 19.7407 27.9064C21.5969 27.125 23.2644 25.9557 24.6314 24.4769C25.9984 22.9981 27.0333 21.2439 27.6666 19.3322C28.2999 17.4205 28.517 15.3955 28.3032 13.393C28.0894 11.3905 27.4498 9.45685 26.4273 7.7219C25.4047 5.98694 24.0229 4.49078 22.3745 3.33383C20.7261 2.17687 18.8493 1.38589 16.8701 1.01396ZM20.6356 20.6186C20.0926 21.1048 19.4303 21.4384 18.7164 21.5854C18.0024 21.7324 17.2622 21.6875 16.5713 21.4553C13.4401 20.5737 10.7237 18.6091 8.90575 15.9117C8.21134 14.9576 7.65312 13.9116 7.24713 12.8036C7.02725 12.1608 6.9876 11.47 7.13248 10.8062C7.27736 10.1424 7.60123 9.53089 8.06896 9.0381C8.29667 8.74749 8.60661 8.53219 8.95843 8.42025C9.31024 8.30831 9.68761 8.30492 10.0414 8.41051C10.3402 8.48523 10.5494 8.91856 10.8184 9.24729C11.0366 9.86442 11.2921 10.4681 11.5805 11.0553C11.7993 11.3549 11.8906 11.729 11.8346 12.0957C11.7786 12.4624 11.5798 12.7921 11.2816 13.0128C10.6092 13.6105 10.7138 14.1036 11.192 14.776C12.2491 16.2989 13.7077 17.4989 15.4057 18.2427C15.8839 18.4519 16.2425 18.4967 16.5563 18.0036C16.6908 17.8094 16.8701 17.645 17.0195 17.4657C17.8862 16.3749 17.6172 16.3898 18.992 16.9875C19.4298 17.1713 19.8541 17.3865 20.2621 17.6301C20.6655 17.8691 21.2782 18.1232 21.3678 18.4818C21.4541 18.8708 21.4314 19.2761 21.3022 19.6531C21.173 20.0301 20.9424 20.3642 20.6356 20.6186Z"
                  fill="#6D6D6D"
                />
              </g>
            </svg>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a className="no_link_design" href="#">
            <svg
              width="31"
              height="20"
              viewBox="0 0 31 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: "5px" }}
              className="zoom_effect"
            >
              <path
                d="M12.3908 14.2857L20.1758 10L12.3908 5.71429V14.2857ZM29.7308 3.1C29.9258 3.77143 30.0608 4.67143 30.1508 5.81429C30.2558 6.95714 30.3008 7.94286 30.3008 8.8L30.3908 10C30.3908 13.1286 30.1508 15.4286 29.7308 16.9C29.3558 18.1857 28.4858 19.0143 27.1358 19.3714C26.4308 19.5571 25.1408 19.6857 23.1608 19.7714C21.2108 19.8714 19.4258 19.9143 17.7758 19.9143L15.3908 20C9.10581 20 5.19081 19.7714 3.64581 19.3714C2.29581 19.0143 1.42581 18.1857 1.05081 16.9C0.855808 16.2286 0.720808 15.3286 0.630808 14.1857C0.525808 13.0429 0.480808 12.0571 0.480808 11.2L0.390808 10C0.390808 6.87143 0.630808 4.57143 1.05081 3.1C1.42581 1.81429 2.29581 0.985714 3.64581 0.628572C4.35081 0.442857 5.64081 0.314286 7.62081 0.228571C9.57081 0.128571 11.3558 0.0857142 13.0058 0.0857142L15.3908 0C21.6758 0 25.5908 0.228572 27.1358 0.628572C28.4858 0.985714 29.3558 1.81429 29.7308 3.1Z"
                fill="#6D6D6D"
              />
            </svg>
          </a>
        </Box>
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        sx={{
          mt: {
            xs: 4,
            sm: 6,
            md: 0,
            lg: 0,
            xl: 0,
          },
        }}
      >
        <form>
          <Typography
            variant="h5"
            color="text.main"
            sx={{ mb: 2.75, fontWeight: 500 }}
          >
            Fill out the form and we will contact you!
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Name"
            variant="outlined"
            sx={{ ...customeTextFeild, mb: 2 }}
            fullWidth
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            placeholder="E-mail"
            variant="outlined"
            sx={{ ...customeTextFeild, mb: 2 }}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            placeholder="Contact"
            variant="outlined"
            sx={{ ...customeTextFeild, mb: 2 }}
            fullWidth
          />
          <Box sx={{ mb: 3.5 }}>
            <FormControlLabel
              required
              sx={{
                "& .MuiTypography-root": {
                  color: "#6D6D6D",
                  fontSize: "18px",
                },
              }}
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    // color: pink[800],
                    "&.Mui-checked": {
                      color: "#D9D9D9",
                    },
                  }}
                />
              }
              label="I confirm my personal data processing consent"
            />
          </Box>

          <Button disableElevation variant="contained">
            Send
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
