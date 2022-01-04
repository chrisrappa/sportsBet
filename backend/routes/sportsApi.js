// import express from 'express';
// import axios from 'axios';

// const router = express.Router();

// // Upcoming Games Route
// router.get('/:versionNum/:sportType/:leagueNum/:seasonYear/:reqType', async (req, res) => {
//   const sportType = req.params.sportType;
//   const leagueNum = req.params.leagueNum;
//   const seasonYear = req.params.seasonYear;
//   const versionNum = req.params.versionNum;
//   const reqType = req.params.reqType;
//   const apiKey = '3f0e7a4b1daa7be241ac12e59e43f8a5';

//   res.set('Access-Control-Allow-Origin', '*');

//   const data = await axios.get(endpoint, { 
//     headers: {
//       'x-rapidapi-key': apiKey,
//       'x-rapidapi-host': `v${versionNum}.${sportType}.api-sports.io`
//     }
//   });
  
//   const games = data.data;
//   res.send(games);
// })


// export default router;