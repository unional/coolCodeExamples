/**
 * A simple and flexible inventory system.
 */
export default class Inventory {
	store: { [key: string]: any} = {}
	
	public getTotal(name: string): number {
		return this.store[name];
	}
	/**
	 * Pull items from inventory.
	 */
	public pull(name: string, quantity: number): number | any {
		var item = this.store[name];
		if (typeof item === "number") {
			return this.store[name] = item - quantity;
		}
		else {
			let items = <[]>item;
			let result = items.splice(0, quantity);
			this.store[name] = items
			return result;
		}
	}
	
	/**
	 * Stock item to inventory.
	 */
	public stock(name: string, items: number | any[]) {
		if (typeof items === "number") {
			// Just assume the item is pure number count.
			this.store[name] += items;
		}
		else {
			this.store[name] = (this.store[name] || []).concat(items);
		}
	}
}