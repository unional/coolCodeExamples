import Player from "Player";

export enum ScoreType {
	ElevenPoints = 11,
	TwentyOnePoints = 21,
	SixPoints = 6
}

export default class Game {
	player1Score = 0
	player2Score = 0
	server: Player
	coinTossed = false
	startTime = new Date()
//	output: Writer;
	constructor(public player1: Player, public player2: Player, public scoreType: ScoreType = ScoreType.ElevenPoints) {
	}
	
	/**
	 * Toss coin to see who serve first.
	 */
	tossCoin(): Player {
		if (this.coinTossed) {
			throw new Error("Coin already tossed. Can't revert the verdict!");
		}
		
		var result = this.server = (Math.random() > 0.5)? this.player1: this.player2;
		this.coinTossed = true;
		return result;
	}
	
	recordFinalScore(player1Score: number, player2Score: number) {
		this.player1Score = player1Score;
		this.player2Score = player2Score;
	}
	
	simulateGame() {}
	simulatePoint() {
		
	}
}