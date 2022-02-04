import React from "react";
import { makeStyles, Button} from "@material-ui/core";
import {Link} from 'react-router-dom'
import img1 from "../../../assets/images/NBA.png";
import img2 from "../../../assets/images/NCAA.png";
import img3 from "../../../assets/images/NCAAF.png";
import img4 from "../../../assets/images/NFL.png";
import img5 from "../../../assets/images/Soccer.png";
import img6 from "../../../assets/images/mlb.png";
import img7 from "../../../assets/images/NHL.png";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import "./firstcard.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "40px 80px",
    ['@media (max-width:780px)']: { 
      padding: "0px",
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative",
    backgroundColor: "transparent",
  },
  card: {
    height: "213px",
    width: "332px",
    backgroundColor: "#110D15",
    margin: "auto",
    color: "#fff",
    ["@media (max-width:476px)"]: {
      height: "133px",
      width: "153px",
    },
  },
  cardcontnt: {
    lineHeight: "5",
    marginTop: "30px",
  },
  cardbtn: {
    color: "#fff",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid item xs={6} lg={4}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className={classes.cardcontnt}>
                  <img src={img4} />
                  <Typography>NFL</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className={classes.cardcontnt}>
                  <img src={img1} />
                  <Typography>NBA</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className={classes.cardcontnt}>
                <img src={img6} />
                <Link to="/secondtable" className={classes.link}>
                  <Typography>MLB</Typography>
                </Link>
                </CardContent>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={6} lg={4}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className={classes.cardcontnt}>
                  <img src={img5} />
                  <Typography>Soccer</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className={classes.cardcontnt}>
                  <img src={img2} />
                  <Typography>NCAA Football</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className={classes.cardcontnt}>
                  <img src={img3} />
                  <Typography>NCAA Basketball</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={6} lg={4}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardContent className={classes.cardcontnt}>
                  <img src={img7} />
                  <Typography>NHL</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
