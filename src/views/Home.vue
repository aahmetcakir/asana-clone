<template>
  <div class="grid place-content-center mt-8 gap-y-4">
    <section class="w-210">
      <div class="text-dark flex items-center border-b-2 pb-2.5 mb-4">
        <button
          class="p-1 hover:bg-projectCardHover rounded mr-2"
          @click="subSectionDrawer(0)"
        >
          <icon
            name="hub-section"
            :class="subSectionDraw[0] ? 'transform rotate-90' : ''"
          ></icon>
        </button>
        <span @click="subSectionDrawer(0)" class="cursor-pointer"
          >Task Due Soon</span
        >
      </div>
      <div class="space-x-2" :class="subSectionDraw[0] ? '' : 'hidden'">
        <project-card v-for="i in 5" :key="i"></project-card>
      </div>
    </section>
    <section class="w-210">
      <div class="text-dark flex items-center border-b-2 pb-2.5 mb-4">
        <button
          class="p-1 hover:bg-projectCardHover rounded mr-2"
          @click="subSectionDrawer(1)"
        >
          <icon
            name="hub-section"
            :class="subSectionDraw[1] ? 'transform rotate-90' : ''"
          ></icon>
        </button>
        <span @click="subSectionDrawer(1)" class="cursor-pointer"
          >Favorites</span
        >
      </div>
      <div class="space-x-2" :class="subSectionDraw[1] ? '' : 'hidden'">
        <project-card v-for="i in 4" :key="i"></project-card>
      </div>
    </section>
    <section class="w-210">
      <div class="text-dark flex items-center border-b-2 pb-2.5 mb-4">
        <button
          class="p-1 hover:bg-projectCardHover rounded mr-2"
          @click="subSectionDrawer(2)"
        >
          <icon
            name="hub-section"
            :class="subSectionDraw[2] ? 'transform rotate-90' : ''"
          ></icon>
        </button>
        <span @click="subSectionDrawer(2)" class="cursor-pointer"
          >Recent Projects</span
        >
      </div>
      <div class="space-x-2" :class="subSectionDraw[2] ? '' : 'hidden'">
        <project-card v-for="i in 5" :key="i"></project-card>
      </div>
    </section>
  </div>
</template>
<script>
import ProjectCard from "@/components/ProjectCard";
import Icon from "@/components/Icon.vue";
export default {
  components: {
    ProjectCard,
    Icon,
  },
  data() {
    return {
      subSectionDraw: [false, true, true],
    };
  },
  methods: {
    subSectionDrawer(index) {
      this.$set(this.subSectionDraw, index, !this.subSectionDraw[index]);
    },
  },
};
</script>

ProjectCard
