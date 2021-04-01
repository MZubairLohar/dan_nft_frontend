import React from 'react';
import {makeStyles} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import './Menu.css';
const styles = makeStyles({
    root: {
        padding: 30,
        height: 600,
        marginLeft:650,
        marginRight:650,
        marginTop:100,
        borderRadius: 20,
        backgroundImage: 'radial-gradient(circle,  #10334b , #212133 )',
        display: 'flex',
        textAlign: 'center',
    },
    main: {
        display:'grid',
        gridRow:'10px',
    }
})

const Menu = () => {
    const classes = styles();
    return (
        
            <Card className={classes.root}>
                <div className= {classes.main}>
                    <h3>First</h3>
                    <h3>second</h3>
                </div>
            </Card>
        )
}

export default Menu
