export default class Brand {
	private captial: number
	constructor(public name: string, public initialCapital = 10000) {
		this.captial = initialCapital;	
	}
	
	designRubber(name: string) {
		
	}
	
	designBlade(name: string) {}
}