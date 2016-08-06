'use strict';

const pkg = require('../package.json');

module.exports = () => {
  const token = process.env.TARGET_PROCESS_TOKEN;

  if (typeof token !== 'string' || token.length === 0) {
    throw new TypeError('Environment variable `TARGET_PROCESS_TOKEN` is missing');
  }

  return {
    json: true,
    headers: {
      'user-agent': pkg.repository.url
    },
    body: {
      format: 'json',
      token: token
    }
  };
};
