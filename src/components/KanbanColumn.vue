<template>
  <div
    class="w-72 group border-2"
    :class="hoverElement ? 'border-upSell' : 'border-white'"
  >
    <div
      class="border-2 border-white"
      @mouseover="hoverElement = true"
      @mouseleave="hoverElement = false"
    >
      <!-- header -->
      <div class="flex items-center justify-between">
        <span>To Do</span>
        <div class="flex space-x-4">
          <icon name="plus"></icon>
          <icon name="more"></icon>
        </div>
      </div>
    </div>
    <!-- body -->
    <div class="mt-4">
      <kanban-card></kanban-card>
    </div>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import KanbanCard from "@/components/KanbanCard";

export default {
  components: {
    Icon,
    KanbanCard,
  },
  data() {
    return {
      hoverElement: false,
    };
  },
};
</script>
