<template>
  <div
    class="bg-dark w-60 sticky top-0 h-screen transition-all duration-500 flex-shrink-0"
    :class="navDrawer ? '-ml-60' : ''"
  >
    <div class="pb-6 pt-8 px-6 flex items-center justify-between">
      <!-- asana logo -->
      <icon name="logo-light"></icon>
      <button @click="drawer()" class="pa-2">
        <icon name="menu" class="text-white"></icon>
      </button>
    </div>

    <ul class="text-inverse-text text-sm">
      <router-link
        v-for="item in menuItems"
        :key="item.text"
        :to="item.to || '#'"
      >
        <li
          class="flex items-center py-1.5 px-6 hover:bg-selectedMenuHover"
          :class="isSelected(item)"
        >
          <icon :name="item.icon" class="mr-2"></icon>

          {{ item.text }}
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import Icon from "@/components/Icon";

export default {
  components: { Icon },
  computed: {
    menuItems() {
      return this.$store.getters.menuItems;
    },
    navDrawer() {
      return this.$store.state.navigationDrawer;
    },
  },
  methods: {
    isSelected(item) {
      return this.$route.name === item?.text ? "bg-selectedMenu" : "";
    },
    drawer() {
      return this.$store.commit("drawer");
    },
  },
};
</script>
