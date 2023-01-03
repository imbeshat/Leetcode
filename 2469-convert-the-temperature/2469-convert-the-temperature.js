/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let tempArray=[];
    let kelvin = celsius + 273.15;
    let farenheit = (celsius * 1.80) + 32.00;
    tempArray.push(kelvin);
    tempArray.push(farenheit);
    return tempArray;
};