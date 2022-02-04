import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { BsArrowLeft } from 'react-icons/bs'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: "8px 16px",
        margin: 'auto',
        maxWidth: 282,
        Width: 282,
        height: 107,
        backgroundColor: "#110D15",
        borderRadius: '0px',
    },
    papersec: {
        padding: "10px 8px",
        margin: 'auto',
        maxWidth: 282,
        Width: 282,
        height: 76,
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
   }
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.cardss}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.select}>
                                    Select winner
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <div style={{ display: 'flex', color: "#A975FF" }}>
                                        <Typography variant="h6">
                                            Diamondbacks
                                        </Typography>

                                        <Typography variant="body2" style={{ cursor: 'pointer', marginLeft: 'auto', fontSize: '28px' }}>
                                            <BsArrowLeft />
                                        </Typography>
                                    </div>

                                </Typography>
                                <Typography variant="body2" color="textSecondary" className={classes.phillies}>
                                    Phillies
                                </Typography>
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
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" className={classes.select}>
                                    Amount
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <div style={{ display: 'flex', color: "#A975FF" }}>
                                        <Typography variant="h6">
                                            100
                                        </Typography>

                                        <Typography variant="body2" style={{ marginLeft: 'auto', fontSize: '18px', color: '#413D44',fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', }}>
                                            Matic
                                        </Typography>
                                    </div>

                                </Typography>

                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
            </div>
            <Button variant="contained" color="primary">
            Confirm Bet
            </Button>
        </div>
    );
}
