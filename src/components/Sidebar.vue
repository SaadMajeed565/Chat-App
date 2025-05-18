<script setup lang="ts">
import ContactItem from './Partials/ContactItem.vue';
import { useChatStore } from '@/stores/chat';
const chat = useChatStore();

const contacts = chat.chatContacts;

</script>
<template>
    <div class="flex flex-col h-screen mx-2 bg-white p-5 rounded-2xl basis-1/6">
        <div class="font-medium text-xl">Work Chats</div>
        <div class="flex flex-row text-xs font-medium justify-between my-3 gap-2">
            <div class="bg-blue-500 text-white p-2 rounded-xl cursor-pointer">All</div>
            <div class="bg-gray-100 p-2 rounded-xl cursor-pointer">Unread</div>
            <div class="bg-gray-100 p-2 rounded-xl cursor-pointer">Private</div>
            <div class="bg-gray-100 p-2 rounded-xl cursor-pointer">Group</div>
        </div>

        <!--contacts -->
        <div class="my-3 overflow-scroll overflow-x-hidden h-1000">
            <ContactItem @click="chat.setActiveContact(contact.id)" :user="contact" :key="contact.id" v-for="contact in contacts" />
        </div>
    </div>
</template>