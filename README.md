# Ai-lib [![Build Status](https://secure.travis-ci.org/kristianmandrup/ai-lib.png?branch=master)](http://travis-ci.org/kristianmandrup/ai-lib) [![NPM version](https://badge-me.herokuapp.com/api/npm/ai-lib.png)](http://badges.enytc.com/for/npm/ai-lib)

> Library manager for Aurelia

## Getting Started

Install the binary: `npm install ai-lib -g`

## Usage

Create an Aurelia CLI app, then run the `ai-lib` CLI from the root of the Aurelia project.

`$ ai-lib`

### Commands

Library commands:
- `install`
- `bundle`
- `list`

*Usage help*

`$ ai-lib --help`

#### Install
Install a library

- `ai-lib install <lib>`
- `ai-lib uninstall <lib>`

Will install a library via `npm` or `jspm` and bundle it in `aurelia.json` config file. 

#### Bundle

Bundle a library in web app (via `aurelia.json` bundles configuration)

- `ai-lib bundle <lib>`
- `ai-lib unbundle <lib>`

Will bundle a library in `aurelia.json` config file.

#### List

- `ai-lib list` lists all registered library configurations 

## Contributing

Please submit all issues and pull requests to the [kristianmandrup/ai-lib](https://github.com/kristianmandrup/ai-lib) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/kristianmandrup/ai-lib/issues).

## License 

The MIT License

Copyright (c) 2016, Kristian Mandrup

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

