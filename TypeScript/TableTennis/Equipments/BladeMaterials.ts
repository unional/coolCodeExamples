import BladeMaterial from "BladeMaterial";
import Wood from "BladeWoodMaterial";
import Composite from "BladeCompositeMaterial";

var Materials = {
	Carbon: new Composite("Carbon"),
	Zylon: new Composite("Zylon"),
	Kevlar: new Composite("Kevlar"),
	Aralyte: new Composite("Aralyte"),
	Fiberglass: new Composite("Fiberglass"),
	register: function(material: BladeMaterial) {
		Materials[material.name] = material;
	},
	unregister: function(material: BladeMaterial) {
		delete Materials[material.name];
	}
};

export default Materials

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
