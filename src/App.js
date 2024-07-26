import "./App.css";
import { createContext, useEffect, useReducer } from "react";
import characterReducer from "./Reducer/Reducer";
import Header from "./Components/Header";

//To manage state
export const CharContext = createContext();

function App() {
  //using useReducer we can access context 
  const [characters, appDispatch] = useReducer(characterReducer, []);
    
  return (
    <CharContext.Provider value={appDispatch}>
      <div className="App">
        <Header />
       
      </div>
    </CharContext.Provider>
  );
}

export default App;
