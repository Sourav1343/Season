import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import  "./SeasonDisplay.css";
import Spinner from "./Spinner";
// React says we have to define render
class App extends React.Component {
  /*  constructor(probs){
        super(probs)
          this.state={lat: null}
        }*/
  
  state={lat: null, errorMessage:''};  

  componentDidMount() {
    console.log(" ComponentDidMount function");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("componentDidUpdate function");
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage} </div>;
      } 
      if (!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
      }
      return <Spinner/>

  }

  render() {
    console.log("called redner");
    return <div className="border">{this.renderContent()} </div>
    
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
