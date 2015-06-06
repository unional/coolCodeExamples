import BladeMaterial from "BladeMaterial";

/**
 * Composite material for blade.
 */
export default class BladeCompositeMaterial extends BladeMaterial {
	constructor(public name: string) {
		super(name);
	}
}