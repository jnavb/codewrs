const laddersAndSnakes = [[2,38],[7,14],[8,31],[15,26],[16,6],[21,42],
													[28,84],[36,44],[46,25],[49,11],[51,67],
												  [62,19],[64,60],[71,91],[74,53],[78,98],
												  [87,94],[89,68],[92,88],[95,75],[99,80]];
class SnakesLadders {
	constructor() {
	  this.gameOver = false;
	  this.playersPosition = [0, 0]; 
	  this.playerTurn = 0; 
	};
	
	play (die1, die2) {
		if(this.gameOver) return 'Game over!';
	
		this.playersPosition[this.playerTurn] = this.move(die1, die2);
		const message = this.checkWin();
		this.playerTurn = this.newTurn(die1, die2);
	
		return message;
	}
		
	newTurn (die1, die2) {
		const repeatTurn = (die1 == die2);
		return (repeatTurn) ? this.playerTurn
												: (this.playerTurn) ? 0
																						: 1; 		
	}
	
	move (die1, die2) {
		const movement = die1 + die2;
    const playerPos = this.playersPosition[this.playerTurn]; 
    
		let target = movement + playerPos;
		target = (target > 100) ? target = 100 - (target%100)
													  : target; 
		const snakeOrLadder = laddersAndSnakes.findIndex(item => item[0] == target);
		return (snakeOrLadder != -1) ? laddersAndSnakes[snakeOrLadder][1]
													 : target;
	}
	
	checkWin () {
		const winner = this.playersPosition.findIndex(playerPos => playerPos == 100);
		const player = this.playerTurn;
    
		if(winner == 0 || winner == 1) {
			this.gameOver = true;
			return `Player ${winner + 1} Wins!`;
		}
		return `Player ${this.playerTurn + 1} is on square ${this.playersPosition[this.playerTurn]}`
	}
}