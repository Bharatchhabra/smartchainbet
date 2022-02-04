import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Button, Typography } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import first from "../../assets/images/first.png";
import sfirst from "../../assets/images/sfirst.png";
import sec from "../../assets/images/sec.png";
import third from "../../assets/images/third.png";
import fourth from "../../assets/images/fourth.png";
import fifth from "../../assets/images/fifth.png";
import sixth from "../../assets/images/sixth.png";
import { FaEthereum } from "react-icons/fa";
import Modallist from "./Modallist";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#1C1622",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "32px",
    backgroundColor: "#110D15",
  },
  mm: {
    display: "flex",
  },
  btn: {
    color: "#fff",
    padding: "0px",
    marginLeft: "auto",
    fontSize: "18px",
  },
  buttono: {
    color: "#FFF",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "poppins",
    textAlign: "left",
  },
  buttonoo: {
    color: "#A975FF",
    fontSize: "16px",
    textAlign: "left",
  },
  ethbutton: {
    ["@media (min-width:476px)"]: {
      display: "none",
    },
  },
  eethbutton: {
    ['@media (max-width:476px)']: { 
      display: "none",
    },
   
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.ethbutton}>
        <Button onClick={handleOpen} className={classes.buttono}>
          <FaEthereum className={classes.buttonoo} />
        </Button>
      </div>
      <div className={classes.eethbutton}>
      <Button onClick={handleOpen} className={classes.buttono}>
        <FaEthereum className={classes.buttonoo} /> Ethereum
      </Button>
      </div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.mm}>
              <h2 id="simple-modal-title">Change network</h2>
              <Button autoFocus onClick={handleClose} className={classes.btn}>
                X
              </Button>
            </div>

            <Modallist img={first} text="Ethereum Mainnet" />
            <Modallist img={sec} text="Binance Smart Chain" />
            <Modallist img={fourth} text="xDAI Chain" />
            <Modallist img={fifth} text="Polygon (Matic) Network" />
            <Modallist img={sixth} text="Ethereum Goerli" />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
