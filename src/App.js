import "./App.css";
import { createContext, useEffect, useReducer } from "react";
import characterReducer from "./Reducer/Reducer";
import Header from "./Components/Header";
import CharacterButtons from "./Components/CharacterButtons";
import Character from "./Components/Character";
import { API_URL } from "./API/constants";

//To manage state
export const CharContext = createContext();

function App() {
  //using useReducer we can access context 
  const [characters, appDispatch] = useReducer(characterReducer, []);
  useEffect(() => {
    const fetchCharacters = async() => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        //if character data available run initialize action
        if (data.body) {
          appDispatch({ type: "LOAD", payload: data.body });
        }
      } catch (error) {
        console.error("Unable to fetch the character data due to following error: ", error);
      }
    }
    fetchCharacters();
  }, []);

  // Store the character data on the server
  useEffect(() => {
      if (characters.length) {
        const saveCharacters = async() => {
        try {
          const res = await fetch(
            API_URL,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(characters)
            }
          );
          const data = await res.json()
          console.log("Character data saved:", data);
        } catch (error) {
          console.error("Failed to save character data:", error);
        }
        
      }
      saveCharacters();
    }
    }, [characters]);
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
