export const updateKnob = (name, value) => {
  window.__STORYBOOK_ADDONS.channel.emit("storybookjs/knobs/change", {
    name: name,
    value: value
  });
};
