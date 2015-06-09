/**
 * A simple logger. Subset of Console.
 */
export interface Logger {
    assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
    assertAndThrow(test?: boolean, message?: string, ...optionalParams: any[]): void;
    clear(): void;
    debug(message?: string, ...optionalParams: any[]): void;
    debugAndThrow(message?: string, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    errorAndThrow(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    infoAndThrow(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    logAndThrow(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    warnAndThrow(message?: any, ...optionalParams: any[]): void;
}


/**
 * A logger to console
 */
export class ConsoleLogger implements Logger {
    assert(test?: boolean, message?: string, ...optionalParams: any[]) {
		if (test) {
			console.log.apply(this, [message].concat(optionalParams));			
		}
	}
    assertAndThrow(test?: boolean, message?: string, ...optionalParams: any[]) {
		if (test) {
			console.log.apply(this, [message].concat(optionalParams));			
			throw new Error(message);			
		}
	}
    clear() {}
    debug(message?: string, ...optionalParams: any[]) {
		console.debug.apply(this, [message].concat(optionalParams));
	}
    error(message?: any, ...optionalParams: any[]) {
		console.error.apply(this, [message].concat(optionalParams));
	}
    info(message?: any, ...optionalParams: any[]) {
		console.info.apply(this, [message].concat(optionalParams));
	}
    log(message?: any, ...optionalParams: any[]) {
		console.log.apply(this, [message].concat(optionalParams));
	}
    warn(message?: any, ...optionalParams: any[]) {
		console.warn.apply(this, [message].concat(optionalParams));
	}
    debugAndThrow(message?: string, ...optionalParams: any[]) {
		console.debug.apply(this, [message].concat(optionalParams));
		throw new Error(message);
	}
    errorAndThrow(message?: any, ...optionalParams: any[]) {
		console.error.apply(this, [message].concat(optionalParams));
		throw new Error(message);
	}
    infoAndThrow(message?: any, ...optionalParams: any[]) {
		console.info.apply(this, [message].concat(optionalParams));
		throw new Error(message);
	}
    logAndThrow(message?: any, ...optionalParams: any[]) {
		console.log.apply(this, [message].concat(optionalParams));
		throw new Error(message);
	}
    warnAndThrow(message?: any, ...optionalParams: any[]) {
		console.warn.apply(this, [message].concat(optionalParams));
		throw new Error(message);
	}
}