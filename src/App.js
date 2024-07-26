import "./App.css";
import { createContext, useEffect, useReducer } from "react";
import characterReducer from "./Reducer/Reducer";
import Header from "./Components/Header";
import CharacterButtons from "./Components/CharacterButtons";

//To manage state
export const CharContext = createContext();

function App() {
  //using useReducer we can access context 
  const [characters, appDispatch] = useReducer(characterReducer, []);
    
  return (
    <CharContext.Provider value={appDispatch}>
      <div className="App">
        <Header />
        <section className="App-section">
        <CharacterButtons  />
        </section>
      </div>
    </CharContext.Provider>
  );
}

export default App;
