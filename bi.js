var mat;

function matrix(a, b) {
    mat = Array.from(Array(a), () => new Array(b));
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < b; j++) {
            mat[i][j] = i ^ j;
        }
    }
    console.log(mat);
    var rowSum = mat.map(r => r.reduce((a, b) => a + b));
    console.log(rowSum);
    var sum = rowSum.reduce((a, b) => a + b, 0);
    console.log(sum);
}

var mat;

function matrix2(a, b) {
    mat = Array.from(Array(a), () => new Array(b));
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < b; j++) {
            mat[i][j] = i ^ j;
            var str = "" + mat[i][j];
            mat[i][j] = (+str).toString(2);
        }
    }
    console.log(mat);
    var rowSum = mat.map(r => r.reduce((a, b) => a + b));
    console.log(rowSum);
    var sum = rowSum.reduce((a, b) => a + b, 0);
    console.log(sum);
}

//tMinus ((Col*col-1)/2) - ((t*t-1)/2)
//Sum*  ((H+L)/2)*total_number


//tMinus ((Col*col-1)/2) - ((t*t-1)/2)
// function tMinus (col,row,t){
//     return ((col*col-1)/2) - ((t*t-1)/2);
// }

// function xor(col, row) {
//     return ((col - 1) * col * row) / 2;
// }

// function sum(endPow, iniPow, times) {
//     return (((endPow - iniPow + 1) * (iniPow + endPow)) / 2) * times;
// }

// function build(col, row) {
//     if (col < row)[col, row] = [row, col];

//     var maxColPow = Math.pow(2, parseInt(Math.log2(col)));
//     var maxRowPow = Math.pow(2, parseInt(Math.log2(row)));
//     console.log(maxColPow, maxRowPow);  

//     if(col == maxColPow) return xor(col,row);
    
//     if (maxColPow == maxRowPow) {
//         return " " + xor(maxColPow, maxRowPow) + " " //XOR SUM
//             + " " +
//             sum(maxColPow + maxRowPow - 1, maxColPow, (col - maxColPow) + (row - maxRowPow)) //Rigth and bottom leftover
//             + " " +
//             sum(col - maxColPow - 1, 0, row - maxRowPow); //Diamond leftover
//     }

//     return xor(maxColPow, maxRowPow) + //XOR SUM
//     sum(maxColPow + maxRowPow - 1, maxColPow, col - maxColPow) //Rigth leftover
//     +
//     sum(maxColPow - 1, 0, row - maxRowPow) //Bottom leftwover
//     +
//     sum(maxColPow + row - 1, maxColPow + maxRowPow, col - maxColPow); //Diamond leftover
// }

function tMinus (col,row,t){
    return ((col*col-1)/2) - ((t*t-1)/2);
}

function xor(col, row) {
    return ((col - 1) * col * row) / 2;
}

function sum(endPow, iniPow, times) {
    return (((endPow - iniPow + 1) * (iniPow + endPow)) / 2) * times;
}

// function build(col, row, l) {
//     if (col < row)[col, row] = [row, col];

//     var maxColPow = Math.pow(2, parseInt(Math.log2(col)));
//     var maxRowPow = Math.pow(2, parseInt(Math.log2(row)));
//     console.log(maxColPow, maxRowPow);  

//     if(col == maxColPow) return sum(col - 1 - l, 1, row);
//         //return xor(col,row) Old one
        
//     if (maxColPow == maxRowPow) {
//         return " " + xor(maxColPow, maxRowPow) + " " //XOR SUM
//             + " " +
//             sum(maxColPow + maxRowPow - 1, maxColPow, (col - maxColPow) + (row - maxRowPow)) //Rigth and bottom leftover
//             + " " +
//             sum(col - maxColPow - 1, 0, row - maxRowPow); //Diamond leftover
//     }

//     return xor(maxColPow, maxRowPow) + //XOR SUM
//     sum(maxColPow + maxRowPow - 1, maxColPow, col - maxColPow) //Rigth leftover
//     +
//     sum(maxColPow - 1, 0, row - maxRowPow) //Bottom leftover
//     +
//     sum(maxColPow + row - 1, maxColPow + maxRowPow, col - maxColPow); //Diamond leftover
// }


function sum(endPow, iniPow, times) {
    return (((endPow - iniPow + 1) * (iniPow + endPow)) / 2) * times;
}

function build(col, row, l) {
    if (col < row)[col, row] = [row, col];

    var maxColPow = Math.pow(2, parseInt(Math.log2(col)));
    var maxRowPow = Math.pow(2, parseInt(Math.log2(row)));  

    if(col == maxColPow){
    return sum(col - 1 - l, 1, row);
    }

    if (maxColPow == maxRowPow) {
        return sum(maxColPow - 1 - l, 1, maxRowPow) 
            +
            sum(maxColPow + maxRowPow - 1 - l, maxColPow, (col - maxColPow) + (row - maxRowPow)) //Rigth and bottom leftover
            +  
            build(col - maxColPow, row - maxRowPow, l); //Diamond leftover
    }

    return sum(maxColPow - 1 - l, 1, maxRowPow) //XOR SUM
    + 
    sum(maxColPow + maxRowPow - 1 - l, maxColPow, col - maxColPow) //Rigth leftover
    + 
    sum(maxColPow - 1 - l, 0, row - maxRowPow) //Bottom leftover
    + 
    sum(maxColPow + row - 1 - l, maxColPow + maxRowPow, col - maxColPow); //Diamond leftover
}

function elderAge(m,n,l,t){
    var res = build(m,n,l) % t;
    return res > 0 ? res:0; 
}