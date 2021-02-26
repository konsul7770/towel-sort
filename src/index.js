
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let outarray = [];
    if (matrix === undefined){
        return outarray;
    }else {
        for (let i = 0; i < matrix.length; i++){
            if (i % 2 === 0){
                matrix[i].sort((a,b) => a-b);
            }else {
                matrix[i].sort((a,b) => b-a);
            }
            matrix[i].forEach(item => outarray.push(item));
        }
        return outarray;
    }
}
