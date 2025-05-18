<script setup lang="ts">
import MiniSidebar from '@/components/MiniSidebar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Chatbar from '@/components/Chatbar.vue';
import RightSidebar from '@/components/RightSidebar.vue';
</script>

<template>
  <div class="flex flex-row bg-gray-100">
    <MiniSidebar />
    <Sidebar />
    <Chatbar />
    <RightSidebar />
  </div>
</template>
