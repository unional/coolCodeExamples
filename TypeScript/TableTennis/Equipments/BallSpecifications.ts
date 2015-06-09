export enum BallType {
	Fourty,
	FourtyPlusWithSeam,
	FourtyPlusSeamless
}
export interface BallSpec {
	comply(ball: any): boolean
}
var BallSpecifications = {
	getSpec(type: BallType): BallSpec {
		var result;
		switch (type) {
			case BallType.Fourty:
				result = ballSpecification40;
				break;
			case BallType.FourtyPlusSeamless:
				result = ballSpec40PlusSeamless;
				break;
			default:
			case BallType.FourtyPlusWithSeam:
				result = BallSpecification40PlusWithSeam;
				break;
		}
		
		return result;
	}
}

export default BallSpecifications

// SeamBallSpecification and SeamlessBallSpecification class are not exported. No need to be.

class SeamBallSpecification implements BallSpec {
	constructor(
		/**
		 * Diameter of the ball  in cm: Lower limit - target - upper Limit
		 */
		public diameter: [number, number, number],
		/**
		 * Weight of the ball in grams: Lower limit - target - upper limit.
		 */
		public weight: [number, number, number],
		/**
		 * When the ball is dropped from 30.5cm away, how much would the ball bounce back.
		 */
		public bounce: [number, number],
		
		/**
		 * Hardness of the ball measured on the pole ends: Lower limit - upper limit
		 */
		public poleHardness: [number, number],
		/**
		 * Hardness of the ball measured on the seam: Lower limit - upper limit
		 */
		public seamHardness: [number, number]
		){}
		
		comply(ball: any): boolean {
			return false;
		}
}

class SeamlessBallSpecification implements BallSpec {
	constructor(
		/**
		 * Diameter of the ball  in cm: Lower limit - target - upper Limit
		 */
		public diameter: [number, number, number],
		/**
		 * Weight of the ball in grams: Lower limit - target - upper limit.
		 */
		public weight: [number, number, number],
		/**
		 * When the ball is dropped from 30.5cm away, how much would the ball bounce back.
		 */
		public bounce: [number, number],
		
		/**
		 * Hardness of the ball: Lower limit - upper limit
		 */
		public hardness: [number, number]
		){}
		
		comply(ball: any): boolean {
			return false;
		}
}

/**
 * Only balls meeting this specification can be ITTF approved 40mm ball (3 stars).
 */
var ballSpecification40 = new SeamBallSpecification(
	[0.395, 0.4, 0.405],
	[2.67, 2.7, 2.77],
	[24, 26],
	[0.68, 0.81],
	[0.72, 0.83]
	);

/**
 * Only balls meeting this specification can be ITTF approved 40mm+ Plastic seamless ball (3 stars).
 */
var ballSpec40PlusSeamless = new SeamlessBallSpecification(
	[0.4, 0.403, 0.406],
	[2.67, 2.7, 2.77],
	[24, 26],
	[0.7, 0.9]
);

/**
 * Only balls meeting this specification can be ITTF approved 40mm+ Plastic with seam ball (3 stars).
 */
var BallSpecification40PlusWithSeam = new SeamBallSpecification(
	[0.4, 0.403, 0.406],
	[2.67, 2.7, 2.77],
	[24, 26],
	[0.08, 0.81],
	[0.72, 0.83]
);
