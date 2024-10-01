"use client";
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: {
          xs: 4,
          sm: 4,
          md: 4,
          lg: 8,
          xl: 12,
        },
        background: "#2E2E2E",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}>
          <Grid item md={4}>
            <svg
              width="70"
              height="93"
              viewBox="0 0 70 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66529 88.1262C1.66539 88.1262 0.879784 88.8973 0.879784 89.8834C0.879784 90.8694 1.66539 91.6475 2.66529 91.6475C3.16554 91.6475 3.67964 91.4165 4.058 91.0548L4.55825 91.6117C4.05107 92.1119 3.32959 92.4331 2.62255 92.4331C1.15821 92.4331 0.0231323 91.3263 0.0231323 89.8915C0.0231323 88.4699 1.17323 87.377 2.65143 87.377C3.36054 87.3805 4.04107 87.6569 4.55189 88.1487L4.05858 88.7627C3.69409 88.3688 3.17247 88.1262 2.66529 88.1262Z"
                fill="#F6F6F6"
              />
              <path
                d="M6.25764 87.3975V89.5688H8.90789V87.3975H9.75068V92.3976H8.90789V90.3261H6.25764V92.3976H5.41486V87.3975H6.25764Z"
                fill="#F6F6F6"
              />
              <path
                d="M11.9076 87.3975V92.3976H11.0625V87.3975H11.9076Z"
                fill="#F6F6F6"
              />
              <path
                d="M16.6363 87.3975V88.1565H15.0483V92.3993H14.2078V88.1565H12.6291V87.3992L16.6363 87.3975Z"
                fill="#F6F6F6"
              />
              <path
                d="M20.529 92.3976L19.6146 90.8836C19.5436 90.8905 19.465 90.8905 19.3864 90.8905H18.2005V92.3976H17.3589V87.3975H19.3864C20.6648 87.3975 21.4007 88.019 21.4007 89.105C21.4007 89.905 21.0293 90.4688 20.365 90.7264L21.4862 92.3976H20.529ZM19.3864 90.1332C20.1576 90.1332 20.5995 89.8045 20.5995 89.1264C20.5995 88.469 20.1564 88.1548 19.3864 88.1548H18.2005V90.1332H19.3864Z"
                fill="#F6F6F6"
              />
              <path
                d="M27.41 89.8974C27.41 91.3265 26.2547 92.4333 24.7597 92.4333C23.2648 92.4333 22.1095 91.3265 22.1095 89.8974C22.1095 88.4683 23.2648 87.376 24.7597 87.376C26.2547 87.376 27.41 88.4689 27.41 89.8974ZM22.9667 89.8974C22.9667 90.8904 23.7881 91.676 24.7667 91.676C25.002 91.6802 25.2358 91.6376 25.4544 91.5505C25.6731 91.4633 25.8721 91.3335 26.0401 91.1686C26.208 91.0037 26.3413 90.807 26.4324 90.59C26.5234 90.373 26.5703 90.14 26.5703 89.9046C26.5703 89.6693 26.5234 89.4363 26.4324 89.2193C26.3413 89.0022 26.208 88.8055 26.0401 88.6406C25.8721 88.4757 25.6731 88.3459 25.4544 88.2588C25.2358 88.1717 25.002 88.129 24.7667 88.1333C23.7789 88.1333 22.9621 88.9073 22.9621 89.8974H22.9667Z"
                fill="#F6F6F6"
              />
              <path
                d="M29.136 87.3975L31.8145 90.9904V87.3975H32.6429V92.3976H31.8145L29.1499 88.8121V92.3976H28.3071V87.3975H29.136Z"
                fill="#F6F6F6"
              />
              <path
                d="M36.9498 87.3975V92.3976H36.1071V87.3975H36.9498Z"
                fill="#F6F6F6"
              />
              <path
                d="M39.0924 87.3975L41.7715 90.9904V87.3975H42.6021V92.3976H41.7738L39.1091 88.8121V92.3976H38.264V87.3975H39.0924Z"
                fill="#F6F6F6"
              />
              <path
                d="M47.3354 87.3975V88.1565H45.7498V92.3993H44.907V88.1565H43.3282V87.3992L47.3354 87.3975Z"
                fill="#F6F6F6"
              />
              <path
                d="M51.6279 87.3975V88.1565H48.8985V89.514H51.3414V90.2649H48.8985V91.6432H51.7128V92.4005H48.0557V87.4004L51.6279 87.3975Z"
                fill="#F6F6F6"
              />
              <path
                d="M55.9135 92.3976L54.9991 90.8836C54.928 90.8905 54.8494 90.8905 54.7709 90.8905H53.585V92.3976H52.7422V87.3975H54.7709C56.0492 87.3975 56.7851 88.019 56.7851 89.105C56.7851 89.905 56.4137 90.4688 55.7494 90.7264L56.8706 92.3976H55.9135ZM54.7709 90.1332C55.542 90.1332 55.9839 89.8045 55.9839 89.1264C55.9839 88.469 55.5409 88.1548 54.7709 88.1548H53.585V90.1332H54.7709Z"
                fill="#F6F6F6"
              />
              <path
                d="M58.7491 87.3975V92.3976H57.9063V87.3975H58.7491Z"
                fill="#F6F6F6"
              />
              <path
                d="M64.9491 89.8974C64.9491 91.3265 63.7938 92.4333 62.2994 92.4333C60.805 92.4333 59.6491 91.3265 59.6491 89.8974C59.6491 88.4683 60.8044 87.376 62.2994 87.376C63.7943 87.376 64.9491 88.4689 64.9491 89.8974ZM60.5064 89.8974C60.5064 90.8904 61.3278 91.676 62.3063 91.676C62.5416 91.6802 62.7754 91.6376 62.9941 91.5505C63.2127 91.4633 63.4118 91.3335 63.5797 91.1686C63.7476 91.0037 63.881 90.807 63.972 90.59C64.0631 90.373 64.11 90.14 64.11 89.9046C64.11 89.6693 64.0631 89.4363 63.972 89.2193C63.881 89.0022 63.7476 88.8055 63.5797 88.6406C63.4118 88.4757 63.2127 88.3459 62.9941 88.2588C62.7754 88.1717 62.5416 88.129 62.3063 88.1333C61.3209 88.1333 60.5093 88.9073 60.5093 89.8974H60.5064Z"
                fill="#F6F6F6"
              />
              <path
                d="M69.0203 92.3976L68.1059 90.8836C68.0348 90.8905 67.9563 90.8905 67.8748 90.8905H66.6901V92.3976H65.8473V87.3975H67.876C69.1543 87.3975 69.8902 88.019 69.8902 89.105C69.8902 89.905 69.5188 90.4688 68.8545 90.7264L69.9757 92.3976H69.0203ZM67.8777 90.1332C68.6489 90.1332 69.0908 89.8045 69.0908 89.1264C69.0908 88.469 68.6477 88.1548 67.8777 88.1548H66.6901V90.1332H67.8777Z"
                fill="#F6F6F6"
              />
              <path
                d="M24.4235 30.4672C23.6561 30.4657 22.8899 30.5275 22.1326 30.652V23.1426H17.7165V55.2471C19.2443 56.2915 19.7694 57.0251 21.6011 57.3954C21.7744 57.4312 21.9535 57.4612 22.1326 57.4907C22.8899 57.6152 23.6561 57.677 24.4235 57.6755C32.0681 57.6755 38.2871 51.571 38.2871 44.0702C38.2871 36.5694 32.0681 30.4672 24.4235 30.4672ZM24.4235 52.3849C23.8304 52.3854 23.2387 52.3254 22.6577 52.2058C22.4786 52.1706 22.3053 52.1284 22.1326 52.081V36.0646C22.3059 36.0224 22.4844 35.9808 22.6577 35.9392C23.2391 35.8224 23.8305 35.7625 24.4235 35.7601C29.1499 35.7601 32.9929 39.4894 32.9929 44.0725C32.9929 48.6556 29.1499 52.3849 24.4235 52.3849Z"
                fill="#F6F6F6"
              />
              <path
                d="M57.1658 31.0811V61.8345C56.3063 61.466 55.5016 61.1194 55.3705 61.0432C54.519 60.5412 53.7531 60.2547 52.7999 60.0987C52.209 60.0094 51.6126 59.9602 51.015 59.9514C48.7997 59.8936 46.4966 60.4372 44.2698 60.9663C42.5779 61.3707 40.8646 61.8178 39.2108 62.2516C34.7328 63.4329 30.1076 64.646 25.2588 65.0676C24.0637 65.1716 22.7293 65.286 21.3429 65.286C18.3305 65.286 15.072 64.7407 12.4772 62.34C9.21638 59.3247 8.17141 53.5343 9.58203 47.9866L13.8566 50.2238C13.3437 52.2271 12.2877 56.7374 15.5023 59.7117C17.9337 61.9576 20.8912 61.849 24.9492 61.5024C29.4924 61.109 33.7682 59.9849 38.2981 58.7955C39.9733 58.3531 41.7062 57.8973 43.4443 57.4854C45.8924 56.9043 48.4271 56.3041 51.1126 56.3775C51.6781 56.3906 52.2422 56.439 52.8017 56.5225L52.8098 31.0846C52.8098 28.1101 51.4326 26.6221 48.6784 26.6205C46.632 26.6205 44.9301 27.2427 43.5726 28.4869C42.2151 29.7312 41.5358 31.3411 41.5346 33.3166C41.5346 36.3678 43.0608 37.8931 46.1131 37.8928C46.8937 37.8928 47.656 37.8556 48.4 37.7813V41.4077C47.4759 41.5482 46.5429 41.6229 45.6082 41.6313C43.0404 41.6313 41.004 40.8782 39.499 39.3721C37.994 37.866 37.2408 35.8475 37.2393 33.3166C37.2393 30.304 38.2908 27.8028 40.3938 25.813C42.4968 23.8232 45.2778 22.8269 48.7368 22.8242C54.3515 22.8242 57.1612 25.5765 57.1658 31.0811Z"
                fill="#F6F6F6"
              />
              <path
                d="M57.1716 21.9878L52.5082 20.7487C52.566 18.6831 52.3748 12.7044 48.5802 10.5163C45.7122 8.86245 42.8523 9.6209 38.9722 10.86C34.6277 12.2463 30.7037 14.29 26.5528 16.451C23.1724 18.2111 19.6903 20.2329 15.9188 21.2207C15.4446 21.3437 14.8438 21.4748 14.1645 21.584V48.4048L9.76052 46.1647V21.8647C8.40131 21.7914 7.10334 21.532 6.12827 20.9642L6.69321 17.5179C8.23495 17.7992 9.86103 18.2383 11.1163 18.3151C15.998 18.6097 20.7381 15.4471 24.8995 13.2774C29.0037 11.1401 33.2465 8.93061 37.8827 7.44895C39.0259 7.08329 40.3031 6.67663 41.6513 6.37106C44.5927 5.70503 47.8899 5.51671 50.9515 7.28258C54.798 9.50075 57.3218 16.2627 57.1716 21.9878Z"
                fill="#F6F6F6"
              />
              <path
                d="M63.8723 75.6016V77.8608H59.4625C59.4516 77.8145 59.4406 77.7683 59.4273 77.7215C58.1854 73.2384 52.2454 67.7698 46.6128 66.9923C39.9057 66.0681 34.5029 70.9163 31.8094 76.7314L25.7273 77.0422C26.8248 68.8044 35.0078 62.4081 44.9324 62.4081C50.7279 62.4081 55.9233 64.5852 59.4654 68.0402L59.4602 23.0991H63.8671L63.8723 75.6016Z"
                fill="#F6F6F6"
              />
              <path
                d="M70 83.1377H0V0.617188H70V83.1377ZM0.27265 82.8651H69.7273V0.890415H0.27265V82.8651Z"
                fill="#F6F6F6"
              />
            </svg>

            <Typography variant="base" sx={{ my: 3.5, color: "#F6F6F6" }}>
              We provides a full range of <br />
              interior design, architectural design.
            </Typography>

            <Box>
              <a className="no_link_design" href="#">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="zoom_effect"
                >
                  <path
                    d="M20 10.4331C20 4.91311 15.52 0.433105 10 0.433105C4.48 0.433105 0 4.91311 0 10.4331C0 15.2731 3.44 19.3031 8 20.2331V13.4331H6V10.4331H8V7.93311C8 6.00311 9.57 4.43311 11.5 4.43311H14V7.43311H12C11.45 7.43311 11 7.88311 11 8.43311V10.4331H14V13.4331H11V20.3831C16.05 19.8831 20 15.6231 20 10.4331Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </a>
              &nbsp;&nbsp;&nbsp; &nbsp;
              <a className="no_link_design" href="#">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="zoom_effect"
                >
                  <mask
                    id="mask0_167_612"
                    // style="mask-type:luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="19"
                    height="20"
                  >
                    <path d="M0 0.908203H19V19.9082H0V0.908203Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_167_612)">
                    <path
                      d="M11.29 1.04822L10.72 0.968222C9.00693 0.720879 7.25885 0.965577 5.67954 1.67379C4.10023 2.382 2.75476 3.52454 1.8 4.96822C0.784155 6.3482 0.178585 7.98696 0.0529792 9.69591C-0.0726268 11.4049 0.286836 13.1145 1.09 14.6282C1.1722 14.7799 1.22337 14.9465 1.24054 15.1182C1.25771 15.2899 1.24053 15.4632 1.19 15.6282C0.78 17.0382 0.4 18.4582 0 19.9482L0.5 19.7982C1.85 19.4382 3.2 19.0782 4.55 18.7482C4.83494 18.689 5.13112 18.7169 5.4 18.8282C6.6112 19.4193 7.93482 19.7445 9.28205 19.782C10.6293 19.8195 11.9689 19.5683 13.2111 19.0455C14.4533 18.5226 15.5692 17.74 16.4841 16.7503C17.399 15.7607 18.0915 14.5867 18.5153 13.3074C18.9392 12.028 19.0844 10.6728 18.9414 9.33263C18.7983 7.99249 18.3703 6.69846 17.6859 5.53738C17.0016 4.37629 16.0769 3.37502 14.9737 2.60075C13.8706 1.82648 12.6146 1.29713 11.29 1.04822ZM13.81 14.1682C13.4466 14.4936 13.0034 14.7169 12.5256 14.8152C12.0478 14.9136 11.5524 14.8836 11.09 14.7282C8.99456 14.1382 7.17661 12.8235 5.96 11.0182C5.49529 10.3797 5.1217 9.6797 4.85 8.93822C4.70285 8.508 4.67632 8.04569 4.77327 7.60146C4.87023 7.15722 5.08698 6.74801 5.4 6.41822C5.55239 6.22374 5.75981 6.07965 5.99526 6.00474C6.2307 5.92982 6.48325 5.92755 6.72 5.99822C6.92 6.04822 7.06 6.33822 7.24 6.55822C7.386 6.97122 7.557 7.37522 7.75 7.76822C7.89642 7.96873 7.95758 8.21902 7.92011 8.46446C7.88263 8.7099 7.74958 8.93054 7.55 9.07822C7.1 9.47822 7.17 9.80822 7.49 10.2582C8.19745 11.2774 9.1736 12.0805 10.31 12.5782C10.63 12.7182 10.87 12.7482 11.08 12.4182C11.17 12.2882 11.29 12.1782 11.39 12.0582C11.97 11.3282 11.79 11.3382 12.71 11.7382C13.003 11.8612 13.287 12.0052 13.56 12.1682C13.83 12.3282 14.24 12.4982 14.3 12.7382C14.3577 12.9986 14.3425 13.2698 14.2561 13.5221C14.1696 13.7744 14.0153 13.998 13.81 14.1682Z"
                      fill="#F6F6F6"
                    />
                  </g>
                </svg>
              </a>
              &nbsp;&nbsp;&nbsp; &nbsp;
              <a className="no_link_design" href="#">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="zoom_effect"
                >
                  <path
                    d="M8 10.4082L13.19 7.4082L8 4.4082V10.4082ZM19.56 2.5782C19.69 3.0482 19.78 3.6782 19.84 4.4782C19.91 5.2782 19.94 5.9682 19.94 6.5682L20 7.4082C20 9.5982 19.84 11.2082 19.56 12.2382C19.31 13.1382 18.73 13.7182 17.83 13.9682C17.36 14.0982 16.5 14.1882 15.18 14.2482C13.88 14.3182 12.69 14.3482 11.59 14.3482L10 14.4082C5.81 14.4082 3.2 14.2482 2.17 13.9682C1.27 13.7182 0.69 13.1382 0.44 12.2382C0.31 11.7682 0.22 11.1382 0.16 10.3382C0.0900001 9.5382 0.0599999 8.8482 0.0599999 8.2482L0 7.4082C0 5.2182 0.16 3.6082 0.44 2.5782C0.69 1.6782 1.27 1.0982 2.17 0.848203C2.64 0.718203 3.5 0.628203 4.82 0.568203C6.12 0.498203 7.31 0.468203 8.41 0.468203L10 0.408203C14.19 0.408203 16.8 0.568203 17.83 0.848203C18.73 1.0982 19.31 1.6782 19.56 2.5782Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </a>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Typography
              variant="base"
              sx={{
                color: "#F6F6F6",
                fontWeight: 500,
                mb: { xs: 3, sm: 3, md: 6 },
              }}
            >
              Contacts
            </Typography>
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.0775 24.6601C9.0775 24.6601 0 17.1692 0 9.7984C0 7.1997 1.05357 4.70744 2.92893 2.86988C4.8043 1.03233 7.34784 0 10 0C12.6522 0 15.1957 1.03233 17.0711 2.86988C18.9464 4.70744 20 7.1997 20 9.7984C20 17.1692 10.9225 24.6601 10.9225 24.6601C10.4175 25.1157 9.58625 25.1108 9.0775 24.6601ZM10 14.0852C10.5745 14.0852 11.1434 13.9743 11.6742 13.7589C12.205 13.5435 12.6873 13.2277 13.0936 12.8296C13.4998 12.4316 13.8221 11.959 14.042 11.4389C14.2618 10.9188 14.375 10.3613 14.375 9.7984C14.375 9.23545 14.2618 8.67801 14.042 8.15791C13.8221 7.63781 13.4998 7.16524 13.0936 6.76717C12.6873 6.36911 12.205 6.05334 11.6742 5.83791C11.1434 5.62248 10.5745 5.5116 10 5.5116C8.83968 5.5116 7.72688 5.96324 6.90641 6.76717C6.08594 7.5711 5.625 8.66147 5.625 9.7984C5.625 10.9353 6.08594 12.0257 6.90641 12.8296C7.72688 13.6336 8.83968 14.0852 10 14.0852Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  Shornomoye, Level:A/1 House: 46/A, <br />
                  Road: 11/A, Dhanmondi,, Dhaka, Bangladesh
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" sx={{ mb: 3.125 }}>
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33333 0.5C2.44928 0.5 1.60143 0.858213 0.976311 1.49584C0.351189 2.13346 0 2.99826 0 3.9V4.2417L10 9.7344L20 4.2434V3.9C20 2.99826 19.6488 2.13346 19.0237 1.49584C18.3986 0.858213 17.5507 0.5 16.6667 0.5H3.33333ZM20 6.1729L10.395 11.448C10.2736 11.5147 10.1379 11.5496 10 11.5496C9.86212 11.5496 9.7264 11.5147 9.605 11.448L0 6.1729V14.1C0 15.0017 0.351189 15.8665 0.976311 16.5042C1.60143 17.1418 2.44928 17.5 3.33333 17.5H16.6667C17.5507 17.5 18.3986 17.1418 19.0237 16.5042C19.6488 15.8665 20 15.0017 20 14.1V6.1729Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  <a
                    className="no_link_design"
                    href="mailto:chitroninterior@gmail.com"
                  >
                    chitroninterior@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs="auto" sx={{ pr: 3 }}>
                <svg
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.20536 0.982696L4.66698 0.604292C6.03495 0.250088 7.49793 0.823195 8.0842 1.94301L9.25133 4.17383C9.76025 5.14515 9.47796 6.28806 8.55377 6.99867L5.98474 8.97649C6.14307 10.1601 6.63344 11.325 7.45586 12.4712C8.23793 13.5799 9.28585 14.5505 10.5379 15.3258L13.6267 14.4898C14.7965 14.1741 16.0709 14.5382 16.7888 15.3929L18.4607 17.3839C19.2967 18.3783 19.1461 19.7489 18.1106 20.5915L17.0005 21.4946C15.8958 22.3933 14.3188 22.7201 12.8585 22.3504C9.41327 21.4792 6.24531 18.8931 3.35464 14.5921C0.460359 10.2837 -0.5611 6.6287 0.290267 3.62713C0.648546 2.36431 1.75867 1.3578 3.20807 0.982696"
                    fill="#F6F6F6"
                  />
                </svg>
              </Grid>
              <Grid item xs="auto">
                <Typography
                  variant="medium"
                  sx={{ color: "#F6F6F6", fontWeight: 500 }}
                >
                  <a className="no_link_design" href="tel:+8801810023501">
                    018 10 02 35 01
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Typography
              variant="base"
              sx={{
                color: "#F6F6F6",
                fontWeight: 500,
                mb: { xs: 3, sm: 3, md: 2 },
              }}
            >
              Latest Projects
            </Typography>
            <img src="./all_design.svg" alt="chitron design" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;