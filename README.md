# tp-feature-branch-name-cli

> Get the name for a feature branch of a TP user story/bug through the command-line

[![npm version](https://img.shields.io/npm/v/tp-feature-branch-name-cli.svg)](https://npmjs.org/package/tp-feature-branch-name-cli)
[![Build Status](https://img.shields.io/travis/alebelcor/tp-feature-branch-name-cli/master.svg)](https://travis-ci.org/alebelcor/tp-feature-branch-name-cli)
[![Test coverage](https://img.shields.io/coveralls/alebelcor/tp-feature-branch-name-cli.svg)](https://coveralls.io/github/alebelcor/tp-feature-branch-name-cli)


## Install

Ensure you have [Node.js](https://nodejs.org) version 4+ installed. Then run the following:

```bash
npm install --global tp-feature-branch-name-cli
```

## Setup

Set up `TARGET_PROCESS_TOKEN` environment variable with your
[authentication token](http://dev.targetprocess.com/rest/authentication) and
`TARGET_PROCESS_ENDPOINT` with your Targetprocess endpoint, e.g. `https://tp.company.com/api/v1`.

## Usage

```bash
$ tp-feature-branch-name --help

  Usage
    $ tp-feature-branch-name <TP number>

  Options
    TP number  The ID of a user story/bug from Targetprocess

  Examples
    $ tp-feature-branch-name 52777
    bug-52777-insufficient-consumption-of-beer-in-the-human-body
```

## License

MIT © Alejandro Beltrán
