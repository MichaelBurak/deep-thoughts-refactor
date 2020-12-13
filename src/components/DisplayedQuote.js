import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    justifyContent: "center"
  }
});

export default function DisplayedQuote() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h2" className={classes.title} gutterBottom>
            {/* Main Quote Text */}
        “Be melting snow. Wash yourself of yourself.”
        </Typography>
        <Typography variant="h5" component="h2">
            {/* Author Name */}
          - Rumi
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Copy To Clipboard</Button>
      </CardActions>
    </Card>
  );
}