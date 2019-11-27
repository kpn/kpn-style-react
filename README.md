# KPN STYLE REACT

> Lightweight, easy to use, react components for kpn-style

[![Github Actions](https://github.com/kpn/kpn-style-react/workflows/Test%20React%20App/badge.svg?style=flat-square)](https://github.com/kpn/kpn-style-react/actions)
[![npm package][npm-badge]][npm]

## Installation

```bash
yarn add kpn-style kpn-style-react
```

This components require [kpn-style](https://github.com/kpn/kpn-style) in order to
properly display the components.

## Configuration

You'll need to import the css or the scss from `kpn-style`.

In your main scss file import:

```scss
@import "~@kpn-style/bundle/bundle";
@include font-face(
  "kpn-ui-icons",
  normal,
  400,
  "~@kpn-style/bundle/base/ui-icon",
  "kpn-ui-icons"
);
```

Read more in the [official docs](https://style.kpn.com/getting-started/quick-start)

## Usage

Import components as you go

```js
import { Button } from "kpn-style-react";

<Button>KPN</Button>;
```

## Documentation

Each component is documented in a storybook.
Running the storybook locally:

```bash
yarn start
```

## TODO

- [ ] Add more components

## Contributing

All contributions are welcome

1. Fork this repository
2. Clone your fork
3. Install deps: `yarn install`
4. Commit changes using conventional commits
5. Push changes

Notes:

- This repo uses [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Run your tests and eslint before pushing in order to avoid problems.

[npm-badge]: https://img.shields.io/npm/v/kpn-style-react?style=flat-square
[npm]: https://www.npmjs.org/package/kpn-style-react
