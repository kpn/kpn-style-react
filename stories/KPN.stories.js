import React from 'react';

export default {
  title: 'Getting started',
};

export const toStorybook = () => <div>
  <h2>Welcome to kpn-react</h2>
  Here you can try the modules

  Usage:
  ```
  yarn add kpn-styles kpn-react
  ```

</div>;

toStorybook.story = {
  name: 'to kpn-react',
};
