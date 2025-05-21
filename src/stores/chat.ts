import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatStore = defineStore('chat', () => {
    const activeContact = ref();
    const messages = ref();
    const chatContacts =  [
        {
            id: 'dflkdj323kldsd322',
            name: 'Saad Majeed',
            contact: '+92 328 1912413'
        },
        {
            id: 'dflkdj3233ldsd322',
            name: 'Ali Nawaz',
            contact: '+92 328 3343893'
        },
        {
            id: 'dflkdj323k2dsd322',
            name: 'Rehmat Ali',
            contact: '+92 328 47239847'
        },
    ];

    const setActiveContact = (contact:any) => {
        activeContact.value = chatContacts.find(contacts => contacts.id == contact);
    }

    const getContactMessages = (contact : string) => {
        return 'messages are currently empty'
    }

    const sendMessage = (message:Object) => {
        fetch('',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    receiver: activeContact.value.id,
                })
            }
        )
    }

    return {activeContact, messages, chatContacts, setActiveContact, getContactMessages, sendMessage}
});