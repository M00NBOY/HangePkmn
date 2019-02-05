import * as React from 'react'
import './App.css'
import data from './data.json'

interface IGameStatus {
  checkedLetter: string[],
  playing: boolean,
  pokemon: string
}

class App extends React.Component<any, IGameStatus> {
  constructor (props: any) {
    super(props)
    this.state = {
      checkedLetter: [],
      playing: false,
      pokemon: ""
    }
  }

  /**
   * getName
   */
  public getName () {
    const randNumber = Math.floor(Math.random()*data.length)
    return data[randNumber]
  }

  /**
   * setName
   */
  public setName = () => {
    this.setState({
      pokemon: this.getName()
    })
  }

  /**
   * startGame
   */
  public startGame = () => {
    this.setName()
    this.setState({
      playing: true
    })
  }

  /**
   * handleKeyPress
   *
   * @param e event  :any
   */

  public handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      global.console.log('do validate');
      this.displayLetter()
    }
  }

  /**
   * displayLetter
   */
  public displayLetter = () => {
    const letterArray = this.state.pokemon.split('')
    const displayed = letterArray.map(el => {
      return this.state.checkedLetter.includes(el) ? el : "_"
    })
    global.console.log(displayed)

  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my hangedman</h1>
        </header>
        { !this.state.playing &&
          (<button onClick={ this.startGame }>Start!</button>)
        }
        { this.state.playing &&
          (<div>
            <p>Game started</p>
            <input onKeyPress={this.handleKeyPress} type="text"/>
          </div>)
        }
      </div>
    )
  }
}

export default App;