<template>
  <router-link to="/project/238476" class="group inline-block">
    <div
      class="h-60 rounded-4xl p-4 group-hover:bg-projectCardHover transition-all duration-500"
    >
      <div
        class="w-30 h-30 rounded-2.5xl flex flex-col items-center justify-center"
        :style="{ backgroundColor: projectBackgroundColor }"
      >
        <div
          class="opacity-0 group-hover:opacity-100 transition-all duration-2-400 -mb-2"
        >
          <button
            @click="setFavorite()"
            class="hover:bg-inverse-background-hover p-1 transition-colors rounded relative -top-1 right-7"
          >
            <icon
              name="filled-star"
              class="text-white"
              :class="isFavorite ? 'block' : 'hidden'"
            ></icon>
          </button>

          <button
            @click="setFavorite()"
            class="hover:bg-inverse-background-hover p-1 transition-colors rounded relative -top-1 right-9"
          >
            <icon
              name="star"
              class="text-white"
              :class="isFavorite ? 'hidden' : 'block'"
            ></icon>
          </button>
          <button
            class="hover:bg-inverse-background-hover p-1 transition-colors rounded relative -top-1 left-6"
          >
            <icon name="more" class="text-white"></icon>
          </button>
        </div>

        <icon name="board"></icon>

        <avatar
          size="24"
          class="opacity-0 mt-2 -mb-4 group-hover:opacity-100 group-hover:mb-0 group-hover:translate transition-all duration-400"
        ></avatar>
      </div>
      <div class="text-sm font-medium text-center mt-2">Messega</div>
    </div>
  </router-link>
</template>
<script>
import Icon from "@/components/Icon";
import Avatar from "@/components/Avatar";

export default {
  components: { Icon, Avatar },
  data() {
    return {
      projectBackgroundColor: "#B36BD4",
      isFavorite: false,
    };
  },
  mounted() {
    this.projectBackgroundColor = this.randomColor();
  },
  methods: {
    setFavorite() {
      return (this.isFavorite = !this.isFavorite);
    },
  },
};
</script>
