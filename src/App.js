import * as React from "react";
import Header from './components/Header';
import Game from './components/Game';
import Play from './components/Play';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route} from "react-router-dom";

function App() {
  const [MyChoice , setMyChoice] = React.useState('');
  const [Score , setScore] = React.useState(0);
  return (
      <div className="App">
        <div className='container'>
          <Header score = {Score}/>
          <Routes>
            <Route exact path="/" element={<Play setMyChoice ={setMyChoice}/>} />
            <Route path="/game" element={<Game MyChoice={MyChoice} score = {Score} setscore = {setScore}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
