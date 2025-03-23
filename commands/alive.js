async function aliveCommand(sock, chatId) {
    try {
        const message = `*AllolaBot è Attivo!*\n\n` +
                       `*Versione:* 1.0.0\n` +
                       `*Stato:* Online\n` +
                       `*Modalità:* Pubblica\n\n` +
                       `Digita *.menu* per l'elenco completo dei comandi`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: ' ABot MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Il bot campa ancora!' });
    }
}

module.exports = aliveCommand;
