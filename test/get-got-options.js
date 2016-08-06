'use strict';

import test from 'ava';
import getGotOptions from '../lib/get-got-options';

const token = '0123456789';

test.beforeEach(t => {
  process.env.TARGET_PROCESS_TOKEN = token;
});

test('it should validate the token env variable', t => {
  process.env.TARGET_PROCESS_TOKEN = '';
  t.throws(() => getGotOptions());

  delete process.env.TARGET_PROCESS_TOKEN;
  t.throws(() => getGotOptions());

  process.env.TARGET_PROCESS_TOKEN = token;
  t.notThrows(() => getGotOptions());
});

test('it should return the options object', t => {
  const options = getGotOptions();

  t.true(options.json);
  t.deepEqual('json', options.body.format);
  t.deepEqual('0123456789', options.body.token);
});

