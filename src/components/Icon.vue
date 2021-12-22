<template>
  <component :is="iconComponent" />
</template>

<script>
import icons from "./icons/index";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>
