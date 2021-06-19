export const logger = {
  info: (message: string): void => console.info('', message),
  plain: (message: string): void => console.log(message),
  line: (count = 1): void => console.log(`${Array(count - 1).fill('\n')}`),
  warn: (message: string): void => console.warn('', message),
  error: (message: string): void => console.error('', message),
  trace: (): void =>
    // console.info('', `${message} (${console.purple(prettyTime(time))})`),
  {},
  setLevel: (): void => {
    // console.level = level;
  },
};

export interface Logger {}
