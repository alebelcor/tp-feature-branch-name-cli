'use strict';

module.exports = (id) => {
  if (typeof id !== 'number' || id <= 0) {
    throw new TypeError('TP number is missing');
  }

  const endpoint = process.env.TARGET_PROCESS_ENDPOINT;

  if (typeof endpoint !== 'string' || endpoint.length === 0) {
    throw new TypeError('Environment variable `TARGET_PROCESS_ENDPOINT` is missing');
  }

  return `${endpoint}/Generals/${id}`;
};
