import BladeDesign from "BladeDesign"
import Inventory from "common/Inventory"
import Logger from "common/Logger"
/**
 * This is a simplified machine that creates blades.
 */
 export default class BladeManufactoringMachine {
	 logger: Logger
	 inventory: Inventory
	 createBlades(design: BladeDesign, quantity: number): boolean {
		 var success =this.pullInventory(design, quantity); 
		 if (success) {
			 // create blades and put into inventory.
		 }
		 
		 return success;
	 }
	 
	 private hasEnoughInventory(design: BladeDesign, quantity: number) {
		 var result = true;
		 for (let pileSpec of design.piles) {
			 let total = this.inventory.getTotal(pileSpec[0].name);
			 let needed = pileSpec[1] * quantity;
			 if (total < needed) {
				 result = false;
				this.logger.log(`Inventory does not have enough ${pileSpec[0].name}. Has ${total}, asking: ${needed}`); 
			 }
		 }
		 
		 return result;
	 }
	 
	 private pullInventory(design: BladeDesign, quantity: number): boolean {
		 var result = this.hasEnoughInventory(design, quantity);
		 if (result)  {
			 for (let pileSpec of design.piles) {
				let needed = pileSpec[1] * quantity;
				this.inventory.pull(pileSpec[0].name, needed);
			 }		 			 
		 }
		 return result;
	 }
 }