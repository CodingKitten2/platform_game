const Api = (() => {
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const GAMEID = 'Ydrq34GZfJXn16CLPVYi';

  const saveScore = async (playerName, playerScore) => {
    const scoreData = {
      user: playerName,
      score: playerScore,
    };
    try {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ydrq34GZfJXn16CLPVYi/scores',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(scoreData),
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getScores = async () => {
    try {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ydrq34GZfJXn16CLPVYi/scores',
        {
          method: 'GET',
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    saveScore,
    getScores,
  };
})();

export default Api;