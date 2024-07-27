"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["DEBUG"] = "DEBUG";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(level, logFilePath) {
        this.level = level;
        this.logFilePath = logFilePath;
    }
    static getInstance(level = LogLevel.INFO, logFilePath = 'application.log') {
        if (!Logger.instance) {
            Logger.instance = new Logger(level, logFilePath);
        }
        return Logger.instance;
    }
    shouldLog(messageLevel) {
        const levels = [LogLevel.DEBUG, LogLevel.INFO, LogLevel.WARN, LogLevel.ERROR];
        return levels.indexOf(messageLevel) >= levels.indexOf(this.level);
    }
    writeLog(message) {
        fs_1.default.appendFileSync(this.logFilePath, message + '\n');
    }
    log(message, level) {
        if (this.shouldLog(level)) {
            const logMessage = `[${level}] ${new Date().toISOString()}: ${message}`;
            console.log(logMessage); // Log to console
            this.writeLog(logMessage); // Log to file
        }
    }
    info(message) {
        this.log(message, LogLevel.INFO);
    }
    warn(message) {
        this.log(message, LogLevel.WARN);
    }
    error(message) {
        this.log(message, LogLevel.ERROR);
    }
    debug(message) {
        this.log(message, LogLevel.DEBUG);
    }
}
exports.default = Logger;
