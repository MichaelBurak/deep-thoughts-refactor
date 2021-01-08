import './App.css';
import 'fontsource-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import QuoteAppBar from './components/presentational/QuoteAppBar';
import DisplayedQuote from './components/quoteDisplays/DisplayedQuote';
import SubmissionFormContainer from './components/forms/SubmissionFormContainer'
// import AuthorQuotes from './components/quoteDisplays/AuthorQuotes';
import SimpleSubmission from './components/forms/SimpleSubmission';

const theme = createMuiTheme({
  palette: {
    primary: {
      // A blue grey theme
      main: '#afbdc4',
      light: '#e1eff7',
      dark: '#808d94',
    },
    secondary:{
      main:'#00bcd4'
    }
  },
  
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <QuoteAppBar/>
      <DisplayedQuote/>
      {/* <SubmissionFormContainer/> */}
      <SimpleSubmission/>
      {/* <AuthorQuotes/> */}
      </ThemeProvider>
    </div>
  )
}

export default App;