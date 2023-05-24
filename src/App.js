import { React, useEffect }from 'react'
import './App.css';
import StartLocation from "./components/StartLocation/StartLocation";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() =>{
        tg.ready()
    })



  return (
    <div className="App">
        <StartLocation/>
      {/*<TicTac/>*/}
    </div>
  );
}

export default App;
