import { React, useEffect }from 'react'
import './App.css';
import StartLocation from "./components/StartLocation/StartLocation";
import {Route, Routes} from 'react-router-dom'
import Kitchen from "./components/Kitchen/Kitchen";
import {BarWidthProvider} from "./components/Context/Context";
import Games from "./components/Games/Games";
import TicTac from "./components/TicTac";
import Numbers from "./components/Numbers";
import Sleep from "./components/Sleep/Sleep";
import Walk from "./components/Walk/Walk";


const tg = window.Telegram.WebApp

function App() {

    useEffect(() =>{
        tg.ready()
    })



  return (
      <BarWidthProvider>
          <div className="App">
              <Routes>
                  <Route path="/" element={<StartLocation />} />
                  <Route path="/home" element={<StartLocation />} />
                  <Route path="/kitchen" element={<Kitchen />} />
                  <Route path="/games/*" element={<Games />} />
                  <Route path="/games/tictac" element={<TicTac />} />
                  <Route path="/games/numbers" element={<Numbers />} />
                  <Route path="/sleep" element={<Sleep />} />
                  <Route path="/walk" element={<Walk />} />

              </Routes>
          </div>
      </BarWidthProvider>
  );
}

export default App;
