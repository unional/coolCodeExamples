import * as Logs from "common/Logs"
import System from "System"
class Application {
	logger = new Logs.ConsoleLogger();
	system: System
	constructor() {
		this.system = new System(this.logger);
		this.system.start();
	}
	start() {
		this.system.initialize();
		this.system.start();
	}
}

var app = new Application();
app.start();