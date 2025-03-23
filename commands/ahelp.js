const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
╔═══════════════════╗
   *🤖 ${settings.botName || 'Allola-WB'}*  
   Version: *${settings.version || '1.0.0'}*
   by ${settings.botOwner || 'eri!'}
╚═══════════════════╝

*Comandi Disponibili:*

╔═══════════════════╗
🌐 *Comandi Generali*:
║ ➤ .help or .menu
║ ➤ .ping
║ ➤ .alive
║ ➤ .tts <text>
║ ➤ .owner
║ ➤ .weather <city>
║ ➤ .attp <text>
║ ➤ .groupinfo
║ ➤ .staff or .admins 
║ ➤ .vv
╚═══════════════════╝

╔═══════════════════╗
🎨 *Comandi Immagine/Sticker*:
║ ➤ .simage <reply to sticker>
║ ➤ .sticker <reply to image>
║ ➤ .take <packname> 
╚═══════════════════╝   

╔═══════════════════╗
🛠️ *Comandi Admin*:
║ ➤ .ban @user
║ ➤ .promote @user
║ ➤ .demote @user
║ ➤ .mute <minutes>
║ ➤ .unmute
║ ➤ .delete or .del
║ ➤ .kick @user
║ ➤ .warnings @user
║ ➤ .warn @user
║ ➤ .antilink
║ ➤ .antibadword
║ ➤ .clear
║ ➤ .tag <message>
║ ➤ .tagall
║ ➤ .chatbot
║ ➤ .resetlink
╚═══════════════════╝

╔═══════════════════╗
🛠️ *Comandi Proprietario*:
║ ➤ .mode
║ ➤ .autostatus
║ ➤ .clearsession
╚═══════════════════╝

╔═══════════════════╗
🎯 *Downloader*:
║ ➤ .play <song_name>
║ ➤ .song <song_name>
╚═══════════════════╝

:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'Allola-WB',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363161513685998@newsletter',
                        newsletterName: 'Allola-WB',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Errore nel comando di aiuto:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
