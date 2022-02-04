import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  ListItem,
  Button,
  AppBar,
  Tab,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Divider } from "../divider/Divider";
import MyBetTab from "../content/mybettab/MyBetTab";
import { AiOutlineSetting } from "react-icons/ai";
import { MainContent } from "../MainContent";
import EModal from "./EModal";
import dd from "../../assets/images/dd.png";
import "./header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  hd: {
    display: "flex",
    justifyContent: "space-around",
    ["@media (max-width:476px)"]: {
      justifyContent: "right",
    },
  },
  logo: {
    textAlign: "left",
    paddingLeft: "20px",
    display: "flex",
  },
  tebs: {
    textAlign: "left",
  },
  buttono: {
    color: "#FFF",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "poppins",
    margin: "15px 0 0 0",
  },
  buttonoo: {
    color: "#A975FF",
    fontSize: "17px",
  },
  linkf: {
    color: "#A975FF",
    textDecoration: "none",
  },
  nt: {
    color: "#81709B",
    fontSize: "12px",
    fontFamily: "poppins",
    textAlign: "left",
    padding: "0 0 0 11px",
  },
  cnimg: {
    height: 17,
    width: 19,
  },
  mview: {
    ["@media (min-width:780px)"]: {
      display: "none",
    },
    ["@media (max-width:476px)"]: {
      display: "none",
    },
  },
  mmview: {
    ["@media (min-width:476px)"]: {
      display: "none",
    },
  },
  dview: {
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logo_text: {
    ["@media (max-width:476px)"]: {
      display: "none",
    },
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const handleTab =()=>{
     setValue("2")
    }
 
 return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="fixed">
          <Grid
            container
            direction="row"
            // justify = "space-between"
            alignItems="center"
          >
            <Grid item lg={3} className={classes.logo}>
              <div className="imgsize">
                <img src={logo} />
              </div>
              <Typography
                color="inherit"
                variant="headline"
                className="logo_text"
              >
                SmartChainBet
              </Typography>
            </Grid>
            <Grid item lg={4} xs={8} className={classes.mmview}>
              <div className={classes.hd}>
                <div>
                  <Button className={classes.buttono}>
                    <AiOutlineSetting className={classes.buttonoo} /> &nbsp;
                  </Button>
                </div>
                <div>
                  <EModal />
                </div>
                <div>
                  <Button className={classes.buttono}>
                    <img src={dd} className={classes.cnimg} />
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} xs={8} className={classes.mview}>
              <div className={classes.hd}>
                <div>
                  <Button className={classes.buttono}>
                    <AiOutlineSetting className={classes.buttonoo} /> &nbsp;
                    Settings
                  </Button>
                </div>
                <div>
                  <Typography
                    variant="body"
                    display="block"
                    className={classes.nt}
                  >
                    Network
                  </Typography>
                  <EModal />
                </div>
                <div>
                  <Link to="/cardtwo" className={classes.linkf}>
                    <Button className={classes.buttono}>
                      <img src={dd} className={classes.cnimg} /> &nbsp;
                      <span>Connect</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item lg={5} className={classes.tabs}>
              <TabList
                className="navtab"
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Home" value="1" id="tabone"/>
                <Tab label="My Bets" value="2" onClick={handleTab}/>
              </TabList>
            </Grid>

            <Grid item lg={4} className={classes.dview}>
              <div className={classes.hd}>
                <div>
                  <Link to="/cardtwo" className={classes.linkf}>
                    <Button className={classes.buttono}>
                      <AiOutlineSetting className={classes.buttonoo} /> &nbsp;
                      Settings
                    </Button>
                  </Link>
                </div>
                <div>
                  <Typography
                    variant="body"
                    display="block"
                    className={classes.nt}
                  >
                    Network
                  </Typography>
                  <EModal />
                </div>
                <div id="benefits">
                  
                   { value === "1" ? <Button className={classes.buttono}>
                      <img src={dd} className={classes.cnimg} /> &nbsp; Connect
                    </Button> : null
                   }                
                </div>
              </div>
            </Grid>
          </Grid>
          <Divider />
        </AppBar>

        <TabPanel value="1">
          <MainContent />
        </TabPanel>
        <TabPanel value="2">
          <MyBetTab />
        </TabPanel>
      </TabContext>
    </div>
  );
}
