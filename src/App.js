import { React, useEffect }from 'react'
import './App.css';
import StartLocation from "./components/StartLocation/StartLocation";
import Interface from "./components/Interface/Interface";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() =>{
        tg.ready()
    })



  return (
    <div className="App">
        <StartLocation/>
        <Interface/>
      {/*<TicTac/>*/}
    </div>
  );
}

export default App;
