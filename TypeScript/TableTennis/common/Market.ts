import {BitCoin} from "BankAccount"
/**
 * Market of any item.
 */
export default class Market {
	private records: {[name: string]: number}[]
	private cert: string = "marketCert"
	lookup(name: string): number {
		return this.records[name];
	}
	
	buy(name: string, quantity: number, bitCoin: BitCoin) {
		var price = this.records[name];
		var total = price * quantity;
		bitCoin.draw(total, this.cert);
		this.records[name] = price * (1 + quantity/1000);
	}
	
	sell(name: string, quantity: number) {
		var price = this.records[name];
		this.records[name] = price * (1 - quantity/1000);		
	}
	
	/**
	 * Set price of an item.
	 * @param {string} name Name of the item.
	 * @param {number} [price] Optional. Price of the item. If not specified, will remove the item from market.
	 */
	set(name: string, price?: number) {
		// Demo optional parameter.
		if (price) {
			this.records[name] = price;			
		}
		else {
			delete this.records[name];
		}
	}
}