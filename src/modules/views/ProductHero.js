import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import saumerios from '../images/saumerios.jpg';


  

const styles = theme => ({
  background: {
    backgroundImage: `url(${saumerios})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'cover',
    
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

const backgroundImage =<img src={saumerios} alt='saumerios'/>

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        MAS DE DIEZ AÑOS JUNTO A VOS 
     </Typography> <br/>
    
     <Typography variant="body2" color="inherit" className={classes.more}>
       Descubrenos
      </Typography> <br/>
      
        <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        PRODUCTOS
      </Button>
     
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
