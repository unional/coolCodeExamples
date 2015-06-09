import * as Logs from "common/Logs"
import worldData from "worldData"

class Data {
	private dataInMemory:any = {}
	private worldData = worldData
	private savedData: any
	hasSaveData() {
		return this.savedData
	}
	loadSaveData() {
		this.dataInMemory.saveData = this.savedData;
	}
	saveSaveData() {
		this.savedData = this.dataInMemory.saveData;
		// save the savedData to a presistent store.
	}
	loadData() {
		this.dataInMemory.worldData = this.worldData;
		this.dataInMemory.saveData = this.savedData;
	}
}

export default class System {
	logger: Logs.Logger
	private data: Data
	constructor(options: any = {}) {
		this.logger = options.logger;
		this.data = new Data();
	}
	initialize() {
		this.logger.log("Initializing data...");
		this.data.loadData();
		
		if (this.data.hasSaveData()) {
			this.logger.log("Loading data...");
			this.data.loadSaveData();
		}
	}
	start() {}
}