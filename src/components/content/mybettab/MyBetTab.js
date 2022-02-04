import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Tabtable from './Tabtable'
import SecondTab from './SecondTab'
import Accepted from './Accepted'
import './mybet.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: "30px",
        backgroundColor: "#000",
        height: "100vh"
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
    
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("22 aug 2021", 1, ' Diamondbacks', '100 Matic',),
    createData("22 aug 2021", 2, 'Rockies',  "20 Matic",),
    createData("22 aug 2021", 3, 'Rockies', "5 Matic",),
];
export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.secondtab} position="static" >
                <Tabs className="tabheader" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab className={classes.tabroot} label="Pending" {...a11yProps(0)} />
                    <Tab className={classes.tabroot} label="Accepted" {...a11yProps(1)} />
                    <Tab className={classes.tabroot} label="Completed" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Tabtable />
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Accepted />
            </TabPanel>
            <TabPanel value={value} index={2}>
            <SecondTab/>
            </TabPanel>
        </div>
    );
}
