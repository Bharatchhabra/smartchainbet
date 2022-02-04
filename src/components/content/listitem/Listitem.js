import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from 'react-router-dom'
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./listitem.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 952,
    margin: "auto",
  },
  demo: {
    backgroundColor: "#110D15",
    width: 828,
    height: 92,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  timetext: {
    textAlign: "left",
    color: "#A975FF",
    fontSize: "18px",
    // width: 80,
    fontFamily: "poppins",
  },
  bodytext: {
    textAlign: "center",
    color: "#81709B",
    fontSize: "14px",
    fontFamily: "poppins",
  },
  texth: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: "18px",
    fontFamily: "poppins",
  },
  textbdy: {
    textAlign: "center",
    color: "#81709B",
    fontSize: "14px",
    fontFamily: "poppins",
  },
  texthh: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: "18px",
    fontFamily: "poppins",
  },
  vs: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "40px",
    color: "#A975FF",
    opacity: "0.1",
    fontFamily: "poppins",
  },
  hh: {
    width: 100,
  },
  btn: {
    textAlign: "right",
  },
}));

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList(prop) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText className={classes.time}>
                    <Typography variant="h6" className={classes.timetext}>
                      {prop.time}
                    </Typography>
                  </ListItemText>
                  <ListItemText className={classes.hh}>
                    <Typography variant="h6" className={classes.bodytext}>
                      {prop.bodytext}
                    </Typography>
                    <Typography variant="h6" className={classes.texth}>
                      {prop.texth}
                    </Typography>
                  </ListItemText>
                  <ListItemText>
                    <Typography variant="h5" className={classes.vs}>
                      VS
                    </Typography>
                  </ListItemText>
                  <ListItemText className={classes.hh}>
                    <Typography variant="h6" className={classes.textbdy}>
                      {prop.textbdy}
                    </Typography>
                    <Typography variant="h6" className={classes.texthh}>
                      {prop.texthh}
                    </Typography>
                  </ListItemText>

                  <ListItemText className={classes.btn}>
                    <Link to="/cardone">
                    <Button variant="contained" color="primary">
                      BETS
                    </Button>
                    </Link>
                  </ListItemText>
                </ListItem>
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
