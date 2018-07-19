function Connect4 (){
  this.table = [[], [], [], [], [], [], []];
  this.turn = 0;
  this.isEnded = false;
  console.log('NEW GAME');
};
Connect4.prototype.play = function (col){
  console.log(col);
  if (this.isEnded) 
    return 'Game has finished!';
  if (this.table[col].length > 5)
    return 'Column full!';
  //Player0, Player1
  let player = this.turn++ % 2; 
  this.table[col].push(player ? 1:0);
  if(!this.isWin(player)){
    return `Player ${player+1} has a turn`; ;
  }else{
    this.isEnded = true;
    return `Player ${player+1} wins!`;
  }                            
}; 
Connect4.prototype.isWin = function(player){
  let isWin = false;
  this.table[3].map((cell, rowNumber) => {
     if(!isWin && cell == player){
      if(this.table[4][rowNumber] == player 
          && this.table[5][rowNumber] == player 
          && this.table[6][rowNumber] == player
          ||(
          this.table[2][rowNumber] == player 
          && this.table[4][rowNumber] == player 
          && this.table[5][rowNumber] == player))
        isWin = true;
      if(this.table[2][rowNumber] == player 
          && this.table[1][rowNumber] == player 
          && this.table[0][rowNumber] == player)
        isWin = true;
      if(rowNumber < 3 
          && this.table[4][rowNumber+1] == player 
          && this.table[5][rowNumber+2] == player 
          && this.table[6][rowNumber+3] == player)
        isWin = true;
      if(rowNumber < 3 
          && this.table[2][rowNumber+1] == player 
          && this.table[1][rowNumber+2] == player 
          && this.table[0][rowNumber+3] == player)
        isWin = true;
      if(rowNumber > 2 
          && this.table[4][rowNumber-1] == player 
          && this.table[5][rowNumber-2] == player 
          && this.table[6][rowNumber-3] == player
          ||(
          this.table[2][rowNumber-1] == player 
          && this.table[4][rowNumber+1] == player 
          && this.table[5][rowNumber+2] == player))
        isWin = true;
      if(rowNumber > 2 
          && this.table[2][rowNumber-1] == player 
          && this.table[1][rowNumber-2] == player 
          && this.table[0][rowNumber-3] == player)
        isWin = true;
     }
  });
  if(isWin) return isWin;
  this.table.map((column, columnNumber, array) => {
      if(!isWin){
        column.map((cell, rowNumber) => {
            if (cell == player && !isWin){ 
              //Vertical win
              if(column[cell+1] == player 
                && column[cell+2] == player 
                && column[cell+3] == player)
                win = true;
            }
        })
      }
  });
  return isWin;
};
  