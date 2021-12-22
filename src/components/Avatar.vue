<template>
  <button
    class="rounded-full flex items-center justify-center text-center p-1.5 text-xs text-gray-900 border border-gray-400"
    :class="sizes"
    :style="{
      backgroundColor:
        userBackgroundColor === undefined ? '#4ECBC4' : userBackgroundColor,
    }"
  >
    <!--TODO username will come to this section -->
    AÇ
  </button>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "28",
    },
  },
  computed: {
    userBackgroundColor() {
      return this.$store.state.userBackgroundColor?.userColor;
    },
    sizes() {
      return "w-" + this.size / 4 + " h-" + this.size / 4;
    },
  },
};
</script>
