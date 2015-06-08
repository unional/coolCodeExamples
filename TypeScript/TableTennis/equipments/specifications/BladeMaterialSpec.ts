/**
 * Spec of blade material
 */
export default class BladeMaterialSpec {
	stiffness: [number, number]
	hardness: [number, number]
	constructor(public name: string) {
	}
}