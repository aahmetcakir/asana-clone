<template>
  <div id="app">
    <div class="flex">
      <sidebar v-if="routeName !== 'Login'"></sidebar>
      <div class="w-full">
        <app-bar v-if="routeName !== 'Login'"></app-bar>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import AppBar from "@/components/AppBar";

export default {
  components: {
    Sidebar,
    AppBar,
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>
