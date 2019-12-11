import { create } from '@storybook/theming/create';

const green = "#009900";
const lightGrey = "#f6f9fc";

export default create({
  base: 'light',

  colorPrimary: green,
  colorSecondary: '#99cc00',

  // UI
  appBg: lightGrey,

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#feeacc',
  barBg: green,

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'rgb(51, 51, 51)',

  brandTitle: 'KPN Style React',
  brandUrl: 'https://kpn.com',
  brandImage: 'https://style.kpn.com/static/media/logo-kpn.77e7f164.png',
});
