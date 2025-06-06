"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { IconButton } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { usePathname, useRouter } from "next/navigation";

// import { useLocation, useNavigate } from "react-router-dom";
// import "../App.css";
// import "./Header.css";
const MobileDrawer = () => {
  // const location = useLocation();
  const pathname = usePathname();
  const router = useRouter();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // const navigate = useNavigate();
  const [openCollapse, setOpenCollapse] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleChange = (route) => {
    // console.log("id", id);
    // console.log("openCollapse", openCollapse);
    // if (id === openCollapse) {
    //   setOpenCollapse("");
    // } else {
    //   setOpenCollapse(id);
    // }

    router.push(route);
    route;
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 270 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        className="mobile_drawer_menu"
        sx={{
          "& .MuiListItemIcon-root": {
            paddingLeft: "13px",
          },
          "& .MuiTypography-root": {
            fontWeight: 600,
            color: "#2E2E2E",
          },
        }}
      >
        <div style={{ position: "relative", padding: "3px 15px 10px" }}>
          <img loading="lazy" src="/logo.svg" alt="iFixit logo" />
          <IconButton
            id="closeButton"
            onClick={toggleDrawer(anchor, false)}
            style={{ position: "absolute", right: 7, top: 3 }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("/");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/" ? "#f3f3f3" : "" }}
          >
            <ListItemIcon>
              {/* <img src="/images/home.svg" alt="Home icon" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
                  fill="#2E2E2E"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("/services");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/services" ? "#f3f3f3" : "" }}
          >
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <g id="_01_align_center" data-name="01 align center">
                  <path
                    d="M13,2V9H2V3A1,1,0,0,1,3,2H13m2-2H3A3,3,0,0,0,0,3v8H15V0Z"
                    fill="#2E2E2E"
                  />
                  <path
                    d="M21,2a1,1,0,0,1,1,1V9H19V2h2m0-2H17V11h7V3a3,3,0,0,0-3-3Z"
                    fill="#2E2E2E"
                  />
                  <path
                    d="M5,15v7H3a1,1,0,0,1-1-1V15H5m2-2H0v8a3,3,0,0,0,3,3H7V13Z"
                    fill="#2E2E2E"
                  />
                  <path
                    d="M22,15v6a1,1,0,0,1-1,1H11V15H22m2-2H9V24H21a3,3,0,0,0,3-3V13Z"
                    fill="#2E2E2E"
                  />
                </g>
              </svg>
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("/device-list");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/device-list" ? "#f3f3f3" : "" }}
          >
            <ListItemIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="#2E2E2E"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </ListItemIcon>
            <ListItemText primary="Device List" />
          </ListItemButton>
        </ListItem> */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("/blog");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/blog" ? "#f3f3f3" : "" }}
          >
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="m11.5,6.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm-1.596,7.355c.472.287,1.088.136,1.374-.336.559-.922,1.627-1.519,2.722-1.519s2.163.596,2.722,1.519c.188.31.519.481.856.481.177,0,.355-.047.518-.145.472-.286.623-.901.337-1.374-.929-1.531-2.627-2.481-4.433-2.481s-3.504.951-4.433,2.481c-.286.473-.135,1.087.337,1.374Zm12.096-8.855v14c0,2.757-2.243,5-5,5H6c-2.206,0-4-1.794-4-4V5C2,2.243,4.243,0,7,0h10C19.757,0,22,2.243,22,5Zm-5-3h-9v14h12V5c0-1.654-1.346-3-3-3Zm-13,3v11.556c.591-.344,1.268-.556,2-.556V2.184c-1.161.414-2,1.514-2,2.816Zm16,14v-1H6c-1.103,0-2,.897-2,2s.897,2,2,2h11c1.654,0,3-1.346,3-3Z"
                  fill="#2E2E2E"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("/about-us");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/about-us" ? "#f3f3f3" : "" }}
          >
            <ListItemIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4.25C2 4.11193 2.11193 4 2.25 4H12.75C12.8881 4 13 4.11193 13 4.25V11.5H2V4.25ZM2.25 3C1.55964 3 1 3.55964 1 4.25V12H0V12.5C0 12.7761 0.223858 13 0.5 13H14.5C14.7761 13 15 12.7761 15 12.5V12H14V4.25C14 3.55964 13.4404 3 12.75 3H2.25Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleChange("/contact-us");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/contact-us" ? "#f3f3f3" : "" }}
          >
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="m8.5,9.5c0,.551.128,1.073.356,1.537-.49.628-.795,1.407-.836,2.256-.941-.988-1.52-2.324-1.52-3.792,0-3.411,3.122-6.107,6.659-5.381,2.082.428,3.769,2.105,4.213,4.184.134.628.159,1.243.091,1.831-.058.498-.495.866-.997.866h-.045c-.592,0-1.008-.527-.943-1.115.044-.395.021-.81-.08-1.233-.298-1.253-1.32-2.268-2.575-2.557-2.286-.525-4.324,1.207-4.324,3.405Zm-3.89-1.295c.274-1.593,1.053-3.045,2.261-4.178,1.529-1.433,3.531-2.141,5.63-2.011,3.953.256,7.044,3.719,6.998,7.865-.019,1.736-1.473,3.118-3.208,3.118h-2.406c-.244-.829-1.002-1.439-1.91-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.538,0,1.025-.215,1.384-.561h2.932c2.819,0,5.168-2.245,5.208-5.063C21.573,4.715,17.651.345,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.499,1.405-2.496,3.265-2.855,5.266-.109.608.372,1.166.989,1.166.472,0,.893-.329.972-.795Zm7.39,8.795c-3.695,0-6.892,2.292-7.955,5.702-.165.527.13,1.088.657,1.253.526.159,1.087-.131,1.252-.657.351-1.127,1.052-2.089,1.952-2.825l1.401,2.101c.355.532,1.136.532,1.491,0l1.254-1.882,1.254,1.882c.355.532,1.136.532,1.491,0l1.363-2.044c.867.729,1.542,1.67,1.884,2.768.134.428.528.702.955.702.099,0,.198-.015.298-.045.527-.165.821-.726.657-1.253-1.063-3.41-4.26-5.702-7.955-5.702Z"
                  fill="#2E2E2E"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding sx={{ position: "fixed", bottom: 0 }}>
          <ListItemButton
            onClick={() => {
              handleChange("/login");
              document.getElementById("closeButton").click();
            }}
            style={{ background: pathname === "/login" ? "#f3f3f3" : "" }}
            sx={{ background: "#FEF3E2" }}
          >
            <ListItemIcon>
              <svg
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Button
            variant="contained"
            disableElevation
            // color="#25316d"
            aria-label="open drawer"
            edge="start"
            color="primary"
            sx={{
              display: { md: "none" },
              padding: "6px 9px !important",
              minWidth: "0px !important",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileDrawer;
