import React, { Component } from 'react'
import '../styles/App.sass'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> Syllables App </h1>
  </header>
)

const Main = (props) => (
  <div className='game'>

    

  </div>
)

const Side = () => (
  <div className='score'>

      

  </div>
)



class  SyllablesApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Side />
        <Main />
       

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    < SyllablesApp />

  </div>
)

export default App

