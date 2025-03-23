const { handleAntiBadwordCommand } = require('../lib/antibadword');
const isAdminHelper = require('../helpers/isAdmin');

async function antibadwordCommand(sock, chatId, message, senderId, isSenderAdmin) {
    try {
        if (!isSenderAdmin) {
            await sock.sendMessage(chatId, { text: '```Solo per gli amministratori del gruppo!```' });
            return;
        }

        // Extract match from message
        const text = message.message?.conversation || 
                    message.message?.extendedTextMessage?.text || '';
        const match = text.split(' ').slice(1).join(' ');

        await handleAntiBadwordCommand(sock, chatId, message, match);
    } catch (error) {
        console.error('Errore nel processare il comando antibadword:', error);
        await sock.sendMessage(chatId, { text: '*Errore nel processare il comando antibadword*' });
    }
}

module.exports = antibadwordCommand; 
