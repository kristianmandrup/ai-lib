# ai-lib
# https://github.com/kristianmandrup/ai-lib
#
# Copyright (c) 2016, Kristian Mandrup
# Licensed under the MIT license.

test:

	@NODE_ENV=test ./node_modules/mocha/bin/mocha -R spec --ui bdd --colors --recursive -t 8000 ./test/*.spec.js

.PHONY: test