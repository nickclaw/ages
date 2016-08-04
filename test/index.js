import assert from 'assert';
import each from 'lodash.foreach';
import ages from '../src';

describe('ages', () => {
  describe('msToString', () => {
    [
      { arg: 0, ret: '1m' },
      { arg: 60000, ret: '1m' },
      { arg: 119999, ret: '1m' },
      { arg: 120000, ret: '2m'},
      { arg: 3600000, ret: '1h' },
      { arg: 86400000, ret: '1d' },
      { arg: 604800000, ret: '1w' },
      { arg: 2592000000, ret: '1M' },
      { arg: 31536000000, ret: '1Y' },
      { arg: 315360000000, ret: '?' }
    ].forEach(test => it(`should convert ${test.arg} to ${test.ret}`, () => {
      const ret = ages.msToString(test.arg);
      assert(ret === test.ret, `got ${ret} instead of ${test.ret}`);
    }));
  });

  describe('ago', () => {

  });

  describe('until', () => {

  });

  describe('custom formats', () => {

  });
});
