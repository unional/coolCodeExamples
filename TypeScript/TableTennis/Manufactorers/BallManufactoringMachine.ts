import BatchOfBalls from "Equipments/BatchOfBalls"

export default class BallManufactoringMachine {
	errorMargin: number
	createBatch(ballSize: BallSize, quantity: number): BatchOfBalls {
		var actualMargin = Math.random() * this.errorMargin;
		var ballQuality = 100 * (1 - actualMargin);
		return new BatchOfBalls(ballSize, ballQuality, quantity);
	}
	
	static getModels() {
		return [
			{
				name: "Second Hand Machine",
				cost: 5000,
				errorMargin: 0.5		
			},
			{
				name: "Entry Model",
				cost: 10000,
				errorMargin: 0.3		
			},
			{
				name: "Intermediate Model",
				cost: 20000,
				errorMargin: 0.2		
			},
			{
				name: "Advance Model",
				cost: 50000,
				errorMargin: 0.1		
			},
			{
				name: "Precision Model",
				cost: 100000,
				errorMargin: 0.05		
			}
		];
	}
}