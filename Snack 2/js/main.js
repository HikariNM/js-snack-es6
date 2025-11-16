const soccerTeams = [
    {team: 'milan', scoredGoals: 0, receivedFouls: 0},
    {team: 'inter', scoredGoals: 0, receivedFouls: 0},
    {team: 'spezia', scoredGoals: 0, receivedFouls: 0},
    {team: 'lazio', scoredGoals: 0, receivedFouls: 0},
]

const teamsName =[];
const teamsNamesFouls =[];

for (let i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i].scoredGoals = randomNumber(0, 20);
    soccerTeams[i].receivedFouls = randomNumber(1, 5);
}
console.log(soccerTeams)


for (let i = 0; i < soccerTeams.length; i++) {
    const name = soccerTeams[i].team
    teamsName.push(name)
}
console.log(teamsName)


for (let i = 0; i < soccerTeams.length; i++) {
    const name = soccerTeams[i].team
    const receivedFouls = soccerTeams[i].receivedFouls
    teamsNamesFouls.push({team: name, receivedFouls: receivedFouls})
}
console.log(teamsNamesFouls)


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 