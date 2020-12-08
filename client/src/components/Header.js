import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Avatar,
    Grid,
    Box,
} from "@material-ui/core";
import Typed from 'react-typed';
import coolpic from '../coolpic.jpg';

//CSS Styles
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box>
            <Avatar className={classes.avatar} src={coolpic} alt="pic of me"/>
            <Typography className={classes.title} variant="h4">
                <Typed strings={['Joe Schlick']} 
                typeSpeed={40} 
                />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={['Web Design', 'Web Development', 'MERN Stack']} 
                typeSpeed={40} 
                backSpeed={60}
                loop
                />
            </Typography>
        </Box>
    )
}

export default Header
