export interface PokedexEntry {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}
