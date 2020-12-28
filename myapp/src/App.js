import React from "react";


const themes = {
light:{
  foreground: '#000000',
  background: '#eeeeee',
},
dark: {
  foreground: '#ffffff',
  background: '#222222',
},
}

const ThemeContext = React.createContext(themes.dark);

const ThemedButton = () =>{
  return(
    <button>Themed Button</button>
  );
}

const Toolbar = () => (
  <ThemedButton/>
);

class App extends React.Component {
  render() {
    return( 
    <div className="App">
    <Toolbar/>
    </div>
    );
  }
}

export default App;
