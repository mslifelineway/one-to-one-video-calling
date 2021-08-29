import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { SocketContext } from "../../Context/socket.context";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirectoin: "column",
    },
  },
  paper: {
    padding: "10px",
    margin: "2px solid #000",
    margin: "10px",
  },
}));
const VideoPlayer = () => {
  const classes = useStyles();
  const { stream, call, callEnded, name, myVideo, userVideo, callAccepted } =
    useContext(SocketContext);

  return (
    <Grid container className={classes.gridContainer}>
      {stream ? (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Typography variant="h5" gutterBottom>
              Please allow the webcam, If still not visible that means your
              webcam is not supported by this site.
            </Typography>
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Typography variant="h5" gutterBottom>
              {call.name || "from"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
