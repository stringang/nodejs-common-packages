import { LogVerbosity } from './constants';

let _logger: Partial<Console> = console;
let _logVerbosity: LogVerbosity = LogVerbosity.ERROR;

const verbosityString = process.env.LOG_VERBOSITY ?? process.env.LOG_VERBOSITY ?? '';

switch (verbosityString) {
  case 'DEBUG':
    _logVerbosity = LogVerbosity.DEBUG;
    break;
  case 'INFO':
    _logVerbosity = LogVerbosity.INFO;
    break;
  case 'ERROR':
    _logVerbosity = LogVerbosity.ERROR;
    break;
  default:
  // Ignore any other values
}

export const getLogger = (): Partial<Console> => {
  return _logger;
};

export const setLogger = (logger: Partial<Console>): void => {
  _logger = logger;
};

export const setLoggerVerbosity = (verbosity: LogVerbosity): void => {
  _logVerbosity = verbosity;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const log = (severity: LogVerbosity, ...args: any[]): void => {
  if (severity >= _logVerbosity && typeof _logger.error === 'function') {
    _logger.error(...args);
  }
};

const tracersString = process.env.GRPC_NODE_TRACE ?? process.env.GRPC_TRACE ?? '';
const enabledTracers = tracersString.split(',');
const allEnabled = enabledTracers.includes('all');

export function trace(severity: LogVerbosity, tracer: string, text: string): void {
  if (allEnabled || enabledTracers.includes(tracer)) {
    log(severity, new Date().toISOString() + ' | ' + tracer + ' | ' + text);
  }
}
