
export class BladeMaterial {
	constructor(public name: string) {
	}
}

export class CompositMaterial extends BladeMaterial {
	constructor(public name: string) {
		super(name);
	}
}

export class Wood extends BladeMaterial {
	stiffness: number
	hardness: number
	constructor(
		public name: string,
		public janka: number | [number, number],
		public specificGravity: number | [number, number],
		public poundPerCubic: number| [number, number]
		)
	{
		super(name);
	}

	/**
	 * Create a specific instane of this type of material. 
	 */
	createInstance() {
		var result = new Wood(
			this.name,
			typeof this.janka !== "number"? getRandom(<[number, number]>this.janka): this.janka,
			typeof this.specificGravity !== "number"? getRandom(<[number, number]>this.specificGravity): this.specificGravity,
			typeof this.poundPerCubic !== "number"? getRandom(<[number, number]>this.poundPerCubic): this.poundPerCubic
		);
		
		result.hardness = <number>result.janka / 10;
		result.stiffness = <number>result.specificGravity * 100;
		
		return result;
		
		function getRandom(tuple: [number, number]) {
			return tuple[0] + Math.random()*(tuple[1] - tuple[0]);
		}
	}	
	private calculateHardness() {
		
	}
	
}

export var Materials = {
	Carbon: new CompositMaterial("Carbon"),
	Zylon: new CompositMaterial("Zylon"),
	Kevlar: new CompositMaterial("Kevlar"),
	Aralyte: new CompositMaterial("Aralyte"),
	Fiberglass: new CompositMaterial("Fiberglass"),
	register: function(material: BladeMaterial) {
		Materials[material.name] = material;
	},
	unregister: function(material: BladeMaterial) {
		delete Materials[material.name];
	}
};

Materials.register(new Wood("Anigre", 740, .40, [30, 34]));
Materials.register(new Wood("Ash", 1320, .66, 42));
Materials.register(new Wood("Balsa", 88, .17, 11));
Materials.register(new Wood("Basswood", 410, .41, 27));
Materials.register(new Wood("Cedar (Red Western)", 350, .37, 23));
Materials.register(new Wood("Cedar (Port Orford)", 720, .44, 30));
Materials.register(new Wood("Cypress", [300, 800], [0.20, 0.46], 32));
Materials.register(new Wood("Douglas Fir", 650, .50, 34));
Materials.register(new Wood("Jatoba", 2820, .71, 56));
Materials.register(new Wood("Kiri", 250, .26, 16));
Materials.register(new Wood("Koto", 950, .65, 35));
Materials.register(new Wood("Limba", 490, .45, 34));
Materials.register(new Wood("Obeche (Ayous or Abachi)", 430, .38, 24));
Materials.register(new Wood("Poplar", 430, .42, 30));
Materials.register(new Wood("Rosewood", [1780, 2200], [0.74, 0.96], [46, 68]))
Materials.register(new Wood("Spruce", [300, 500], .43, 27));
Materials.register(new Wood("Walnut (Black)", 1010, 0.59, 40));
Materials.register(new Wood("Willow", 360, 0.39, 26));
Materials.register(new Wood("Zebrano", 1575, 0.74, 46));
