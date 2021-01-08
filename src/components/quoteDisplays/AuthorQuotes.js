import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function AuthorQuotes() {
  const classes = useStyles();


  const [authorQuotes, setAuthorQuotes] = React.useState('')


  const handleChange = (panel) => (event, newExpanded) => {
    // setAuthorQuotes(newExpanded ? panel : false);
    axios.get('http://127.0.0.1:5000/quotes',{
      params:{
        author: "Rumi"
      }
    }).then((response)=>{
      console.log(response)
    })
  };

  //   function fetchQuote(e){
  //   e.preventDefault()

  //   axios.get("http://127.0.0.1:5000/random-quote").then((response) => {
  //   setResponseText(response.data.text)
  //   setResponseAuthor(response.data.author)
  //   setQuoteButton(false)
  //   },
  //   (error) =>{
  //        console.log(error)
  //   })
  // }


  return (
    <div className={classes.root}>
      <Accordion onChange={handleChange()}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>More Quotes By Author...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}