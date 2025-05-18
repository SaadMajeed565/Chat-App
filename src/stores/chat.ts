import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatStore = defineStore('chat', () => {
    const activeContact = ref();
    const messages = ref();
    const chatContacts =  [
        {
            id: 'dflkdj323kldsd322',
            name: 'Saad Majeed'
        },
        {
            id: 'dflkdj3233ldsd322',
            name: 'Ali Nawaz'
        },
        {
            id: 'dflkdj323k2dsd322',
            name: 'Rehmat Ali'
        },
    ];

    const setActiveContact = (contact:any) => {
        activeContact.value = contact
    }

    const getContactMessages = (contact : string) => {
        return 'messages are currently empty'
    }

    return {activeContact, messages, chatContacts, setActiveContact, getContactMessages}
});