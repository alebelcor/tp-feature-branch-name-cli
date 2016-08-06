'use strict';

const got = require('got');
const meow = require('meow');
const dashify = require('dashify');

const getGeneralUrl = require('./lib/get-general-url');
const getGotOptions = require('./lib/get-got-options');
const getResponseBody = require('./lib/get-response-body');
const getFormattedName = require('./lib/get-formatted-name');

const cli = meow(`
  Usage
    $ tp-feature-branch-name <TP number>

  Options
    TP number  The ID of a user story/bug from Targetprocess

  Examples
    $ tp-feature-branch-name 52777
    bug-52777-insufficient-consumption-of-beer-in-the-human-body
`);

got.get(getGeneralUrl(cli.input[0]), getGotOptions())
  .then(getResponseBody)
  .then(getFormattedName)
  .then(console.log)
  .catch(console.error);
