const soccerTeams = [
    {team: 'milan', puntiFatti: 0, falliSubiti: 0},
    {team: 'inter', puntiFatti: 0, falliSubiti: 0},
    {team: 'spezia', puntiFatti: 0, falliSubiti: 0},
    {team: 'lazio', puntiFatti: 0, falliSubiti: 0},
]

for (let i = 0; i < soccerTeams.length; i++) {
    soccerTeams[i].puntiFatti = randomNumber(0, 20);
    soccerTeams[i].falliSubiti = randomNumber(1, 10);
}
console.log(soccerTeams)

const teamsName =[];

for (let i = 0; i < soccerTeams.length; i++) {
    const name = soccerTeams[i].team
    teamsName.push(name)
}
console.log(teamsName)

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
} 