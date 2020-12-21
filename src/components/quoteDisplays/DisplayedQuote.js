import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GeneratorBtn from '../buttons/GeneratorBtn'
import api from '../../api'

const useStyles = makeStyles({
  root: {
    justifyContent: "center"
  }
});


export default function DisplayedQuote() {
  const classes = useStyles();
  const fetchQuote = (e) => {
    e.preventDefault()
    api.getQuote().then((response)=>{
      debugger 
        setResponseText(response.data[0].text)
        setResponseAuthor(response.data[0].author)
        setQuoteButton(false)
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
  }

    // Create state variables
    let [responseText, setResponseText] = React.useState('')
    let [responseAuthor, setResponseAuthor] = React.useState('')
    let [quoteButton, setQuoteButton] = React.useState(true)


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h2" className={classes.title} gutterBottom>
            {/* Main Quote Text to be fetched from DB */}
        {/* “Be melting snow. Wash yourself of yourself.” */}
        {quoteButton? <Button onClick={(e) => fetchQuote(e)} type='button'>Click Me For a Quote</Button>: <div/>}
        {responseText} </Typography>- {responseAuthor? <Typography variant="h5" component="h2">{responseAuthor}</Typography>:<div/>}
        
      </CardContent>
      <CardActions className={classes.root}>
          <GeneratorBtn/>
        <Button variant="contained" >Copy To Clipboard</Button>
      </CardActions>
    </Card>
  );
}