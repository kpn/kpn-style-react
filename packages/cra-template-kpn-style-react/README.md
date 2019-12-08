# CRA Template for KPN Style

This templates includes:

- `kpn-style`
- `kpn-style-react`
- `reach-router`
- `react-testing-library`

The Layout is already defined, and ready to be used with some examples
which can be used or removed.

The functionality for the menu is also implemented.

There are some examples for the routes.

## Usage

Initialize your project just by running any of the following commands

### yarn

```bash
yarn create react-app my-app --template @kpn-style/cra-template-kpn-style-react
```

### npm

```bash
npm init react-app my-app --template @kpn-style/cra-template-kpn-style-react
```

## Meaning of folders

`components`: Any shared component or component that don't belong to the screens
can stay here.

`screens`: Components living in this folder should map to a url.

The following components will be match to the urls `/` and `info`

```bash
screens/
├── Home.js
└── Information.js
```

Of course folder modules can be used inside the `screen` folder, specially
for nested routes `info/locations` could be

```bash
screens/
├── Home.js
└── info/
    ├── Information.js
    └── Location.js
```
