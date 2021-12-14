<template>
  <button
    class="flex items-center rounded-md px-4 py-2 mb-8 mx-auto w-full border hover:bg-secondary transition-all"
  >
    <google class="ml-4" />
    <span class="mx-auto">
      {{ text }}
    </span>
  </button>
</template>
<script>
import Google from "@/components/icons/Google";
export default {
  components: {
    Google,
  },
  props: {
    icon: {
      type: String,
      default: "../assets/icons/google",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
