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