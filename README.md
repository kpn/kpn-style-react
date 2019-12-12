# KPN STYLE REACT Monorepo

> A series of packages that assist in the usage of kpn-styles with React

[![Github Actions](https://github.com/kpn/kpn-style-react/workflows/Test%20React%20App/badge.svg?style=flat-square)](https://github.com/kpn/kpn-style-react/actions)
[![npm package][npm-badge]][npm]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
![GitHub](https://img.shields.io/github/license/kpn/kpn-style-react?style=flat-square)

---

**Documentation for react components**: [https://kpn.github.io/kpn-style-react/](https://kpn.github.io/kpn-style-react/?path=/story/welcome--to-kpn-style-react)

**Documentation for styles**: [https://style.kpn.com/](https://kpn.github.io/kpn-style/)

---

## Current projects

```bash
packages/
├── kpn-styles-react
└── cra-template-kpn-style-react
```

## Initializing an app

Initialize your project just by running any of the following commands

### yarn

```bash
yarn create react-app my-app --template @kpn-style/cra-template-kpn-style-react
```

### npm

```bash
npm init react-app my-app --template @kpn-style/cra-template-kpn-style-react
```

## Using in an exisiting repo

Install kpn-style-react and start using it right away.

```bash
yarn add @kpn-style/bundle @kpn-style/react
```

```js
import { Button } from "@kpn-style/react";

<Button>KPN</Button>;
```

[npm-badge]: https://img.shields.io/npm/v/@kpn-style/react?style=flat-square
[npm]: https://www.npmjs.org/package/@kpn-style/react
