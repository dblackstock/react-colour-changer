import React from 'react';
import logo from './logo.svg';
import Button from './Button.js';
import getColorName from './ColorApi.js';
import './App.css';
// import { render } from '@testing-library/react';

// function App(){
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      textColor: "red",
      textColorName: "Red",
      buttonText: "this is from the state of the class",
      loading: true
    }
    this.changeButtonColor = this.changeButtonColor.bind(this)
  }

  componentDidMount(){
    this.setState({
      loading:false
    })
  }

  async changeButtonColor(){
    this.setState({
      loading:true
    })
    let textColorString = `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`
    let color = await getColorName(textColorString)
    let colorJson = await color.json();
    this.setState({
      textColor: textColorString,
      textColorName: colorJson.name.value,
      loading:false
    })
  }

  render(){

  return (
    <div className="App">
      <header className="App-header">
  <div>This colour is {this.state.textColorName}</div>
        <div id="colorsImage">Colours</div>
        <p>
          Click on the News Stories to discover new colours
        </p>
        <div id="flexParent">
        <Button buttonText="News Story 1" buttonColor={this.state.textColor} onClick={this.changeButtonColor}/>
        <Button buttonText="News Story 2" buttonColor={this.state.textColor} onClick={this.changeButtonColor}/>
        </div>
        <div id={this.state.loading ? "loadingDiv" : "notDisplayed"}>
        <progress></progress>
        </div>
      </header>
    </div>
  );
  }
};

export default App;
