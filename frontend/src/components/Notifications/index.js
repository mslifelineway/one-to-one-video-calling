import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Call } from "@material-ui/icons";
import React, { useContext } from "react";
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
  answerCall: {
    background: "green",
    color: "#fff",
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const { call, answerCall, callAccepted } = useContext(SocketContext);

  return (
    <Grid item xs={12} sm={3} md={2} lg={2}>
      <Paper className={classes.paper}>
        <Typography variant="h6" gutterBottom>
          {call.name} is calling...
        </Typography>

        <Button
          variant="contained"
          className={classes.answerCall}
          onClick={answerCall}
        >
          <Call />
        </Button>
      </Paper>
    </Grid>
  );
};

export default Notifications;
