import React, { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from './PokemonCard';
import { getRandomElement } from '../utils/getRandomElement';
import './BattleView.css';

/**
 * Represents the BattleView component.
 * This component displays two Pokemon cards and allows the user to start a battle between them.
 */
const BattleView: React.FC = () => {
  const pokemon1 = usePokemon();
  const pokemon2 = usePokemon();

  const [battleLog, setBattleLog] = useState<string | null>(null);

  const handleBattle = () => {
    if (pokemon1 && pokemon2) {
      const move1 = getRandomElement(pokemon1.moves);
      const move2 = getRandomElement(pokemon2.moves);

      const power1 = move1.version_group_details[0].level_learned_at || 50;
      const power2 = move2.version_group_details[0].level_learned_at || 50;

      if (power1 > power2) {
        setBattleLog(`${pokemon1.name} lands a decisive blow with ${move1.move.name}, knocking out ${pokemon2.name}!`);
      } else if (power1 < power2) {
        setBattleLog(`${pokemon2.name} lands a decisive blow with ${move2.move.name}, knocking out ${pokemon1.name}!`);
      } else {
        setBattleLog('Draw');
      }
    }
  };

  return (
    <div className="battle-container">
      <div className="pokemon-section">
        {pokemon1 && (
          <PokemonCard
            name={pokemon1.name}
            sprite={pokemon1.sprites.front_default}
            moveName={getRandomElement(pokemon1.moves).move.name}
            movePower={50} // Set or fetch real power
          />
        )}
        {pokemon2 && (
          <PokemonCard
            name={pokemon2.name}
            sprite={pokemon2.sprites.back_default}
            moveName={getRandomElement(pokemon2.moves).move.name}
            movePower={50} // Set or fetch real power
          />
        )}
      </div>
      <div className="battle-log">
        <button className="start-battle-btn" onClick={handleBattle}>Start Battle!</button>
        {battleLog && <div className="battle-log-text">{battleLog}</div>}
      </div>
    </div>
  );
};

export default BattleView;
