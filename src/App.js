import React, { Component } from 'react';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button1clicked: false,
      button2clicked: false,
      button3clicked: false,
      button4clicked: false,
    }
  };


  handleClick1(){
    if (this.state.button1clicked === true) {
      this.setState({button1clicked: false})
    } else {
      this.setState({button1clicked: true})
    }
    console.log(this.state.button1clicked)
  };

  handleClick2(){
    if (this.state.button2clicked === true) {
      this.setState({button2clicked: false})
    } else {
      this.setState({button2clicked: true})
    }
    console.log(this.state.button2clicked)
  };

  handleClick3(){
    if (this.state.button3clicked === true) {
      this.setState({button3clicked: false})
    } else {
      this.setState({button3clicked: true})
    }
    console.log(this.state.button3clicked)
  };

  handleClick4(){
    if (this.state.button4clicked === true) {
      this.setState({button4clicked: false})
    } else {
      this.setState({button4clicked: true})
    }
    console.log(this.state.button4clicked)
  };


  render() {
    let changeClass1 = ""
    let changeClass2 = ""
    let changeClass3 = ""
    let changeClass4 = ""
    if (this.state.button1clicked === true) {
      changeClass1 = "selected"
      changeClass2 = ""
      changeClass3 = ""
      changeClass4 = ""
    } else if (this.state.button2clicked === true)  {
      changeClass1 = ""
      changeClass2 = "selected"
      changeClass3 = ""
      changeClass4 = ""
    } else if (this.state.button3clicked === true)  {
      changeClass1 = ""
      changeClass2 = ""
      changeClass3 = "selected"
      changeClass4 = ""
    } else {
      changeClass1 = ""
      changeClass2 = ""
      changeClass3 = ""
      changeClass4 = "selected"
    }
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <div className="CircleSelector">
              <button onClick={() => this.handleClick1()}> Select Circle 1</button>
              <button onClick={() => this.handleClick2()}> Select Circle 2</button>
              <button onClick={() => this.handleClick3()}> Select Circle 3</button>
              <button onClick={() => this.handleClick4()}> Select Circle 4</button>
          </div>
          <div className="Circles">
            <div className={changeClass1}>1</div>
            <div className={changeClass2}>2</div>
            <div className={changeClass3}>3</div>
            <div className={changeClass4}>4</div>
          </div>
        </main>
      </div>
    );
  }
}
