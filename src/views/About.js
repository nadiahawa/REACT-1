import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../css/About.css';


let About = () => {

    const navigate = useNavigate();

    const goToAbilities=()=>{
        navigate('/abilities');
      }

    const [poke, setPoke] = useState("")

    const getPoke = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then(
            (res) => {
                console.log(res);
                setPoke(res.data.name)
            }
        )
    }


    return (
        <div className="buttons">
            <button className="buttony" onClick={getPoke}>Get Pikachu!</button>
            <h1>{poke}</h1>
            <br></br>
            <button className="buttony2" onClick={goToAbilities}>See Pikachu's Abilities!</button>
            </div>
    )
}

export default About;