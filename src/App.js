import { React, useEffect }from 'react'
import './App.css';
import StartLocation from "./components/StartLocation/StartLocation";
import {Route, Routes} from 'react-router-dom'
import Kitchen from "./components/Kitchen/Kitchen";
import {BarWidthProvider} from "./components/Context/Context";
import Games from "./components/Games/Games";
import TicTac from "./components/TicTac";


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
                  <Route path="/games/tictac" element={<TicTac />} /> {/* Add this route */}

              </Routes>
          </div>
      </BarWidthProvider>
  );
}

export default App;
