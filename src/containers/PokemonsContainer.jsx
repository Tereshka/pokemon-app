import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';

export function PokemonsContainer() {
  // destruct data from request, add default values to it
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
      variables: { first: 10 },
  });

  const pokemonElements = pokemons.map(pokemon =>
    <Pokemon key={`pokemon-${pokemon.id}`} pokemon={pokemon} />
  );

  return (
    <div className="container">
        {pokemons && pokemonElements}
    </div>
  );
}