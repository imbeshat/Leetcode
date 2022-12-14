/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top=0;
    let bottom = matrix.length-1;
    let right = matrix[0].length-1;
    let left=0;
    let dir=0;
    let i;
    
    const spiral = [];
    
    while(top<=bottom && left<=right){
        if(dir===0){
            for(i=left;i<=right;i++){
                spiral.push(matrix[top][i]);
            }
            top++;
        }
        else if(dir===1){
            for(i=top;i<=bottom;i++){
                spiral.push(matrix[i][right]);
            }
            right--;
        }else if(dir===2){
            for(i=right;i>=left;i--){
                spiral.push(matrix[bottom][i]);
            }
            bottom--;
        }else if(dir===3){
            for(i=bottom;i>=top;i--){
                spiral.push(matrix[i][left]);
            }
            left++;
        }
        dir = (dir+1) % 4;
    }
    return spiral;
};