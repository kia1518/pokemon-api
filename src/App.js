import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Axios from 'axios';
function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "", 
    species: "", 
    img: "", 
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });

  const searchPokemon = () => {Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response) =>{
      setPokemon({
        name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default, 
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name
      });
      setPokemonChosen(true);
    });
  };

  return (
    <div className="App">
      <div className="App-header row">
        {/* <img src="./logo.svg"/> */}
        <h3> POKEMON </h3>
        <input type="text" onChange={(event) => {setPokemonName(event.target.value)}}/>
        <button onClick={searchPokemon}> Search Pokemon </button>
      </div>
      <h3>Choose from</h3>
      <div className='pokemonChoices'>
        <div>
          <ul>
            <li>bulbasaur</li>
            <li>ivysaur</li>
            <li>venusaur</li>
            <li>charmander</li>
            <li>charmeleon</li>
            <li>charizard</li>
            <li>squirtle</li>
            <li>wartortle</li>
            <li>blastoise</li>
            <li>caterpie</li>
            <li>metapod</li>
            <li>butterfree</li>
            <li>weedle</li>
            <li>kakuna</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>beedrill</li>
            <li>pidgey</li>
            <li>pidgeotto</li>
            <li>pidgeot</li>
            <li>rattata</li>
            <li>raticate</li>
            <li>spearow</li>
            <li>fearow</li>
            <li>ekans</li>
            <li>arbok</li>
            <li>pikachu</li>
            <li>raichu</li>
            <li>sandshrew</li>
            <li>sandslash</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>nidoran-f</li>
            <li>nidorina</li>
            <li>nidoqueen</li>
            <li>nidoran-m</li>
            <li>nidorino</li>
            <li>nidoking</li>
            <li>clefairy</li>
            <li>clefable</li>
            <li>vulpix</li>
            <li>ninetales</li>
            <li>jigglypuff</li>
            <li>wigglytuff</li>
            <li>zubat</li>
            <li>golbat</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>oddish</li>
            <li>gloom</li>
            <li>vileplume</li>
            <li>paras</li>
            <li>parasect</li>
            <li>venonat</li>
            <li>venomoth</li>
            <li>diglett</li>
            <li>dugtrio</li>
            <li>meowth</li>
            <li>persian</li>
            <li>psyduck</li>
            <li>golduck</li>
            <li>mankey</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>primeape</li>
            <li>growlithe</li>
            <li>arcanine</li>
            <li>poliwag</li>
            <li>poliwhirl</li>
            <li>poliwrath</li>
            <li>abra</li>
            <li>kadabra</li>
            <li>alakazam</li>
            <li>machop</li>
            <li>machoke</li>
            <li>machamp</li>
            <li>bellsprout</li>
            <li>weepinbell</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>victreebel</li>
            <li>tentacool</li>
            <li>tentacruel</li>
            <li>geodude</li>
            <li>graveler</li>
            <li>golem</li>
            <li>ponyta</li>
            <li>rapidash</li>
            <li>slowpoke</li>
            <li>slowbro</li>
            <li>magnemite</li>
            <li>magneton</li>
            <li>farfetchd</li>
            <li>doduo</li>
            <li>dodrio</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>tentacruel</li>
            <li>geodude</li>
            <li>graveler</li>
            <li>muk</li>
            <li>shellder</li>
            <li>cloyster</li>
            <li>gastly</li>
            <li>haunter</li>
            <li>gengar</li>
            <li>onix</li>
            <li>drowzee</li>
            <li>hypno</li>
            <li>krabby</li>
            <li>kingler</li>
            <li>voltorb</li>
          </ul>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="display">
        {!pokemonChosen?(<h3>Please choose a Pokemon</h3>):(
        <>
        <div className='col-4'>
          <h3>{pokemon.name}</h3>
          <h4>Species: {pokemon.species}</h4>
          <h4>Type: {pokemon.type}</h4>
          <h5>HP: {pokemon.hp}</h5>
          <h5>Attack: {pokemon.attack}</h5>
          <h5>Defense: {pokemon.defense}</h5>
        </div>
        <div className='col-8'>
          <img src={pokemon.img} />
        </div>
        </>
        )}
      </div>
    </div>
  );
}

export default App;
