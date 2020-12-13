import './App.css';
import 'fontsource-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import QuoteAppBar from './components/QuoteAppBar';
import DisplayedQuote from './components/DisplayedQuote';
import SubmissionFormContainer from './components/SubmissionFormContainer'

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
      <SubmissionFormContainer/>
      </ThemeProvider>
    </div>
  )
}

export default App;