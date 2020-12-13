import './App.css';
import 'fontsource-roboto';
import QuoteAppBar from './components/QuoteAppBar';
import DisplayedQuote from './components/DisplayedQuote';

function App() {
  return (
    <div className="App">
      <QuoteAppBar/>
      <DisplayedQuote/>
    </div>
  )
}

export default App;
