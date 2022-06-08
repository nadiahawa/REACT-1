import './css/App.css';
import {Routes, Route} from 'react-router-dom'
import {Home} from './views/Home'
import About from './views/About';
import Abilities from './views/Abilities';


function App() {


return (
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/abilities' element={<Abilities />}></Route>
  </Routes>
);



}
export default App;
