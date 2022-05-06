import React, { Component} from 'react';
import './App.css'
import {ThemeContext, themes} from './theme-context'
import ThemeButton from './theme-button';


function Toolbar (props) {
    return (
        <ThemeButton onClick={props.changeBackground}>
            Change background
        </ThemeButton>
    )
}


export default class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         theme: themes.light
      }

      this.toggleTheme = () => {
          this.setState(prevState => ({
              theme: prevState.theme === themes.dark ? themes.light : themes.dark
          }))
      }
    }

    
    render() {
        return (
            <div className='App'>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeBackground={this.toggleTheme}  />
                </ThemeContext.Provider>

                <ThemeButton />
            </div>
        )
    }
}


