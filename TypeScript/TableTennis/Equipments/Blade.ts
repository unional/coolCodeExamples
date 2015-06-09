import BladeMaterials from 'BladeMaterials'
import BladeType from "BladeType"
import BladeHandle from "BladeHandle"
import BladeMaterial from "BladeMaterial"

export default class Blade {
	type: BladeType
	handle: BladeHandle
	thickness: number
	weight: number
	width: number
	tall: number
	stiffness: number
	hardness: number
	piles: [BladeMaterial, number][]
	constructor(options: any) {
		// Would be great when Object.assign is available.
		
	}
	get control(): number {
		// TODO: calculate the control of the blade
		return 0;
	}
	
	get speed(): number {
		return 0;
	}
}