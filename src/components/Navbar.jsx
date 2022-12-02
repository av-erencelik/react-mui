import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import SpatialAudioIcon from "@mui/icons-material/SpatialAudio";
import { Box } from "@mui/system";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)({
  display: "flex",
  gap: "15px",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI PROJECT
        </Typography>
        <SpatialAudioIcon sx={{ display: { xs: "block", sm: "none" } }}></SpatialAudioIcon>
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/13677413/pexels-photo-13677413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={() => {
              setOpen(true);
            }}
          ></Avatar>
        </Icons>
        <UserBox
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Avatar
            src="https://images.pexels.com/photos/13677413/pexels-photo-13677413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{ width: 30, height: 30 }}
          ></Avatar>
          <Typography variant="span">Jake</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
