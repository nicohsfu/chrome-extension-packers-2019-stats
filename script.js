const fetchData = function() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'key goes here but I\m not pushing it to GitHub for privacy reasons',
      'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
    }
  };

  fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/receiving-stats/offense/2019', options)
    .then(response => response.json())
    .then(response => {
      console.log("response : ", response);
    })
    .catch(err => console.error(err));
};

fetchData();