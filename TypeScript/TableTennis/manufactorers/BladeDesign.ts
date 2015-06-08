
import BladeMaterialSpec from "Equipments/Specifications/BladeMaterialSpec"
import BladeType from "Equipments/BladeType"
import BladeHandle from "Equipments/BladeHandle"

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