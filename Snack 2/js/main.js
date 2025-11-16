const soccerTeams = [
    {squad: 'milan', scoredGoals: 0, receivedFouls: 0},
    {squad: 'inter', scoredGoals: 0, receivedFouls: 0},
    {squad: 'spezia', scoredGoals: 0, receivedFouls: 0},
    {squad: 'lazio', scoredGoals: 0, receivedFouls: 0},
]

const teamsName =[];
const teamsNamesFouls =[];


for (let i = 0; i < soccerTeams.length; i++) {
    const team = soccerTeams[i];
    soccerTeams[i].scoredGoals = randomNumber(0, 20);
    soccerTeams[i].receivedFouls = randomNumber(1, 5);
    teamsName.push(team.squad);
    teamsNamesFouls.push({team: team.squad, receivedFouls: team.receivedFouls})
}
console.log(soccerTeams)
console.log(teamsName)
console.log(teamsNamesFouls)

/*************************************************************************************** */

// genero goal e falli ricevuti

for (let i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i].scoredGoals = randomNumber(0, 20);
    soccerTeams[i].receivedFouls = randomNumber(1, 5);
}
console.log(soccerTeams)

//pusho i nomi delle squadre in un array

for (let i = 0; i < soccerTeams.length; i++) {
    const name = soccerTeams[i].squad
    teamsName.push(name)
}
console.log(teamsName)

// pusho un oggetto con i nomi delle squadre e i falli ircevuti in un array

for (let i = 0; i < soccerTeams.length; i++) {
    const name = soccerTeams[i].squad
    const receivedFouls = soccerTeams[i].receivedFouls
    teamsNamesFouls.push({team: name, receivedFouls: receivedFouls})
}
console.log(teamsNamesFouls)

/*************************************************************************************** */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 