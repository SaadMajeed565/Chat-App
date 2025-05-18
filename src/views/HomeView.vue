<script setup lang="ts">
import MiniSidebar from '@/components/MiniSidebar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Chatbar from '@/components/Chatbar.vue';
import RightSidebar from '@/components/RightSidebar.vue';
import NoChat from '@/components/NoChat.vue';
import { useChatStore } from '@/stores/chat';
const chat = useChatStore();
</script>

<template>
  <div class="flex flex-row bg-gray-100">
    <MiniSidebar />
    <Sidebar />
    <Chatbar v-if="chat.activeContact" />
    <RightSidebar v-if="chat.activeContact" />
    <NoChat v-else />
  </div>
</template>
