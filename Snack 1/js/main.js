const bikes = [
    {model: 'e-bike', weight: 22.5},
    {model: 'da corsa', weight: 7.8},
    {model: 'MTB', weight: 12},
    {model: 'city', weight: 16},
]

let currentWeight = bikes[0].weight;
let lowestBike = '';

for (let i = 0; i < bikes.length; i++) {
    if ( bikes[i].weight < currentWeight ) {
        currentWeight = bikes[i].weight;
        lowestBike = bikes[i];
        console.log(lowestBike)
    }

    
}