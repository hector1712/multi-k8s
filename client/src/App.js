import React from 'react';
import gato from './gato.gif';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bienvenido a la calculadora</h1>
          <h2>De Fibonaci...</h2>
          <h6>Version kuebrnetes!</h6>
          <img src={gato} className="App-logo" alt="gato" />
          <Link to="/">Home</Link>
          <Link to="/otherpage">otra pagina</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
