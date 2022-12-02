import { Box } from "@mui/material";
import Post from "./Post";

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post
        src={`https://images.pexels.com/photos/10534018/pexels-photo-10534018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
      ></Post>
      <Post
        src={
          "https://images.pexels.com/photos/11950177/pexels-photo-11950177.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        }
      ></Post>
      <Post
        src={
          "https://images.pexels.com/photos/14447569/pexels-photo-14447569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ></Post>
      <Post
        src={
          "https://images.pexels.com/photos/14615531/pexels-photo-14615531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ></Post>
      <Post
        src={
          "https://images.pexels.com/photos/6218743/pexels-photo-6218743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ></Post>
      <Post
        src={
          "https://images.pexels.com/photos/13243820/pexels-photo-13243820.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        }
      ></Post>
    </Box>
  );
}
