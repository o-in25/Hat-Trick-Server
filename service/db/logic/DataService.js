let weights = [30, 20, 15, 15, 10, 10, 5, 5];
let weightedAverage = require('weighted-mean');
// a, b, ... g are the the items we wish to
// find the weighted average of
function buildWeightedAverage(arr) {
   if(arr.length != weights.length) {
       throw Error('Invalid number of parameters')
   } else {
       let result = [];
       for(let i = 0; i < weights.length; i++) {
           result.push([weights[i], arr[i]])
       }
       return weightedAverage(result);
   }
}

function bestPointGuard(payload) {
    // what will be returned
    let data = [];
    // each element in the payload
    for(let i = 0; i < payload.length; i++) {

    }
}