<script setup lang="ts">
import { computed, ref } from 'vue';
import { useChatStore } from '@/stores/chat';

const chat = useChatStore();
const props = defineProps({
    user : Object
});

const userName = props.user?.name.slice(0, 8);
const isActive = computed(() => chat.activeContact?.id === props.user?.id);


const emit = defineEmits(['select']);
</script>
<template>
    <div class="flex items-center gap-3 my-1 p-3 shadow-md rounded-2xl cursor-pointer" :class="isActive ? 'bg-blue-500' : ''">
        <div class="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg basis-3/12">{{ userName[0] }}</div>
        <div class="flex flex-col justify-center basis-5/6">
            <div class="flex flex-row justify-between">
                <div class="text-md font-medium" :class="isActive ? 'text-white' : 'text-gray-800'">{{ userName}}</div>
                <div class="text-xs  float-end" :class="isActive ? 'text-white' : 'text-gray-500'">02:35am</div>
            </div>
            <div class="text-xs font-medium" :class="isActive ? 'text-white' : 'text-gray-600'">Yes! I'll be there.</div>
        </div>
    </div>
</template>