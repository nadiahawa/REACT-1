import axios from "axios";
import { useState } from "react";
import '../css/Abilities.css';

let Abilities = () => {

    const [abilities, setAbilities] = useState("")

    const getAbilities = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu/').then(
            (res => {
                setAbilities(res.data.abilities)
            })
        )
    }
    console.log('Abilities Here!')

    return (

    <table className="table">
  <thead>
    <tr className="tr">
      <th className="th" scope="col">Ability Name</th>
      <th className="th" scope="col">Ability Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr className="tr">
      <th className="th" scope="row">Static</th>
      <td className="td">Whenever a move makes contact with this Pokémon,<br></br> 
        the move's user has a 30% chance of being paralyzed.</td>
    </tr>
    <tr className="tr">
      <th className="th" scope="row">Lightning-Rod</th>
      <td className="td">All other Pokémon's single-target electric-type moves <br></br>
    are redirected to this Pokémon if it is an eligible target.<br></br>
    Other Pokémon's Electric moves raise this Pokémon's Special<br></br>
     Attack one stage, negating any other effect on it, and cannot miss it.</td>
    </tr>
  </tbody>
</table>






















    // </div>
    )
}

export default Abilities;