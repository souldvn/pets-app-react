import { React, useEffect }from 'react'
import './App.css';
import TicTac from "./components/TicTac";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() =>{
        tg.ready()
    })



  return (
    <div className="App">
      <TicTac/>
    </div>
  );
}

export default App;
