import { Avatar, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
export default function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", sm: "0" } }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon></AddIcon>
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            Create A Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/13677413/pexels-photo-13677413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ width: 30, height: 30 }}
            ></Avatar>
            <Typography fontWeight={500} variant="span">
              Jake
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}
