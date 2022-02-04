import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import './mybet.scss'


var useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "30px",
        backgroundColor: "#000",
        height: "100vh",
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
        fontSize: "14px",
    },
    tabroot: {
        width: "auto",
        marginLeft: "0px"
    },
    tablebg: {
        paddingTop: "30px",
    },
    greenclr: {
        color: "green"
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
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("22 aug 2021", 1, ' Diamondbacks', '100 Matic', 'Win'),
    createData("22 aug 2021", 2, 'Rockies',  "20 Matic", 'Win'),
    createData("22 aug 2021", 3, 'Rockies', "5 Matic", 'Lose'),
];

if(rows.protein=='Lose'){
     useStyles = makeStyles((theme) => ({
        greenclr: {
            color: "green"
        }
    }));
}
export default function SimpleTabs(prop) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
           
                <TableContainer>
                    <Table className={classes.tablebg} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrNn} />
                                <TableCell className={classes.tablebordrr} >Date</TableCell>
                                <TableCell className={classes.tablebordrr} >Bet ID</TableCell>
                                <TableCell className={classes.tablebordrr} align="left">Winner</TableCell>
                                <TableCell className={classes.tablebordrr} align="right">Amount</TableCell>
                                <TableCell className={classes.tablebordrr} align="right">Result</TableCell>
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
                                    <TableCell className={classes.tablebordr} align="left">{row.fat}</TableCell>
                                    <TableCell className={classes.tablebordr} style={{ color: "#A975FF", fontSize: "18px" }} align="right">{row.carbs}</TableCell>
                                    <TableCell className={classes.tablebordr} align="right" style={{color: "#75FFAC"}}>{
                                        row.protein === "Lose" ? <span style={{color: '#FF75A7'}}>Lose
                                        </span> : "Win"
                                    }</TableCell>
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
    );
}
