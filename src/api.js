import axios from 'axios'

export default {
    getQuote: ()=>{
        debugger 
       return axios.get("http://localhost:4000/quotes")
    },
    postQuote: (text, author) => {
    axios.post('http://localhost:4000/quotes', {
    quoteText: text,
    quoteAuthor: author
  })
  .then((response) => {
    debugger 
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}
}
