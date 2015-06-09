import Inventory from "Inventory"
import * as Logs from "Logs"

/**
 * Consumer of inventory.
 * Purposely keep the items as [string, number][] to demo anonymous types.
 */
export default class InventoryConsumer {
	inventory: Inventory
	logger: Logs.Logger
	
	constructor(options: any = {}) {
		this.inventory = options.inventory || new Inventory();
		this.logger = options.logger || new Logs.ConsoleLogger();
	}
	
	/**
	* Determine whether if the inventory has enough items to fullfil a pull.
	* This is keep private to demo public-protect-private modifiers.
	*/
	private hasEnoughInventory(items: [string, number][]) {
		var result = true;
		for (let item of items) {
			let name = item[0];
			let needed = item[1];
			let total = this.inventory.getTotal(name);
			if (total < needed) {
				result = false;
				this.logger.warn(`Inventory does not have enough '${name}'. Has ${total}, asking: ${needed}`); 
			}
		}
		
		return result;
	}
	 
	 /**
	  * Pull items form inventory.
	  */
	protected pullInventory(items: [string, number][]): {[name: string]: any}[] {
		var result: {[name: string]: any}[];
		var hasEnough = this.hasEnoughInventory(items);
		if (hasEnough)  {
			for (let item of items) {
				let name = item[0];
				let needed = item[1];
			 	result[name] = this.inventory.pull(name, needed);
			}		 			 
		}
		return result;
	}
}