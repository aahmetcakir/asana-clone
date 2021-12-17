<template>
  <div id="app">
    <div class="flex">
      <sidebar v-if="routeName !== 'Login'"></sidebar>
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Sidebar,
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>
