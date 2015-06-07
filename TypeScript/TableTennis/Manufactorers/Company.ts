// Try alias.
import BallMM from "BallManufactoringMachine"

export default class Company {
	public capital: number
	
	//region Assets
	public ballManufactoringMachines = new Array<BallMM>();
	//endregion

	//region Inventories
	public balls = new Array<BatchOfBalls>();
	//endregion	
	
	purchaseBallManufactoringMachine() {
		
	}
}