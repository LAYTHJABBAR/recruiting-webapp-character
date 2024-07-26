import "./App.css";
import { createContext, useEffect, useReducer } from "react";
import characterReducer from "./Reducer/Reducer";
import Header from "./Components/Header";
import CharacterButtons from "./Components/CharacterButtons";
import Character from "./Components/Character";

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
        {characters.map((character, index) => (
            
            <Character key={index} index={index} character={character} skills={character.skills} attributes={character.attributes}/>
          ))}
        </section>
      </div>
    </CharContext.Provider>
  );
}

export default App;
