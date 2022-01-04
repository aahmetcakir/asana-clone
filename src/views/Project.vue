<template>
  <div class="px-3 bg-secondary pt-12 h-content">
    <kanban-column></kanban-column>
  </div>
</template>
<script>
import KanbanColumn from "@/components/KanbanColumn";
export default {
  components: {
    KanbanColumn,
  },
};
</script>
