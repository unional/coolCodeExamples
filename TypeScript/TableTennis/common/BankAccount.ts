
// Demo mix default and named export
import * as Logs from "Logs"

export default class BankAccount {
	private accountBalance: number
	private accountCert: string
	logger: Logs.Logger
	constructor(options: any) {
		this.logger = options.logger || new Logs.ConsoleLogger();
		this.accountCert = options.accountCert || "";
	}
	get balance(): number {
		return this.accountBalance;
	}
	withdraw(amount: number): BitCoin {
		var success = false;
		if (this.accountBalance < amount) {
			this.logger.error("Not enough money");
		}
		else {
			this.accountBalance -= amount;
			success = true;
		}
		return success? new BitCoin(amount, this.accountCert) : undefined;
	}
	deposit(amount: BitCoin | number) {
		if (<BitCoin>amount) {
			this.accountBalance += (<BitCoin>amount).amount;
		}
		else {
			if (amount < 0) {
				this.logger.errorAndThrow("You can't deposit negative amount. Good try!");
			}
			this.accountBalance += <number>amount;			
		}		

	}
}

export class BitCoin {
	constructor(private actualAmount: number, private sourceCert: string) {
	}
	
	get amount() {
		return this.actualAmount;
	}
	
	draw(amount: number, cert: string): boolean {
		if (amount <= this.actualAmount && this.isValidCert(cert)) {
			this.actualAmount -= amount;
			return true;
		}
		return false;
	}
	
	private isValidCert(cert: string) {
		// if cert is valid or match source cert.
		return true;
	}
}