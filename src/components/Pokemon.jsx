import React from 'react';

export function Pokemon({pokemon}) {

  const attacksElements = pokemon.attacks.special.slice(0, 3).map(attack => (
    <span key={`${attack.name}-${attack.damage}`}>{attack.name} / {attack.damage}</span>
  ));

  return (
    <div className="pokemon">
      <div className="pokemon__name">
        <span className="meta">{pokemon.maxHP}</span>
        <span className="name">{pokemon.name}</span>
        <span className="meta">{pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        {attacksElements}
      </div>
    </div>
  );
};