import './App.css';
import 'fontsource-roboto';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import QuoteAppBar from './components/QuoteAppBar';
import DisplayedQuote from './components/DisplayedQuote';
import SubmissionFormContainer from './components/SubmissionFormContainer'
import SecondaryButton from './components/SecondaryButton';
import smoke from './components/smoke.jpg'

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

  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: `url(${smoke})`,
        },
      },
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      
      <QuoteAppBar/>
      <DisplayedQuote/>
      <SubmissionFormContainer/>
      <SecondaryButton/>
      
    </div>
    </ThemeProvider>
  )
}

export default App;