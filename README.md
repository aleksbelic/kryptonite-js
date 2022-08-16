# Kryptonite-TS

TypeScript Crypto Lib.

## Progress

| Cipher                  | Description                 | Implemented |
| :---------------------- | :-------------------------- | :---------: |
| Atbash                  |                             |             |
| Bacon's (v1, v2)        |                             |             |
| Caesar                  | monoalphabetic substitution |   &#9989;   |
| M-94 (CSP-488 for Navy) |                             |             |
| Morse                   |                             |             |
| Polybius square         |                             |             |
| Porta                   |                             |             |
| Rail Fence              |                             |             |
| ROT13                   |                             |             |
| Scytale                 |                             |             |
| Vigenère                |                             |             |

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
