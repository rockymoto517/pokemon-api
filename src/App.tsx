import { useEffect, useState } from "react";
import { getPokedex, getPokemon } from "./api/pokeapi";
import PokemonCell from "./components/pokemon";
import type { PokedexEntry, Pokemon } from "./types/api-types";

function App() {
  const [displayPokemon, setDisplayPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    let ignore = false;

    getPokedex().then((pokedex) => {
      Promise.all(
        pokedex.pokemon_entries.slice(0, 20).map((entry: PokedexEntry) => {
          return getPokemon(entry.pokemon_species.name);
        })
      ).then((pokemon: Pokemon[]) => {
        setDisplayPokemon(
          pokemon.filter((poke: Pokemon) => {
            const type = poke.types[0].type.name;
            return type === "grass" || type === "fire" || type === "water";
          })
        );
      });
    });
    return () => {
      ignore = true;
    };
  }, []);

  const typeCount: Record<string, number> = {
    grass: 0,
    fire: 0,
    water: 0,
  };

  return (
    <div className="poke-grid">
      {displayPokemon.map((entry: Pokemon) => {
        const type = entry.types[0].type.name;
        return (
          <PokemonCell
            key={entry.id}
            pokemon={entry}
            strength={typeCount[type]++}
          />
        );
      })}
    </div>
  );
}

export default App;
