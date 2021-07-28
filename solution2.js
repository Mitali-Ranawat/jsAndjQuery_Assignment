let qTeams = {
    aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
};

let teamsArray = Object.entries(qTeams);

let sortedTeamSize = teamsArray.sort((a, b) => b[1] - a[1]);    //sort in descending order wrt teamsize


sortedTeamSize.forEach(element => {
    console.log(element[0]);
});