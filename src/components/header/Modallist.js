import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  list: {
    margin: "4px 0 0 0",
    padding: "0",
    width: 282,
    height: 52,
    backgroundColor: "#1C1622",
    
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
   
  },
  title: {
   fontSize: "16px",
   color: "#fff",
   fontFamily: 'Poppins',
  },
  img: {
      width: 40
  }
}));

function generate(element) {
  return [0,].map((value) =>
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
     
          <div className={classes.demo}>
            <List dense={dense} className={classes.list}>
              {generate(
                <ListItem>
                  <div className={classes.img}><img src={prop.img} /></div>
                  <ListItemText>
                    <Typography variant="h6" className={classes.title}>
                      {prop.text}
                    </Typography>
                  </ListItemText>
                </ListItem>
              )}
            </List>
          </div>
       
    </div>
  );
}
