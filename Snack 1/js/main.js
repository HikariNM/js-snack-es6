const bikes = [
    {model: 'e-bike', weight: 22.5},
    {model: 'MTB', weight: 12},
    {model: 'city', weight: 16},
    {model: 'da corsa', weight: 7.8},
]

let lowestBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    if ( bikes[i].weight < lowestBike.weight ) {
        lowestBike = bikes[i];
        console.log(lowestBike)
    }

    
}

console.log(`La bici più leggera è quella da ${lowestBike.model} e pesa ${lowestBike.weight}kg`);