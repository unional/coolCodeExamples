export default class Player {
	private budget = 0
	constructor(public name: string, initialBudget = 100) {
		this.budget = initialBudget;
	}
	AddBudget(amount: number) {
		this.budget += amount;
	}
	ReduceBudget(amount: number) {
		if (this.budget === 0) {
			throw new Error("I don't have $$$ already!");
		}
		
		if (amount > this.budget) {
			throw new Error("You are taking away more then I have!");
		}
		
		this.budget -= amount;
	}
	// startShopping(store: Store) {
	// 	return store.createShoppingCart(this);
	// }
}