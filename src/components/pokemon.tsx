import type { Pokemon } from "../types/api-types";

interface props {
  pokemon: Pokemon;
  strength: number;
}

export default function PokemonCell({ pokemon, strength }: props) {
  return (
    <div
      className={`poke-cell poke-cell-${pokemon.types[0].type.name} poke-strength-${strength}`}
    >
      <img src={pokemon.sprites.front_default} />
      <span>{pokemon.name}</span>
    </div>
  );
}
