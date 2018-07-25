let weightedMean = require('weighted-mean');
let mean = weightedMean([
   [10, 5],
    [10, 5],
    [10, 5],
    [10, 5],
    [0, 200],
    [100, 2150]
]);
console.log(mean);