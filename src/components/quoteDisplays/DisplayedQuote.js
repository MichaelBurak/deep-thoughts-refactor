import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import GeneratorBtn from '../buttons/GeneratorBtn'
// import api from '../../api'
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    justifyContent: "center"
  }
});


export default function DisplayedQuote() {
  const classes = useStyles();

  // Create state variables
  let [responseText, setResponseText] = React.useState('')
  let [responseAuthor, setResponseAuthor] = React.useState('')
  let [quoteButton, setQuoteButton] = React.useState(true)

  
  function fetchQuote(e){
    e.preventDefault()

    axios.get("http://127.0.0.1:5000/random-quote").then((response) => {
    setResponseText(response.data.text)
    setResponseAuthor(response.data.author)
    setQuoteButton(false)
    },
    (error) =>{
         console.log(error)
    })
  }

  
    
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h2" className={classes.title} gutterBottom>
            {/* Main Quote Text to be fetched from DB */}
            {/* Button displays until quote is fetched, then is not in DOM */}
        {quoteButton? <Button onClick={(e) => fetchQuote(e)} type='button'>
          Click Me For a Quote</Button>
          : <div/>}
        {responseText} 
        </Typography>- 
        {responseAuthor? 
        <Typography variant="h5" component="h2">
          {responseAuthor}
          </Typography>
          :<div/>}  
      </CardContent>

      <CardActions className={classes.root}>
          {/* TBD: Prettier more functional generator button */}
          {/* <GeneratorBtn/> */}

          {/* TBD: Copying to clipboard function(in old code) */}
        {/* <Button variant="contained" >Copy To Clipboard</Button> */}
      </CardActions>
    </Card>
  );
}