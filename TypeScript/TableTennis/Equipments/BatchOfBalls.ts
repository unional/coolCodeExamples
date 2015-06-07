import BallSize from "BallSize"
import Ball from "Ball"

/**
 * Represents a collection of balls, typically a batch created by manufactorer.
 * This is created so player or application can get a ball from the batch because
 * it is not practical to keep instances of balls around.
 */
export default class BatchOfBalls {
	/**
	 * @param {number} ballQuality from 1-100
	 */
	constructor(public ballSize: BallSize, private ballQuality: number, public ballQuantity: number) {}
	
	private usedBalls = new Array<Ball>()
	
	getBalls(quantity: number): Ball[] {
		var result = [];
		if (this.usedBalls.length) {
			var usedBallCount = Math.min(this.usedBalls.length, quantity);
			result.concat(this.usedBalls.splice(0, usedBallCount));
			quantity -= usedBallCount
		}
		if (quantity) {
			result.concat(this.manifestBall(quantity));
		}
		
		return result;
	}
	storeBalls(balls: Ball[]) {
		this.usedBalls.concat(balls);
	}
	
	private manifestBall(quantity: number): Ball[] {
		var result = [];
		while(quantity--) {
			let ball = new Ball(this.ballSize);
			// TODO: create ball info.
			result.push(ball);
		}
		
		return result;
	}
}