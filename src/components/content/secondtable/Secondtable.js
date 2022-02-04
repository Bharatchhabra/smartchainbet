import React from "react";
import { Button, Grid, Typography, CssBaseline, Container, Card, CardContent, List, ListItem } from '@material-ui/core';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { BiArrowBack } from 'react-icons/bi'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./secondtable.scss"
import { NoEncryption } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

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
        fontSize: "24px"
    },
    table: {
        minWidth: 650,
    },
    head: {
        backgroundColor: "#110D15",
        color: "#fff",
        fontFamily: "poppins",
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
    rootcard: {
        backgroundColor: "#110D15",
        borderRadius: "0px"
    },
    cardcontent: {
        padding: 0,
    },
    tablebg: {
        backgroundColor: "#000",
    },
    tablebordr: {
        borderBottom: "none",
        color: "#fff",
        fontFamily: "poppins",
        fontSize: "18px"
    },
    tablebordrr: {
        color: "#81709B",
        fontFamily: "poppins",
        borderColor: "#1D1D1D",
        fontSize: "14px"
    },
    tablebordrN: {
        borderBottom: "none",
        ['@media (max-width:780px)']: { 
            display: "none",
          }
    },
    tablebordrNn: {
        borderColor: "#1D1D1D",
        ['@media (max-width:780px)']: { 
            display: "none",
          }
    },
    headingcontainer: {
        padding: "20px 40px",
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, ' Diamondbacks', 0, '100 Matic',),
    createData(2, 'Rockies', .0, "20 Matic",),
    createData(3, 'Rockies', 16.0, "5 Matic",),
    createData(4, 'Diamondbacks', 3.7, "1,000 Matic",),
    createData(5, 'Rockies', 16.0, "200 Matic",),
];
export default function SimpleContainer() {
    const classes = useStyles();

    let history = useHistory();
  
  const handleBack = ()=> {
    history.push("/");
  }
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.containerh}>
                <Grid
                    container
                    direction="row"
                    className={classes.headingcontainer} >

                    <Button
                        className={classes.button}
                        startIcon={<BiArrowBack />}
                        onClick={handleBack}> Back
                    </Button>
                    <Typography className={classes.heading} variant="h4" component="h2">Major League Baseball – Aug 22</Typography>

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
                                        <TableCell className={classes.tablebordr} align="center"><Typography className={classes.tableth}>7:10 pm</Typography></TableCell>
                                        <TableCell className={classes.tablebordr} align="center">
                                            <Typography variant="body" className={classes.tablethh}>Arizona</Typography>
                                            <Typography variant="h6" className={classes.tableth} style={{ fontsize: "18px" }}>Diamondbacks</Typography>
                                        </TableCell>
                                        <TableCell className={classes.tablebordr} align="center"><Typography className={classes.tableth}>VS</Typography></TableCell>
                                        <TableCell className={classes.tablebordr} align="center">
                                            <Typography className={classes.tablebordr} className={classes.tablethh} variant="body">Arizona</Typography>
                                            <Typography variant="h6" className={classes.tableth} style={{ fontsize: "18px" }}>Diamondbacks</Typography>
                                        </TableCell>
                                        <TableCell className={classes.tablebordr} align="center">
                                            <Link to="/listcontent">
                                            <Button variant="contained" color="primary">
                                                Open bet
                                            </Button>
                                            </Link>
                                           
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
                <TableContainer>
                    <Table className={classes.tablebg} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrr} >Bet ID</TableCell>
                                <TableCell className={classes.tablebordrr} align="left">Winner</TableCell>
                                <TableCell className={classes.tablebordrr} align="left"></TableCell>
                                <TableCell className={classes.tablebordrr} align="right">Amount</TableCell>
                                <TableCell className={classes.tablebordrr} align="left"></TableCell>
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell className={classes.tablebordrN} />
                                    <TableCell className={classes.tablebordrN} />
                                    <TableCell className={classes.tablebordrN} />
                                    <TableCell className={classes.tablebordrN} />
                                    <TableCell className={classes.tablebordr} style={{ color: "#81709B" }} component="th" scope="row">{row.name}</TableCell>
                                    <TableCell className={classes.tablebordr} align="left">{row.calories}</TableCell>
                                    <TableCell className={classes.tablebordr} align="left"></TableCell>
                                    <TableCell className={classes.tablebordr} style={{ color: "#A975FF" }} align="right">{row.carbs}</TableCell>
                                    <TableCell className={classes.tablebordr} align="right"><Button variant="contained" color="primary">
                                        Accept
                                    </Button></TableCell>
                                    <TableCell className={classes.tablebordrN} />
                                    <TableCell className={classes.tablebordrN} />
                                    <TableCell className={classes.tablebordrN} />
                                    <TableCell className={classes.tablebordrN} />
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </React.Fragment>
    );
}
