import React, { useEffect, useState } from 'react';

function App() {
  const [games, setGames] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [result, setResult] = useState('');

  // Fetch existing games
  useEffect(() => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error('Error:', err));
  }, []);

  // Submit new game
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerName, result })
    });
    const newGame = await res.json();
    setGames([...games, newGame]);
    setPlayerName('');
    setResult('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blackjack Game History</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Player Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Result (win/lose)"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          required
        />
        <button type="submit">Save Game</button>
      </form>

      <ul>
        {games.map(game => (
          <li key={game._id}>
            {game.playerName} - {game.result} ({new Date(game.date).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;