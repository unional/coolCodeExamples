export enum Material {
	Natural,
	Synthetic
}

export enum Type {
	Inverted,
	Anti,
	ShortPips,
	MediumPips,
	LongPips
}

/**
 * This is a table tennis rubber.
 */
export default class Rubber {
	rubberType: Type = Type.Inverted
	private speedGlueExpiration: Date
	private pipsWidth: number;
	private pipsHeight: number;
	private rubberMaterial: Material;
	private lifeSpan: number = 100;
	public speedRating: number;
	public spinRating: number;
	public controlRating: number;
	public price: number;
	getSummary() {
		return {
			speed: this.speedRating,
			spin: this.spinRating,
			control: this.controlRating,
			price: this.price
		};
	}
	constructor(public brand: string, public name: string) {
	}
}
