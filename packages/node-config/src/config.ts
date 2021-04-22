import { IConfigOptions } from './types';
import { readConfigFile } from './utils';

function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}

export interface IConfig {
  get<T = any>(key: string): T | undefined;
  getWithDefault<T = any>(key: string, defaultVal: T): T | undefined;
}

export class Config implements IConfig {
  private readonly configOptions: IConfigOptions;

  private validatedEnvConfig: Record<string, any> | undefined;

  constructor(configOption: IConfigOptions = {}) {
    this.configOptions = configOption;
  }

  public get<T = any>(key: string): T | undefined {
    const processValue = process.env?.[key];

    if (!isUndefined(processValue)) {
      return (processValue as unknown) as T;
    }

    if (!this.validatedEnvConfig) {
      this.validatedEnvConfig = readConfigFile(this.configOptions.envFilePath ?? process.cwd() + 'config/development.yaml');
    }

    return this.validatedEnvConfig?.[key];
  }

  public getWithDefault<T = any>(key: string, defaultVal: T): T | undefined {
    const envValue: T | undefined = this.get<T>(key);

    return isUndefined(envValue) ? defaultVal : envValue;
  }
}
