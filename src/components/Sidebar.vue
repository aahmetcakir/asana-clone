<template>
  <div
    class="bg-dark w-60 h-screen transition-all flex-shrink-0"
    :class="navDrawer ? '-ml-60' : ''"
  >
    <div class="pb-6 pt-8 px-6 flex items-center justify-between">
      <!-- asana logo test-->
      <logo-light></logo-light>
      <button @click="drawer()" class="pa-2">
        <Menu class="text-white"></Menu>
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
          <component :is="item.icon" class="mr-2"></component>
          {{ item.text }}
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import LogoLight from "@/components/icons/LogoLight";
import Menu from "@/components/icons/Menu";
import Reporting from "@/components/icons/Reporting";
import Home from "@/components/icons/Home";
import Bell from "@/components/icons/Bell";
import CheckCircle from "@/components/icons/CheckCircle";
import File from "@/components/icons/File";
import Goals from "@/components/icons/Goals";

export default {
  components: {
    LogoLight,
    Menu,
    Reporting,
    Home,
    Bell,
    File,
    CheckCircle,
    Goals,
  },
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
