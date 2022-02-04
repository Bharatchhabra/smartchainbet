import React from "react";
import {
  Button,
  Grid,
  Typography,
  CssBaseline,
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BiArrowBack } from "react-icons/bi";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Cardcontent from "./Cardcontent";
import { useHistory } from "react-router-dom";
import "./cardone.scss";

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
  headingcon: {
    margin: "auto",
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
  tablebordrN: {
    borderBottom: "none",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  tablebordrNn: {
    borderColor: "#1D1D1D",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
}));

export default function Cardone() {
  const classes = useStyles();
  let history = useHistory();

  const handleBack = () => {
    history.push("/listcontent");
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.containerh}>
        <Grid container direction="row" className={classes.headingcontainer}>
          <Grid item>
            <Button
              className={classes.button}
              startIcon={<BiArrowBack />}
              onClick={handleBack}
            >
              {" "}
              Back
            </Button>
          </Grid>
          <Grid item className={classes.headingcon}>
            <Typography className={classes.heading} variant="h4" component="h2">
              Major League Baseball – Aug 22
            </Typography>
          </Grid>
        </Grid>

        <Card className={classes.rootcard}>
          <CardContent className={classes.cardcontent}>
            <div className={classes.demo}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tablebordrN} />
                    <TableCell className={classes.tablebordrN} />
                    <TableCell className={classes.tablebordrN} />
                    <TableCell className={classes.tablebordrN} />
                    <TableCell className={classes.tablebordr} align="center">
                      <Typography className={classes.tableth}>
                        7:10 pm
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tablebordr} align="center">
                      <Typography variant="body" className={classes.tablethh}>
                        Arizona
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.tableth}
                        style={{ fontsize: "18px" }}
                      >
                        Diamondbacks
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tablebordr} align="center">
                      <Typography className={classes.tableth}>VS</Typography>
                    </TableCell>
                    <TableCell className={classes.tablebordr} align="center">
                      <Typography
                        className={classes.tablebordr}
                        className={classes.tablethh}
                        variant="body"
                      >
                        Arizona
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.tableth}
                        style={{ fontsize: "18px" }}
                      >
                        Diamondbacks
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tablebordr} align="center">
                      <Button variant="contained" color="primary">
                        Open bet
                      </Button>
                    </TableCell>
                    <TableCell className={classes.tablebordrN} />
                    <TableCell className={classes.tablebordrN} />
                    <TableCell className={classes.tablebordrN} />
                    <TableCell className={classes.tablebordrN} />
                  </TableRow>
                </TableHead>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Cardcontent />
      </div>
    </React.Fragment>
  );
}
