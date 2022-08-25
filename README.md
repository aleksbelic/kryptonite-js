# Kryptonite-Core

![testing workflow](https://github.com/aleksbelic/kryptonite-core/actions/workflows/tests.yml/badge.svg)
[![GitHub license](https://img.shields.io/github/license/aleksbelic/kryptonite-core)](https://raw.githubusercontent.com/aleksbelic/kryptonite-core/release/1.0.0/LICENSE)

TypeScript Crypto Lib.

## Progress

| Cipher                  | Description                 | Implemented |
| :---------------------- | :-------------------------- | :---------: |
| Atbash                  | monoalphabetic substitution |   &#9989;   |
| Bacon's (v1, v2)        |                             |             |
| Caesar                  | monoalphabetic substitution |   &#9989;   |
| M-94 (CSP-488 for Navy) |                             |             |
| Morse code              | monoalphabetic substitution |   &#9989;   |
| Polybius square         |                             |             |
| Porta                   | polyalphabetic substitution |             |
| Rail Fence              |                             |             |
| ROT5                    | monoalphabetic substitution |             |
| ROT13                   | monoalphabetic substitution |   &#9989;   |
| ROT18                   | monoalphabetic substitution |             |
| ROT47                   | monoalphabetic substitution |             |
| Scytale                 |                             |             |
| Vigenère                | polyalphabetic substitution |   &#9989;   |

## Development

To start TypeScript compilation in watch mode:

```
$ tsc --watch
```

Code formatting is done by [Prettier](https://prettier.io/).
Simply format project files by following predefined rules in `.prettierrc.json`:

```
$ npm run pretty
```

which is an alias for:

```
$ npx prettier --write .
```

To exclude files from formatting, please refer to `.prettierignore` (corresponds to `.gitignore`).

Identifying problematic patterns is covered by static code analysis tool [ESLint](https://eslint.org/):

```
$ npm run lint
```

which is an alias for:

```
$ npx eslint .
```

Linting config can be found in `.eslintrc.json`.
