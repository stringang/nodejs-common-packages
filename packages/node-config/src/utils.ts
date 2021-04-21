import * as fs from 'fs';
import { load } from 'js-yaml';

export function readConfigFile(filePath: string): Record<any, any> {
  let config: ReturnType<typeof load> = {};

  if (fs.existsSync(filePath)) {
    config = Object.assign(fs.readFileSync(filePath, { encoding: 'utf8' }), config);
  }

  return config;
}
