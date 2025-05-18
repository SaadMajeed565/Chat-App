<script setup lang="ts">
import { useChatStore } from '@/stores/chat';
import { computed } from 'vue';
const chat = useChatStore();
const activeContact = computed(() => chat.activeContact);
</script>
<template>
    <div class="basis-2/6 bg-white rounded-2xl mx-2">
        <div class="flex flex-col items-center m-5">
            <div
                class="bg-blue-400 w-20 h-20 p-4 my-2 rounded-full flex items-center justify-center text-white font-bold text-5xl basis-3/12">{{ activeContact.name[0] }}</div>
            <div class="font-medium text-gray-500 text-lg">{{ activeContact?.name }}</div>
            <div class="font-medium text-gray-400 my-2 text-sm">{{ activeContact?.contact}}</div>
        </div>
    </div>
</template>