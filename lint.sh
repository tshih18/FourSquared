#!/bin/bash
git diff --cached --name-only --diff-filter=ACM | grep ".js$"| xargs ./node_modules/.bin/eslint
