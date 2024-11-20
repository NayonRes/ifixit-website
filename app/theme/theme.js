"use client";
import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import ColorPalette from "./ColorPalette";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      default: ColorPalette.light.background.default, // Change the background color for dark mode
    },
    primary: {
      main: ColorPalette.light.primary.main,
      light: ColorPalette.light.primary.light,
      contrastText: ColorPalette.light.primary.contrastText,
    },
    secondary: {
      main: ColorPalette.light.secondary.main,
      light: ColorPalette.light.secondary.light,
      contrastText: ColorPalette.light.secondary.contrastText,
    },
    success: {
      main: ColorPalette.light.success.main,
      light: ColorPalette.light.success.light,
      contrastText: ColorPalette.light.success.contrastText,
    },
    info: {
      main: ColorPalette.light.info.main,
      light: ColorPalette.light.info.light,
      contrastText: ColorPalette.light.info.contrastText,
    },
    warning: {
      main: ColorPalette.light.warning.main,
      light: ColorPalette.light.warning.light,
      contrastText: ColorPalette.light.warning.contrastText,
    },
    error: {
      main: ColorPalette.light.error.main,
      light: ColorPalette.light.error.light,
      contrastText: ColorPalette.light.error.contrastText,
    },
    text: {
      main: ColorPalette.light.text.main,
      primary: ColorPalette.light.primary.main,
      light: ColorPalette.light.text.light,
      fade: ColorPalette.light.text.fade,
      contrastText: ColorPalette.light.text.contrastText,
    },
    border: {
      main: ColorPalette.light.border.main,
    },
    paper: {
      main: ColorPalette.light.paper,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,

    h1: {
      fontSize: "7.875rem", //126px
      lineHeight: "10.5rem", // 168px
      fontWeight: 700,
      fontFamily: '"Playfair Display", serif',
      display: "block",
      // [createTheme().breakpoints.down("xl")]: {
      //   fontSize: "100px", // Adjust for medium screens
      // },
      // [createTheme().breakpoints.down("lg")]: {
      //   fontSize: "72px", // Adjust for medium screens
      // },
      // [createTheme().breakpoints.down("md")]: {
      //   fontSize: "72px", // Adjust for medium screens
      // },
      // [createTheme().breakpoints.down("sm")]: {
      //   fontSize: "52px", // Adjust for medium screens
      // },
      // [createTheme().breakpoints.down("xs")]: {
      //   fontSize: "28px", // Adjust for medium screens
      // },
    },
    h2: {
      fontSize: "3.75rem", //60px
      lineHeight: "4.25rem", // 68px
      fontWeight: 700,
      fontFamily: '"Inter", sans-serif', // alternative of  Times New Roman
      display: "block",

      [createTheme().breakpoints.down("lg")]: {
        fontSize: "3rem", //42px
      },
      [createTheme().breakpoints.down("md")]: {
        fontSize: "2.625rem", //42px
        lineHeight: "3.25rem", // 68pxv
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "1.75rem", //28px
        lineHeight: "3.25rem", // 52px
      },
    },
    h3: {
      fontSize: "3rem", //42px
      lineHeight: "3.2rem", // 48px
      fontWeight: 700,
      fontFamily: '"Inter", sans-serif', // alternative of  Times New Roman
      display: "block",

      [createTheme().breakpoints.down("lg")]: {
        fontSize: "2.125rem", //36px
      },
      [createTheme().breakpoints.down("md")]: {
        fontSize: "2rem", //32px
        lineHeight: "2rem", // 32px
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "1.375rem", //28px
        lineHeight: "2rem", // 32px
      },
    },

    h4: {
      fontSize: "1.75rem", //28px
      lineHeight: "1.75rem", // 28px
      fontWeight: 600,
      display: "block",
      fontFamily: '"Inter", sans-serif',
      [createTheme().breakpoints.down("lg")]: {
        fontSize: "1.5rem", // Adjust for medium screens
      },
      [createTheme().breakpoints.down("md")]: {
        fontSize: "1.25rem", // Adjust for medium screens
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "1.25rem", // Adjust for medium screens
      },
    },
    h5: {
      fontSize: "1.5rem", //24px
      lineHeight: "3.25rem", // 52px
      fontWeight: 700,
      display: "block",
      fontFamily: '"Inter", sans-serif',
      [createTheme().breakpoints.down("md")]: {
        fontSize: "1.125rem", // Adjust for medium screens
        lineHeight: "2rem", // 32px
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "1.125rem", // Adjust for medium screens
        lineHeight: "2rem", // 32px
      },
    },
    h6: {
      fontSize: "1.25rem", //20px
      //   lineHeight: "3.25rem", // 52px
        fontWeight: 500,
      display: "block",
      fontFamily: '"Inter", sans-serif',
    },
    subtitle1: {
      fontSize: "1.13rem", //18px
        fontWeight: 500,
      display: "block",
      fontFamily: '"Inter", sans-serif',
      [createTheme().breakpoints.down("md")]: {
        fontSize: "0.8rem", // Adjust for medium screens
      
      }
    },
    base: {
      fontSize: "1.125rem", //18px
      lineHeight: "2.125rem", // 34px
      display: "block",
      fontWeight: 400,
      fontFamily: '"Inter", sans-serif',
      [createTheme().breakpoints.down("md")]: {
        fontSize: "1rem", // Adjust for medium screens
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "1rem", // Adjust for medium screens
        lineHeight: "1.75rem", // 34px
      },
    },
    medium: {
      fontSize: "1rem", //16px
      lineHeight: "1.75rem", // 28px
      display: "block",
      fontWeight: 400,
      fontFamily: '"Inter", sans-serif',
      [createTheme().breakpoints.down("md")]: {
        fontSize: "0.875rem", // Adjust for medium screens
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "0.875rem", // Adjust for medium screens
      },
    },
    small: {
      fontSize: "0.875rem", //14px
      lineHeight: "1.125rem", // 18px
      display: "block",
      fontWeight: 400,
      fontFamily: '"Inter", sans-serif',
      [createTheme().breakpoints.down("md")]: {
        fontSize: "0.75rem", // Adjust for medium screens
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "0.75rem", // Adjust for medium screens
      },
    },
    xsmall: {
      fontSize: "0.625rem", //10px
      lineHeight: "1rem", // 16px
      display: "block",
      fontWeight: 400,
      fontFamily: '"Inter", sans-serif',
    },
  },
  components: {
    MuiPaper: {
      // Dark theme paper color
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.light.paper,
          boxShadow:
            "0px 2px 3px 0px rgba(0, 34, 66, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
          // padding: "24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1.125rem",
          padding: "12px 30px",
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: 700,
          fontFamily: '"Inter", sans-serif',

          [createTheme().breakpoints.down("sm")]: {
            "& .MuiButton-endIcon": {
              width: "14px",
            },
            padding: "10px 24px",
            fontSize: "13px",
          },
        },
      },
    },
    // MuiIconButton: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS

    //     },
    //   },
    // },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: ColorPalette.light.border.main, // Change the background color to your desired color
          height: "1px", // Change the height as needed
          margin: "0px", // Change the margin as needed
        },
      },
    },
    MuiAvatar: {
      variants: [
        // {
        //   props: { variant: "rounded" },
        //   style: {
        //     borderRadius: "50%", // You can adjust the value for the desired border radius
        //     width: "36px",
        //     height: "36px",
        //   },
        // },
        {
          props: { variant: "rounded" },
          style: {
            borderRadius: "6px", // You can adjust the value for the desired border radius
            width: "24px",
            height: "24px",
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Adjust the border-radius value as needed
          backgroundColor: ColorPalette.light.border.main, // Change the background color as needed
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Adjust the border-radius value as needed
        },
        standardSuccess: {
          backgroundColor: ColorPalette.light.success.light, // Change the background color for success alerts
          color: ColorPalette.light.success.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardError: {
          backgroundColor: ColorPalette.light.error.light, // Change the background color for error alerts
          color: ColorPalette.light.error.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardWarning: {
          backgroundColor: ColorPalette.light.warning.light, // Change the background color for warning alerts
          color: ColorPalette.light.warning.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
        standardInfo: {
          backgroundColor: ColorPalette.light.info.light, // Change the background color for info alerts
          color: ColorPalette.light.info.main,
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: "none",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          "& li a": {
            textDecoration: "none",
            fontSize: "12px",
            color: ColorPalette.light.text.fade, // Replace with your text color
            fontWeight: 500,
          },
          "& li:last-child": {
            "& a": {
              color: ColorPalette.light.info.main, // Replace with your fade text color
              cursor: "default",
            },
          },
        },
        separator: {
          color: ColorPalette.light.info.main,
          // Set the color for the separator between breadcrumbs
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 10px 6px 0px",
          borderBottom: `2px solid ${ColorPalette.light.border.main}`,
          background: ColorPalette.light.paper,
        },
        body: {
          fontSize: "14px",
          fontWeight: 400,
          padding: "6px 10px 6px 0px",
        },
      },
    },
  },
});

export default theme;
