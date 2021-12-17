<template>
  <div>
    <div class="h-18 flex items-center justify-between mx-4">
      <div class="flex items-center">
        <button v-if="navDrawer" @click="drawer()" class="pa-2">
          <Menu class="text-black"></Menu>
        </button>
        <span class="text-xl text-black ml-2">
          {{ $route.name }}
        </span>
      </div>
      <div class="flex items-center">
        <form>
          <input
            type="text"
            placeholder="Search"
            class="rounded-2xl font-light outline-none pr-4 pl-8 py-0.5 border transition-all border-gray-400 w-36 focus:w-110 text-sm"
          />
          <search class="relative -top-5 left-2"></search>
        </form>
        <Menu class="text-black ml-4"></Menu>
        <Menu class="text-black"></Menu>
        <Menu class="text-black"></Menu>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import Menu from "@/components/icons/Menu";
import Search from "@/components/icons/Search";

export default {
  components: {
    Menu,
    Search,
  },
  computed: {
    navDrawer() {
      return this.$store.state.navigationDrawer;
    },
  },
  methods: {
    drawer() {
      return this.$store.commit("drawer");
    },
  },
};
</script>
