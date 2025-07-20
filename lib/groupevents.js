const { isJidGroup } = require('@whiskeysockets/baileys');
const config = require('../config');

const getContextInfo = (m) => ({
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363328294650605@newsletter',
        newsletterName: '𝙸𝙽𝙵𝙸𝙽𝙸𝚃𝚈-𝙼𝙳',
        serverMessageId: 143,
    },
});

const ppUrls = [
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
    'https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png',
];

const GroupEvents = async (conn, update) => {
    try {
        const isGroup = isJidGroup(update.id);
        if (!isGroup || !update?.participants || !update?.action) return;

        // Empêche les appels à groupMetadata si pas nécessaire
        let metadata;
        try {
            metadata = await conn.groupMetadata(update.id);
        } catch (metaErr) {
            if (metaErr?.data === 403) {
                console.warn(`⚠️ Accès refusé à groupMetadata pour ${update.id}`);
                return;
            }
            throw metaErr;
        }

        const participants = update.participants;
        const desc = metadata.desc || "No Description";
        const groupMembersCount = metadata.participants.length;

        for (const num of participants) {
            const userName = num.split("@")[0];
            const timestamp = new Date().toLocaleString();
            let ppUrl;

            // Récupérer photo de profil utilisateur ou fallback
            try {
                ppUrl = await conn.profilePictureUrl(num, 'image');
            } catch {
                try {
                    ppUrl = await conn.profilePictureUrl(update.id, 'image');
                } catch {
                    ppUrl = ppUrls[Math.floor(Math.random() * ppUrls.length)];
                }
            }

            // Actions selon le type d'événement
            if (update.action === "add" && config.WELCOME === "true") {
                const WelcomeText = `Hey @${userName} 👋\n` +
                    `Welcome to *${metadata.subject}*.\n` +
                    `You are member number ${groupMembersCount} in this group. 🙏\n` +
                    `Time joined: *${timestamp}*\n` +
                    `Please read the group description to avoid being removed:\n` +
                    `${desc}\n` +
                    `*Powered by ${config.BOT_NAME}*`;

                await conn.sendMessage(update.id, {
                    image: { url: ppUrl },
                    caption: WelcomeText,
                    mentions: [num],
                    contextInfo: getContextInfo({ sender: num }),
                });

            } else if (update.action === "remove" && config.WELCOME === "true") {
                const GoodbyeText = `Goodbye @${userName}. 😔\n` +
                    `Another member has left the group.\n` +
                    `Time left: *${timestamp}*\n` +
                    `The group now has ${groupMembersCount} members. 😭`;

                await conn.sendMessage(update.id, {
                    image: { url: ppUrl },
                    caption: GoodbyeText,
                    mentions: [num],
                    contextInfo: getContextInfo({ sender: num }),
                });

            } else if (update.action === "demote" && config.ADMIN_EVENTS === "true") {
                const demoter = update.author.split("@")[0];
                await conn.sendMessage(update.id, {
                    text: `*Admin Event*\n\n@${demoter} has demoted @${userName} from admin. 👀\nTime: ${timestamp}\n*Group:* ${metadata.subject}`,
                    mentions: [update.author, num],
                    contextInfo: getContextInfo({ sender: update.author }),
                });

            } else if (update.action === "promote" && config.ADMIN_EVENTS === "true") {
                const promoter = update.author.split("@")[0];
                await conn.sendMessage(update.id, {
                    text: `*Admin Event*\n\n@${promoter} has promoted @${userName} to admin. 🎉\nTime: ${timestamp}\n*Group:* ${metadata.subject}`,
                    mentions: [update.author, num],
                    contextInfo: getContextInfo({ sender: update.author }),
                });
            }
        }
    } catch (err) {
        console.error('❌ Group event error:', err.message || err);
    }
};

module.exports = GroupEvents;
