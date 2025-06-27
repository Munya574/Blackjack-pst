const express = require('express');
const mongoose = require('mongoose');
const Game = require('./models/Game');
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blackjack', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err));

// ✅ This POST route must come AFTER app.use
app.post('/api/games', async (req, res) => {
  try {
    const game = new Game(req.body);
    const saved = await game.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save game', details: err.message });
  }
});

// (Optional) GET route to verify data
app.get('/api/games', async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});