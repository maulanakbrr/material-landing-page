import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito'
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    colorText: {
        color: '#5aff3d'
    },
    titleContainer: {
        textAlign: 'center',
    },
    title: {
        fontSize: '4rem',
        color: '#fff'
    },
    goDown: {
        color: '#5aff3d',
        fontSize: '3.5rem'
    }
}));

const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return(
        <div className={classes.root} id="header">
            {/* App bar for create navbar */}
            <AppBar className={classes.appbar} elevation={0}>
                {/* toolbar is flex container for appbar */}
                <Toolbar className={classes.appbarWrapper}>
                    {/* typography is for crealte text element */}
                    <h1 className={classes.appbarTitle}>
                        My
                        <span className={classes.colorText}>
                            Island.
                        </span>
                    </h1>
                    {/* create icon button  */}
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse 
                in={checked}
                {...(checked ? { timeout: 1500 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.titleContainer}>
                    <h1 className={classes.title}>
                        Welcome to <br/> My <span className={classes.colorText}>Island.</span>
                    </h1>
                    <Scroll to='homepage' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;