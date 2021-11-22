import express from 'express';
import axios from 'axios';

const router = express.Router();

// Upcoming Games Route
router.get('/:sportType/:leagueNum/:seasonYear', async (req, res) => {
  const sportType = req.params.sportType;
  const leagueNum = req.params.leagueNum;
  const seasonYear = req.params.seasonYear;
  const apiKey = '3f0e7a4b1daa7be241ac12e59e43f8a5';
  const endpoint = `https://v1.${sportType}.api-sports.io/games?league=${leagueNum}&season=${seasonYear}`;

  res.set('Access-Control-Allow-Origin', '*');

  const data = await axios.get(endpoint, { 
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': `v1.${sportType}.api-sports.io`
    }
  });
  
  const games = data.data;
  res.send(games);
})

export default router;