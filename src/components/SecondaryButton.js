import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, rgba(14,8,103,0.5970763305322129) 0%, rgba(118,199,245,1) 35%, rgba(113,136,140,1) 100%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgb(238,174,202)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    
  },
});

export default function SecondaryButton() {
  const classes = useStyles();
  return <Button className={classes.root}>Styled Button</Button>;
}