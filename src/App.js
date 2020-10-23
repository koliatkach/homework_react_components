import React, {Component} from 'react';
import ComponentA from "./components/ComponentA";

class App extends Component {

  state = {
      pageTitle: 'Learn React'
  }

  handleInput = (event) => {
      this.setState({
          pageTitle: event.target.value
      })
  }

  changeTitleHandler = (newTitle) => {
      this.setState({
          pageTitle: newTitle
      })
  }

  render() {

    const divStyle = {
        textAlign : 'center'
    }

    return (
        <div style = {divStyle} >
            <h1>{this.state.pageTitle}</h1>
            <input type="text" onChange={this.handleInput}/>
            <button onClick = {this.changeTitleHandler.bind(this,'Learn React')}>Default title</button>

            <ComponentA number = {Math.round(Math.random() * 1000)}/>
        </div>
    );
  }
}

export default App;
