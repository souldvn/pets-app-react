import { React, useEffect }from 'react'
import './App.css';
import StartLocation from "./components/StartLocation/StartLocation";
import Interface from "./components/Interface/Interface";
import PanelMenu from "./components/PanelMenu/Start/PanelMenu";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() =>{
        tg.ready()
    })



  return (
    <div className="App">
        <StartLocation/>
        <Interface/>
        <PanelMenu/>


      {/*<TicTac/>*/}
    </div>
  );
}

export default App;
