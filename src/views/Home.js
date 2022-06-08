import logo from '../images/pokemon.png'
import '../css/Home.css';
import { About } from './About'
import { useNavigate } from 'react-router-dom';


export const Home = () => {
  const navigate = useNavigate();
  const toAboutPage=()=>{
    navigate('/about');
  }
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Add pokemon stuff here
            </p>
            <button onClick={()=>{toAboutPage()}}>Lets go get Pikachu</button>
          </header>
        </div>
      );
}