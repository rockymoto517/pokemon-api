const url = "https://pokeapi.co/api/v2";

// Assumes we're using pokedex with ID 1
export async function getPokedex() {
  return fetch(`${url}/pokedex/1`).then((res) => res.json());
}

export async function getPokemon(name: string) {
  return fetch(`${url}/pokemon/${name}`).then((res) => res.json());
}
