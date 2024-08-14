import React from 'react';
import BattleView from './components/BattleView';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="title">Pokémon Battle Simulator</h1>
      <BattleView />
    </div>
  );
}

export default App;
