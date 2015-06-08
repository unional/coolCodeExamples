/**
 * A simple logger. Subset of Console.
 */
interface Logger {
    assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
    clear(): void;
    debug(message?: string, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
}

export default Logger