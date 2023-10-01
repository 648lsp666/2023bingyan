import './css/home.css'
import Homebarpages from './components/homebarspage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayPage from './components/playpage';
  
function App(props) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Homebarpages/>}></Route>
              <Route path='/play/:id' element={<PlayPage/>}></Route>
          </Routes>
        </Router>
      </div>
    );
    
  }


export default App;
