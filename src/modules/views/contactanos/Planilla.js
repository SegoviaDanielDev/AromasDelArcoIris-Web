//dependencias 
import React from 'react';
// import PropTypes from 'prop-types';

//material ui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typografy from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root:{
        display: 'flex',
        psoition: 'relative',
    },
    
    Container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',

    },

    Grid: {

    },

    Typografy: {

    },

    ingreso: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1),
    },


});

function planillaContacto(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
        <Container className={classes.Container}>
          <Grid container spacing={5}>
             <Grid item xs={12} md={4}>
                <div className={classes.Typografy}>
                    <Typografy variant='h6' className={classes.ingreso}>
                        Nombre
                    </Typografy>
                    <input />
                    <Typografy variant='h6' className={classes.ingreso}>
                        Apellido 
                    </Typografy>
                    <input />
                </div>

             </Grid>
          </Grid>
         </Container>
        </div>
    );
}


export default withStyles(styles)(planillaContacto);