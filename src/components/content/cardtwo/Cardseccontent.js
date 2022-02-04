import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { BsArrowLeft } from 'react-icons/bs'
import icon1 from '../../../assets/images/dd.png'
import icon2 from '../../../assets/images/icon2.png'
import './cardtwo.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: "8px 16px",
        margin: 'auto',
        maxWidth: 282,
        Width: 282,
        height: 104,
        backgroundColor: "#110D15",
        borderRadius: '0px',
    },
    papersec: {
        padding: "10px 8px",
        margin: 'auto',
        maxWidth: 282,
        Width: 282,
        height: 125,
        backgroundColor: "#110D15",
        borderRadius: '0px',
    },

    select: {
        textAlign: 'left',
        color: "#81709B",
        fontSize: '14px',
        lineHeight: '21px',
        fontFamily: "poppins",
    },
    phillies: {
        textAlign: 'left',
        color: "#FFF",
        fontFamily: "poppins",
    },
    cardss: {
        margin: "20px 0"
    },
    
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.cardss}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="row" spacing={2}>
                                <Grid item>
                                    <img style={{}} alt="complex" src={icon1} />
                                </Grid>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" className={classes.select}>
                                        Connect your Web3 wallet
                                    </Typography>
                                    <Button variant="contained" color="primary">
                                        Connect Web3
                                    </Button>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <div className={classes.cardss}>
                <Paper className={classes.papersec}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="row" spacing={2}>
                                <Grid item>
                                    <img className="alignimg" alt="complex" src={icon2} />
                                 </Grid>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" className={classes.select}>
                                        Change your Ethereum RPC Provider
                                    </Typography>
                                    <Button variant="contained" color="primary">
                                        Change RPC
                                    </Button>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            </div>
           
        </div>
    );
}
