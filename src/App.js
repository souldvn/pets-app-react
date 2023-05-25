import { React, useEffect }from 'react'
import './App.css';
import StartLocation from "./components/StartLocation/StartLocation";
import {Route, Routes} from 'react-router-dom'
import Kitchen from "./components/Kitchen/Kitchen";

const tg = window.Telegram.WebApp

function App() {

    useEffect(() =>{
        tg.ready()
    })



  return (
    <div className="App">

        <Routes>
            <Route index element = {<StartLocation/>}/>
            <Route path={'/kitchen'} element = {<Kitchen/>}/>

        </Routes>

      {/*<TicTac/>*/}
    </div>
  );
}

export default App;
