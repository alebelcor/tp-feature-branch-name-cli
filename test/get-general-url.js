'use strict';

import test from 'ava';
import getGeneralUrl from '../lib/get-general-url';

const endpoint = 'https://foo.dev';

test.beforeEach(t => {
  process.env.TARGET_PROCESS_ENDPOINT = endpoint;
});

test('it should validate the id parameter', t => {
  t.throws(() => getGeneralUrl(null));
  t.throws(() => getGeneralUrl(void 0));
  t.throws(() => getGeneralUrl('1111'));
  t.throws(() => getGeneralUrl(0));
  t.notThrows(() => getGeneralUrl(1));
});

test('it should validate the endpoint env variable', t => {
  process.env.TARGET_PROCESS_ENDPOINT = '';
  t.throws(() => getGeneralUrl(1234));

  delete process.env.TARGET_PROCESS_ENDPOINT;
  t.throws(() => getGeneralUrl(1234));

  process.env.TARGET_PROCESS_ENDPOINT = endpoint;
  t.notThrows(() => getGeneralUrl(1234));
});

test('it should get the general URL', t => {
  t.deepEqual(`${endpoint}/Generals/2345`, getGeneralUrl(2345));
});
