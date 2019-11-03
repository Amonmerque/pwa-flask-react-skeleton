import React from 'react';
import logo from './logo.svg';
import socketIOClient from "socket.io-client";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sendPlatformMessage = this.sendPlatformMessage.bind(this);
    this.requestPlatformMessage = this.requestPlatformMessage.bind(this);
  }

  sendPlatformMessage(module) {
    alert(module)
    document.getElementById(module).reset();
    document.getElementById(module).submit()
  }

  requestPlatformMessage = (module) => {
    this.socket.emit('REQUEST_MESSAGE', module);
  }

  componentDidMount() {
    this.socket = socketIOClient('http://localhost:5000')

    this.socket.on('TO_PLATFORM', data => this.sendPlatformMessage(data));

    setTimeout(function(){
      this.sendPlatformMessage("FORM_TEL")
    }, 5000);

    setTimeout(function(){
      this.sendPlatformMessage("FORM_WHATSAPP")
    }, 15000);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* <button onClick={() => { this.requestPlatformMessage('FORM_TEL') }}>REQUEST TEL!</button>
          <button onClick={() => { this.requestPlatformMessage('FORM_WHATSAPP') }}>REQUEST WHATSAPP</button>

          <button onClick={() => { this.sendPlatformMessage('FORM_TEL') }}>GO TEL!</button>
          <button onClick={() => { this.sendPlatformMessage('FORM_WHATSAPP') }}>GO WHATSAPP</button>

          <form method="post" action="tel://0640865682" Title="TITLE"  target="new" id="FORM_TEL"></form>
          <form method="post" action="whatsapp://send?phone=0640865682" id="FORM_WHATSAPP" Title="TITLE" target="new"></form> */}

          <form method="post" action="whatsapp://send?phone=0640865682" id="T1" Title="TITLE" target="new"></form>
          <form method="post" action="whatsapp://send?phone=0640865682" id="T2" target="new"></form>
          <form method="post" action="whatsapp://send?phone=0640865682" id="T3" target="_blank"></form>
          <form method="post" action="whatsapp://send?phone=0640865682" id="T4" Title="TITLE"  target="new"></form>
          <form method="post" action="whatsapp://send?phone=0640865682" id="T5" Title="TITLE"  target="_blank"></form>
          <form method="post" action="whatsapp://send?phone=0640865682" id="T6"></form>
          <button onClick={() => { this.sendPlatformMessage('T1') }}>T1</button>
          <button onClick={() => { this.sendPlatformMessage('T2') }}>T2</button>
          <button onClick={() => { this.sendPlatformMessage('T3') }}>T3</button>
          <button onClick={() => { this.sendPlatformMessage('T4') }}>T4</button>
          <button onClick={() => { this.sendPlatformMessage('T5') }}>T5</button>
          <button onClick={() => { this.sendPlatformMessage('T6') }}>T6</button>
          <a href="whatsapp://send?phone=0640865682"  target="_blank">Le site</a>

        </header>
        {/* <script>
          function myFunction(n,t){document.getElementById(n).submit(),window.reload()}
        </script> */}
      </div>
    );
  }
  
}

export default App;
