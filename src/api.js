import axios from 'axios'

export default {
   
    postQuote: (text, author) => {
    axios.post('http://0.0.0.0:80/submission', {
      params:{
    text: text,
    author: author
      },
      withCredentials: true,
      crossorigin: true
  })
  .then((response) => {
    // debugger 
    console.log(response);
  }, (error) => {
    console.log(error);
  });
}
}