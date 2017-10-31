import React, {Component} from 'react'
import './App.css'
import Clock from './Clock'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      deadline: 'December 25, 2017',
      newDeadLine: ''
    }
  }

  changeDeadline = () => {
    this.setState({
      deadline: this.state.newDeadLine
    })
  }

  getnewDeadLine = (event) => {
    this.setState({
      newDeadLine: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <div className='title'>Countdown to {this.state.deadline}</div>
            <Clock deadline={this.state.deadline} />
          <div>
            <input placeholder='new date' onChange={this.getnewDeadLine}/>

            {/*or instead of getnewDeadLine function you can pass anonymos function to update state*/}
            {/*<input placeholder='new date' onChange={event => this.setState({newDeadLine: event.target.value})}/>*/}

          </div>
          <button onClick={this.changeDeadline}>Submit</button>
      </div>
      )
  }
}

export default App