import kebabCase from "lodash/kebabCase";

const icons = {};

const requireComponents = require.context(
  "../icons/",
  false,
  /[\w]+Icon\.vue$/
);

requireComponents.keys().forEach((fileName) => {
  const iconName = kebabCase(fileName.replace(/^\.\/(.+)Icon\.vue/, "$1"));
  const componentConfig = requireComponents(fileName);
  icons[iconName] = componentConfig.default || componentConfig;
});
export default icons;
