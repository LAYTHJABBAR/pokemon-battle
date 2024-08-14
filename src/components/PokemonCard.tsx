import React from 'react';
import './PokemonCard.css';

interface PokemonCardProps {
  name: string;
  sprite: string;
  moveName: string;
  movePower: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, sprite, moveName, movePower }) => {
  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name">{name}</h2>
      <img className="pokemon-sprite" src={sprite} alt={name} />
      <div className="pokemon-move">
        <span className="move-name">{moveName}</span>: <span className="move-power">{movePower}</span>
      </div>
    </div>
  );
};

export default PokemonCard;
