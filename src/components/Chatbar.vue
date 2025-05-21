<script setup lang="ts">
import { useChatStore } from '@/stores/chat';
import { computed, ref } from 'vue';

const chat = useChatStore();
const activeContact = computed(() => chat.activeContact);
const sendMessage = chat.sendMessage;

const userChat = ref();

const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        try {
            sendMessage('');
        } catch (error) {
            console.log(error);
        }
    }
}

const showOpenFilePicker = async () => {
    const handles = await window.showOpenFilePicker({
        multiple: true,
        types: [
            {
                description: 'Files',
                accept: {
                    'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
                    'application/pdf': ['.pdf'],
                    'text/plain': ['.txt'],
                }
            }
        ]
    })
};


</script>

<template>
    <div class="basis-full bg-white rounded-2xl justify-between flex flex-col">
        <div class="flex flex-row justify-between p-5 basis-1/6 border-b border-gray-300">
            <div class="flex items-center gap-3 rounded-2xl">
                <div
                    class="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {{ activeContact?.name[0] }}</div>
                <div class="flex flex-col justify-center">
                    <div class="flex flex-row justify-between">
                        <div class="text-md font-medium text-gray-800">{{ activeContact?.name }}</div>
                    </div>
                    <div class="text-xs text-gray-500 float-end">Last seen at 02:35am</div>
                </div>
            </div>
            <div class="flex flex-row gap-3">
                <div><i class="fa fa-phone text-blue-400 bg-gray-100 p-3 rounded-full cursor-pointer"></i></div>
                <div><i class="fa fa-video text-blue-400 bg-gray-100 p-3 rounded-full cursor-pointer"></i></div>
                <div><i class="fa fa-thumbtack text-blue-400 bg-gray-100 p-3 rounded-full cursor-pointer"></i></div>
                <div><i class="fa fa-search text-blue-400 bg-gray-100 p-3 rounded-full cursor-pointer"></i></div>
            </div>
        </div>
        <!-- chat -->
        <div id="chat-container" class="p-4 justify-end basis-full overflow-y-auto max-h-96"></div>
        <!-- <div id="chat-container" class="p-4 justify-end basis-full overflow-y-auto h-48 border border-gray-300 rounded-md flex flex-col"></div> -->
        <div class="bg-gray-100 px-2 m-4 rounded-xl flex flex-row items-center basis-1/12">
            <i class="fa fa-plus px-3 cursor-pointer"></i>
            <i class="fa fa-paperclip pr-3 cursor-pointer" @click="showOpenFilePicker"></i>
            <textarea class="bg-gray-100 w-full p-3 outline-none resize-none" rows="1" @keydown="handleKeyDown"
                placeholder="Type a message..." id="message"></textarea>
            <i class="fa-regular fa-paper-plane px-3 cursor-pointer" @click="sendMessage('')"></i>
        </div>
    </div>
</template>