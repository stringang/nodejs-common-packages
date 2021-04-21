import { Config } from '../src';

describe('config unit test', () => {

  it('should get default value', function() {
      const config = new Config();
      config.getWithDefault("dev", "test")

  });
})
