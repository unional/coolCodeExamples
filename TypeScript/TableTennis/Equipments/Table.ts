export enum Type {
	WithWheels
}

export enum Quality {
	Recreational,
	Professional
}

export enum LegMaterial {
	Steel
}

export enum SurfaceMaterial {
	HighDensityFiberboard,
	MediumDensityFiberboard,
	NaturalWood
}

export enum Color {
	Blue,
	White
}
/**
 * Table tennis table.
 */
export default class Table {
	height = specification.height
	width = specification.width
	length = specification.length
	netHeight = specification.netHeight
	netOverhang = specification.netOverhang
	isClosed = false
	type: Type = Type.WithWheels
	quality: Quality = Quality.Professional
	x: number
	y: number
	private legMaterial: LegMaterial = LegMaterial.Steel
	private surfaceMaterial: SurfaceMaterial = SurfaceMaterial.HighDensityFiberboard
	constructor(public brand: string, public color: Color) {	
	}
	
	close() {
		this.isClosed = true;
	}
	
	open() {
		this.isClosed = false;
	}
	
	move(x: number, y: number) {
		if (!this.isClosed && (this.x - x)*(this.y - y) > 1) {
			throw new Error("Cannot move too much while it is opened");
		}
		else {
			this.x = x;
			this.y = y;
		}
	}
	
	adjustHeight(h: number) {
		if (h < 0 || Math.abs(this.height - h) > 15) {
			throw new Error("Height adjustment is limited");	
		}
	}
	
	
}

/**
 * Specification for table tennis table.
 */
export var specification: any = {
	height: 76,
	width: 152.5,
	length: 274,
	netHeight: 15.25,
	netOverhang: 15.25
};
