/**
 * Only balls meeting this specification can be ITTF approved 40mm+ Plastic seamless ball (3 stars).
 */
export var BallSpecification40PlusSeamless = {
	/**
	 * Diameter of the ball  in cm: Lower limit - target - upper Limit
	 */
	diameter:[number, number, number] = [0.4, 0.403, 0.406]
	/**
	 * Weight of the ball in grams: Lower limit - target - upper limit.
	 */
	weight: [number, number, number] = [2.67, 2.7, 2.77]
	/**
	 * When the ball is dropped from 30.5cm away, how much would the ball bounce back.
	 */
	bounce: [number, number] = [24, 26]
	
	/**
	 * Hardness of the ball: Lower limit - upper limit
	 */
	hardness: [number, number] = [0.7, 0.9]
};