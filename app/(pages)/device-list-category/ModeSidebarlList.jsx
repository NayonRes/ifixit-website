import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function TemporaryDrawer({
  device_id,
  modelList,
  modelLoading,
  model_id,
}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        overflow: "auto",
        maxHeight: "100%",
        mt: 6,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {!modelLoading &&
        modelList?.length > 0 &&
        modelList.map((item) => (
          <Link
            href={`/device-list-category?device_id=${device_id}&model_id=${item?._id}`}
            key={item?._id}
            style={{ textDecoration: "none" }}
          >
            <Typography
              color={model_id === item?._id ? "text.primary" : "text.light"}
              sx={{
                px: 2,
                py: "7px",
                borderLeft: model_id === item?._id && "3px solid #F57042",
                fontWeight: 600,
              }}
            >
              {item?.name}
            </Typography>
          </Link>
        ))}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ mr: 2 }} /> Model List
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            overflow: "hidden",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
