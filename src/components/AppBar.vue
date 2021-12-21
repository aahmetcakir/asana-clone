<template>
  <div>
    <div class="h-18 flex items-center justify-between mx-4">
      <div class="flex items-center">
        <button v-if="navDrawer" @click="drawer()" class="pa-2">
          <Menu class="text-black transform rotate-180"></Menu>
        </button>
        <span class="text-xl text-black ml-2">
          {{ $route.name }}
        </span>
      </div>
      <div class="flex items-center">
        <form class="relative">
          <input
            type="text"
            placeholder="Search"
            class="rounded-2xl h-8 outline-none pr-4 pl-8 border transition-all border-gray-400 w-36 focus:w-110 text-sm"
          />
          <search class="absolute top-2 left-2"></search>
        </form>
        <div class="flex space-x-3 items-center">
          <button
            class="bg-buttonCreation rounded-full flex items-center justify-center ml-3 p-1.5 h-7"
          >
            <Plus class="text-white"></Plus>
          </button>
          <button class="bg-upSell font-light rounded-md ml-3 px-3 text-sm h-9">
            Upgrade
          </button>
          <!-- bg-green-400 -->
          <button
            class="rounded-full flex items-center justify-center ml-3 p-1.5 h-7 text-xs text-gray-900"
            :style="{ backgroundColor: randomColor() }"
          >
            AÇ
          </button>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
import Menu from "@/components/icons/Menu";
import Search from "@/components/icons/Search";
import Plus from "@/components/icons/Plus";

export default {
  components: {
    Menu,
    Search,
    Plus,
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
