const fetchData = function() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'key goes here but I\'m not pushing it to GitHub for privacy reasons',
      'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
    }
  };

  fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/receiving-stats/offense/2019', options)
    .then(response => response.json())
    .then(response => {
      // according to the API, packers is the 16th team on the list
      const packers = response._embedded.teamReceivingStatsList[16];

      document.getElementById("receives").innerHTML = packers.receives;
      document.getElementById("touchdowns").innerHTML = packers.touchdowns;
      document.getElementById("yards").innerHTML = packers.yards;
    })
    .catch(err => console.error(err));
};

fetchData();