# KPN STYLE REACT Monorepo

> A series of packages that assist in the usage of kpn-styles with React

--------------

**Documentation for react components**: [https://kpn.github.io/kpn-style-react/](https://kpn.github.io/kpn-style-react/?path=/story/welcome--to-kpn-style-react)

**Documentation for styles**: [https://style.kpn.com/](https://kpn.github.io/kpn-style/)

--------------

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
