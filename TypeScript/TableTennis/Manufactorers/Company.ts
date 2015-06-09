import Inventory from "common/Inventory"
import Market from "common/Market"
// Try alias.
import BallMM from "BallManufactoringMachine"
import BankAccount from "common/BankAccount"
import BatchOfBalls from "equipments/BatchOfBalls"

export default class Company {
	public bankAccount: BankAccount
	inventory: Inventory
	market: Market
	//region Assets
	public ballManufactoringMachines = new Array<BallMM>();
	//endregion

	//region Inventories
	public balls = new Array<BatchOfBalls>();
	//endregion	
	
	constructor(model: any = {}) {
		this.bankAccount = model.bankAccount;
		this.inventory = model.inventory || new Inventory();
		this.market = model.market // no default value. Application must set this up.
	}
	
	buy(name: string, quantity: number) {
		var cost = this.market.lookup(name) * quantity;
		var bitCoin = this.bankAccount.withdraw(cost);
		this.market.buy(name, quantity, bitCoin);
		if (bitCoin.amount) {
			this.bankAccount.deposit(bitCoin);
		}
	}
}
