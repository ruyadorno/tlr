# tlr [![NPM version](https://badge.fury.io/js/tlr.svg)](https://npmjs.org/package/tlr) [![Build Status](https://travis-ci.org/ruyadorno/tlr.svg?branch=master)](https://travis-ci.org/ruyadorno/tlr)

What is quickier than using tiny-lr? Using **tlr** of course.

## About

Small cli util that spawns a simple [tiny-lr](https://github.com/mklabs/tiny-lr) server.

> Batteries **NOT** included

### Integration

The spawned server will listen to all regular `tiny-lr` endpoints.

_e.g._ If you're using [nodemon](https://github.com/remy/nodemon) you should be able to hook an event into your `nodemon.json` config file:

```json
{
  "events": {
    "restart": "sleep 1; curl http://localhost:35729/changed"
  }
}

```

Please refer to [tiny-lr](https://github.com/mklabs/tiny-lr) docs for more info on available endpoints.

## Install

```sh
npm install tlr
```

## Usage

```sh
tlr
```

Using a custom port:

```sh
export LR_PORT=9999
tlr
```

## License

MIT © [Ruy Adorno](http://ruyadorno.com)

