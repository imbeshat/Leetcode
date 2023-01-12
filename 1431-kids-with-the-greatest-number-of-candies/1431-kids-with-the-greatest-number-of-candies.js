/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let boolCand=[];
    let i=0;
    while(i<candies.length){
        if(candies[i]+extraCandies>=Math.max(...candies)){
            boolCand.push(true);
        }else{
            boolCand.push(false);
        }
        i++;
    }
    return boolCand;
};