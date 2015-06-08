
import BladeMaterialSpec from "equipments/specifications/BladeMaterialSpec"
import BladeType from "equipments/BladeType"
import BladeHandle from "equipments/BladeHandle"

/**
 * Design of a blade
 */
 export default class BladeDesign {
	 name: string
	 piles: Array<[BladeMaterialSpec, number]>
	 type: BladeType
	 handle: BladeHandle
	 width: number
	 tall: number
	 handleWidth: number
	 handleTall: number
 }