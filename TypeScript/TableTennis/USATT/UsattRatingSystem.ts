import IUsattRegistrant from 'UsattRegistrant'

export default class UsattRatingSystem {
	private static instance: UsattRatingSystem = new UsattRatingSystem();
	private players = {};
	private registrantKeyCount = 0;

	constructor() {
		if (UsattRatingSystem.instance) {
			throw new Error("UsattRatingSystem is a singleton. Use UsattRatingSystem.getInstance() instead.");
		}
	}
	
	public static getInstance(): UsattRatingSystem {
		return UsattRatingSystem.instance;
	}
	
	public register(player: IUsattRegistrant) {
		if (player.usattId) {
			throw new Error("You have already registered.");
		}
		
		this.registrantKeyCount++;
		this.players[this.registrantKeyCount] = player;
		return player.usattId = this.registrantKeyCount;
	}
	
	public unregister(playerId: number) {
		delete this.players[playerId];
	}
	
	public updateRating(winnerId: number, loserId: number) {
		// TODO: Calculate new ratings.
	}
	
	// public findPlayers(playerName?: string, playerId?: number): IUsattPlayer[] {
	// 	var result: IUsattPlayer[];
	// 	if (playerId) {
	// 		let player = this.players[playerId];
	// 		if (!playerName || player.name === playerName) {
	// 			result.push(player);
	// 		}
	// 	}
	// 	else if (playerName) {
	// 		for (let player of this.players) {
	// 			if (player.name === playerName) {
	// 				result.push(player);
	// 			}
	// 		}
	// 	}
	// 	else {
	// 		throw new Error("Can't list all players");
	// 	}
		
	// 	return result;
	// }
}