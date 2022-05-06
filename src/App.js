import React, {createContext, Component} from 'react';
import './App.css'


const ThemeContext = createContext('white');

function App() {
    return (
        <div className="App">
           <ThemeContext.Provider value='dark'>

               <Toolbar />

           </ThemeContext.Provider>
        </div>
    );
}

function Toolbar() {
    return (
        <div>
            <h1>Toolbar</h1>
            <ButtonTheme/>
        </div>
    )
}

class ButtonTheme extends Component {
    static contextType = ThemeContext
    
    render() {
        return (
            <div>
                <h1>ButtonTheme</h1>
                <h3>Hello world  {this.context}</h3>
            </div>
        )
    }
}


export default App;
