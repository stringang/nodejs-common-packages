import { Config } from '../src';
import * as assert from 'assert';

describe('config unit test', () => {
  it('should get default value', () => {
    const config = new Config();
    const env = config.getWithDefault('port', '3000');
    assert.strictEqual(env, '3000');
  });

  it(' should get undefined', () => {
    const config = new Config();
    const env = config.get('port');
    assert.strictEqual(env, undefined);
  });
});
