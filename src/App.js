import './css/home.css'
import Homebarpages from './components/homebarspage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayPage from './components/playpage';
import Dailypage from './components/dailytargetpage';
import Battlepage from './components/battles';
import Leaderboards from './components/leaderboards';
import Login from './components/login';
import Singlebattle from './components/singlebattle';

function App(props) {
    return (
      <div >
        <Router>
          <Routes>
            <Route path='/' element={<Homebarpages/>}></Route>
            <Route path='/play/:id' element={<PlayPage/>}></Route>
            <Route path='/battleplay/:id' element={<PlayPage/>}></Route>
            <Route path='/battle/:id' element={<Singlebattle/>}></Route>
            <Route path='/daily' element={<Dailypage/>}></Route>
            <Route path='/battles' element={<Battlepage/>}></Route>
            <Route path='/leaderborads' element={<Leaderboards/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </Router>
      </div>
    );
    
  }


export default App;
