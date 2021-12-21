<template>
  <component :is="iconComponent" />
</template>

<script>
// const icons = {
//   bell: require("./icons/BellIcon.vue"),
//   checkCircle: require("./icons/CheckCircleIcon.vue"),
//   file: require("./icons/FileIcon.vue"),
//   goals: require("./icons/GoalsIcon.vue"),
//   google: require("./icons/GoogleIcon.vue"),
//   home: require("./icons/HomeIcon.vue"),
//   logoLight: require("./icons/LogoLightIcon.vue"),
//   menu: require("./icons/MenuIcon.vue"),
//   plus: require("./icons/PlusIcon.vue"),
//   reporting: require("./icons/ReportingIcon.vue"),
//   search: require("./icons/SearchIcon.vue"),
// };
import icons from "./icons/index";
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      },
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>
