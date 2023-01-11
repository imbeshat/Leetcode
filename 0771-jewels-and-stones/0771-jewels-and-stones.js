/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewel = jewels.split("");
    let stone = stones.split("");
    let count=0;
    for(let i=0;i<jewel.length;i++){
        for(j=0;j<stone.length;j++){
            if(jewel[i]==stone[j]){
                count++;
            }
        }
    }
    return count;
};