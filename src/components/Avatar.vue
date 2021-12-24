<template>
  <button
    class="rounded-full flex items-center justify-center text-center p-1.5 text-xs text-gray-900 border border-gray-400"
    :style="{
      backgroundColor:
        userBackgroundColor === undefined ? '#4ECBC4' : userBackgroundColor,
      maxWidth: `${this.size}px`,
      maxHeight: `${this.size}px`,
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
  },
};
</script>
