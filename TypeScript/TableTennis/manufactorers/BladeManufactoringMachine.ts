import BladeDesign from "BladeDesign"
import Blade from "equipments/Blade"
import InventoryConsumer from "common/InventoryConsumer"
import BladeMaterial from "equipments/BladeMaterial"
/**
 * This is a simplified machine that creates blades.
 */
 export default class BladeManufactoringMachine extends InventoryConsumer {
	 createBlades(design: BladeDesign, quantity: number): boolean {
		 var materials: any;
		 var itemsToPull = design.piles.map(p => <[string, number]>[p[0], p[1] * quantity]);
		 materials = super.pullInventory(itemsToPull);
		 if (materials) {
			var blade = new Blade({
				type: design.type,
				handle: design.handle,
				name: design.name,
				width: design.width,
				tall: design.tall,
				handleWidth: design.handleWidth,
				handleTall: design.handleTall				
			});
			for (let pileSpec of design.piles) {
				let material = <BladeMaterial[]>materials[pileSpec[0]];
				
			}
		 }
		 
		 return materials !== undefined;
	 }
 }