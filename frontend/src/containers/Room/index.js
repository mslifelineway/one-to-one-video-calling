import { Box, Card } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Notifications from "../../components/Notifications";
import Options from "../../components/Options";
import VideoPlayer from "../../components/VideoPlayer";
import useStyles from "../../styles/room.styles";

const Room = () => {
  const classes = useStyles();

  const params = useParams();
  console.log("===> id ; ", params.id);
  return (
    <Layout>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Layout>
  );
};

export default Room;
