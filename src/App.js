import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(function(){
    document.getElementById("FORM_WHATSAPP").submit()
    // window.location='/test';
    }, 5000);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="/test" >TEST WHATSAPP</a>
          <form action="/test" id="FORM_WHATSAPP">
          </form>
        </header>
      </div>
    );
  }
  
}

export default App;
