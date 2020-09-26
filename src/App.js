import React from 'react';
import './App.css';
import Drawing from './Drawing.js'

class App extends React.Component {

  state = {
    isDrawing: false,
  }

  componentWillMount() {
    const {List} = require("immutable")

    this.setState({
      lines: new List()
    })
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.handleMouseUp)
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleMouseUp);
  }





  handleMouseUp = () => {
    this.setState({ 
      isDrawing: false 
    })
  }

  handleMouseMove = (mouseEvent) => {
    if (!this.state.isDrawing) {
      return
    }

    const point = this.relativeCoordinatesForEvent(mouseEvent)
    
    this.setState(prevState =>  ({
      lines: prevState.lines.updateIn([prevState.lines.size - 1], line => line.push(point))
    }));
  }

  handleMouseDown = (event) => {
    if (event.button != 0) {
      return
    }
  
    const point = this.relativeCoordinatesForEvent(event)
    const {List} = require("immutable");
  
    this.setState(prevState => ({
      lines: prevState.lines.push(new List([point])),
      isDrawing: true
    }));
  }




  relativeCoordinatesForEvent(mouseEvent) {
    const boundingRect = this.refs.drawArea.getBoundingClientRect()
    const {Map} = require("immutable")

    return new Map({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    })
  }
  



  render() {
    return (
      <div>
        <div className="drawArea"
          ref="drawArea"
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
        >
          <Drawing lines={this.state.lines} />
        </div>
      </div>
    )
  }
}

export default App;
