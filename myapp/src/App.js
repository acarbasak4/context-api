import React from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes.dark);

const ThemedButton = () => {
  return( 
  <ThemeContext.Consumer>
  {
    value => (
      <button>Themed Button {value.background} </button>
    )
  } 
  </ThemeContext.Consumer>
  );
};

const Toolbar = () => <ThemedButton />;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
