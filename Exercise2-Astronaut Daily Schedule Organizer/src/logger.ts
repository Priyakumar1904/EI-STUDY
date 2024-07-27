import fs from 'fs';
import path from 'path';

enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  DEBUG = 'DEBUG',
}

class Logger {
  private static instance: Logger;
  private level: LogLevel;
  private logFilePath: string;

  private constructor(level: LogLevel, logFilePath: string) {
    this.level = level;
    this.logFilePath = logFilePath;
  }

  static getInstance(level: LogLevel = LogLevel.INFO, logFilePath: string = 'application.log'): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger(level, logFilePath);
    }
    return Logger.instance;
  }

  private shouldLog(messageLevel: LogLevel): boolean {
    const levels = [LogLevel.DEBUG, LogLevel.INFO, LogLevel.WARN, LogLevel.ERROR];
    return levels.indexOf(messageLevel) >= levels.indexOf(this.level);
  }

  private writeLog(message: string): void {
    fs.appendFileSync(this.logFilePath, message + '\n');
  }

  log(message: string, level: LogLevel): void {
    if (this.shouldLog(level)) {
      const logMessage = `[${level}] ${new Date().toISOString()}: ${message}`;
      console.log(logMessage); // Log to console
      this.writeLog(logMessage); // Log to file
    }
  }

  info(message: string): void {
    this.log(message, LogLevel.INFO);
  }

  warn(message: string): void {
    this.log(message, LogLevel.WARN);
  }

  error(message: string): void {
    this.log(message, LogLevel.ERROR);
  }

  debug(message: string): void {
    this.log(message, LogLevel.DEBUG);
  }
}

export default Logger;
