<template>
  <div>
    <div class="h-18 flex items-center justify-between mx-4">
      <div class="flex items-center">
        <!-- nav drawer button -->
        <button v-if="navDrawer" @click="drawer()" class="pa-2">
          <icon name="menu" class="text-black transform rotate-180"></icon>
        </button>
        <!-- page name  -->
        <span class="text-xl text-black ml-2">
          {{ $route.name }}
        </span>
      </div>
      <div class="flex items-center">
        <!-- search section -->
        <form class="relative">
          <input
            type="text"
            placeholder="Search"
            class="rounded-2xl h-8 outline-none pr-4 pl-8 border transition-all border-borderStrong w-36 focus:w-110 text-sm"
          />
          <icon name="search" class="absolute top-2 left-2"></icon>
        </form>

        <!-- button group -->
        <div class="flex space-x-3 items-center mr-2">
          <button
            class="bg-buttonCreation rounded-full flex items-center justify-center ml-3 p-1.5 h-7"
          >
            <icon name="plus" class="text-white"></icon>
          </button>
          <button class="bg-upSell font-light rounded-md ml-3 px-3 text-sm h-9">
            Upgrade
          </button>
          <avatar></avatar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import Avatar from "@/components/Avatar";

export default {
  components: {
    Icon,
    Avatar,
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
