import React from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BiArrowBack } from "react-icons/bi";
import Cardseccontent from "./Cardseccontent";
import "./cardtwo.scss";

const useStyles = makeStyles((theme) => ({
  containerh: {
    height: "100vh",
  },
  button: {
    margin: theme.spacing(1),
    color: "#A975FF",
    fontFamily: "poppins",
    fontSize: "18px",
    textTransform: "capitalize",
  },
  heading: {
    margin: "auto",
    fontFamily: "poppins",
    fontSize: "24px",
    paddingBottom: "20px",
  },
  headingsec: {
    textAlign: "left",
    fontFamily: "poppins",
    fontSize: "14px",
    color: "#81709B",
  },
  head: {
    backgroundColor: "#110D15",
    color: "#fff",
    fontFamily: "poppins",
  },
  rootcard: {
    backgroundColor: "#110D15",
    borderRadius: "0px",
  },
  cardcontent: {
    padding: 0,
  },
  headingcontainer: {
    padding: "20px 40px",
  },
  tableth: {
    color: "#fff",
    fontFamily: "poppins",
  },
  tablethh: {
    color: "#81709B",
    fontFamily: "poppins",
    fontSize: "14px",
  },
  tablebordr: {
    borderBottom: "none",
    color: "#fff",
    fontFamily: "poppins",
    fontSize: "18px",
  },
  headingcon: {
    margin: "auto",
  },
  dash: {
    textAlign: "left",
    color: "#A975FF",
  },
}));

export default function CardTwo() {
  
  const classes = useStyles();

  let history = useHistory();
  
  const handleBack = ()=> {
    history.push("/");
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.containerh}>
        <Grid container direction="row" className={classes.headingcontainer}>
          <Grid item>
            <Button className={classes.button} startIcon={<BiArrowBack />} onClick={handleBack}>
              {" "}
              Back
            </Button>
          </Grid>
          <Grid item className={classes.headingcon}>
            <Typography className={classes.heading} variant="h6">
              Wallet
            </Typography>
            <Typography className={classes.headingsec} variant="h6">
              Connected Web3 wallet
            </Typography>
            <Typography className={classes.dash} variant="h6" component="h6">
              –
            </Typography>
            <Cardseccontent />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
