import {
  Button,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Call, CallEnd } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { SocketContext } from "../../Context/socket.context";

const useStyles = makeStyles((theme) => ({
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  input: {
    margin: "0 15px",
    marginBottom: "12px",
    padding: "3px 15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  callEnd: {
    background: "red",
    color: "#fff",
  },
}));

const Options = (props) => {
  const classes = useStyles();
  const {
    stream,
    setStream,
    me,
    setMe,
    call,
    callEnded,
    setCallEnded,
    name,
    setName,
    myVideo,
    userVideo,
    connectionRef,
    answerCall,
    callUser,
    callAccepted,
    leaveCall,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  console.log("===> me: ", me);
  console.log("===> idTocall: ", idToCall);
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} sm={3} md={2} lg={2}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Account Info
          </Typography>
          <InputBase
            placeholder="Enter name"
            type="text"
            className={classes.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={me}>
            <Button variant="contained" color="primary" onClick={() => {}}>
              Copy your ID
            </Button>
          </CopyToClipboard>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3} md={2} lg={2}>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Make a call
          </Typography>
          <InputBase
            placeholder="Enter ID"
            type="text"
            className={classes.input}
            value={idToCall}
            onChange={(e) => {
              setIdToCall(e.target.value);
            }}
          />
          {callAccepted && !callEnded ? (
            <Button
              variant="contained"
              className={classes.callEnd}
              onClick={leaveCall}
            >
              <CallEnd />
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                callUser(idToCall);
              }}
            >
              <Call />
            </Button>
          )}
        </Paper>
        {call.isReceivedCall && !callAccepted && props.children}
      </Grid>
    </Grid>
  );
};

export default Options;
