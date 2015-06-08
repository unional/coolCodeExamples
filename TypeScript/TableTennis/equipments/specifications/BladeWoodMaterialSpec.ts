import BladeMaterialSpec from "BladeMaterialSpec";

export default class BladeWoodMaterialSpec extends BladeMaterialSpec {
	constructor(
		public name: string,
		public janka: [number, number],
		public specificGravity: [number, number],
		public poundPerCubic: [number, number]
		)
	{
		super(name);
	}
}
