<template>
  <div class="bg-dark w-60 h-screen">
    <div class="pb-6 pt-8 px-6 flex items-center justify-between">
      <!-- asana logo test-->
      <logo-light></logo-light>
      <button>
        <Menu></Menu>
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
  data() {
    return {
      menuItems: [
        { text: "Home", icon: "home", to: "/home" },
        { text: "My Tasks", icon: "check-circle", to: "/tasks" },
        { text: "Inbox", icon: "bell" },
        { text: "Reporting", icon: "Reporting" },
        { text: "Portfolios", icon: "file" },
        { text: "Goals", icon: "goals" },
      ],
    };
  },
  methods: {
    isSelected(item) {
      return this.$route.name === item?.text ? "bg-selectedMenu" : "";
    },
  },
};
</script>
