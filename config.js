const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "INFINITY-MD;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxhTUlYLzVkV1NIdlRFWEc0TnRpdVFkbG5vNXpKV1RvKzg2blU1K0IyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVFOEJ3QlE3M1M4MS9sQzgwcXVhdWxUN0YvZDlRUXZ5Rm1ZUTlEWDlWaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QkFmeHpibGYwUWg1OHpxN3gxT3NsTDhPaVUwQzVpQlVNZWlxU2xXWFZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlM084RTlEWmNuOVF2MVlpaE9EQzBQbGNtVStQSTYvT3lOQUtCMEtRcndFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJRWZjQWZTSEZxOEFGYnhmMDhxUVJUL0psZXNYMVdtRDgrTU03ZzNLVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhrdzZEYmh1RXpoM3gwMDZPWTNOVndEZnlpbUY5eGJBVDc0YTA4WDVRQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Z0cjVPR2xlZDFhT3Vvcm5aVi8wcXorSXk1Qk16YnJGcmZqeURMN1hWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGtraWhOSVZLU1dwc0wvd3JJK2N3dHBCZk55SEd0b2F3MTVRNEdqR05DMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZwWUV4ckhRZ3EyTGxDOGUvZUYwOEZhTjNLTWpCMVhBTW5HZGtoNFRaWGMveWVvUEdEbjF2Nm53SUN1SkVPUG9HZGxCVVVXcDQ0Qkl0UVhYZnJ0TGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJMNXBuUHl0K0RWbXROaWpreGhEZW1WTUNSK3pHVUwzTHJlY3EzK25lVUxJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQ3NjE1ODYyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFEMzY5Q0ZDNzQ1MDk5MERDODQxRTk3MUUyNzYzMUJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTMxMzAyMDF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjEyM0xPVFVTIiwibWUiOnsiaWQiOiI1MDk0NzYxNTg2MjoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjAzMDY3MDk3MDk3ODoxQGxpZCIsIm5hbWUiOiLigKJ88J2QmOC5j+G1mOC4oPCdkIbwkJGC4Y2d1p/wnZaY4oCg8J2WhvCdlpcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PdGpwOEZFS25KK3NNR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJhWVRCYWJDcmRrQVdFdGxGNGVsdEUwN0tCbTgwbkY4Tk85S2dUM2dNbGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imw2U1BlSXg0ckpCb2QwVHJhWmsxczVOYklndm93R1FnSWk3RGwyMVBtYWdNVlo1UmlUQ2VWZjhQa3J5UDU0b2d3VktJNzhaNDhSa3Z1dW5Yd1dHT0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhT0ErL0JvMDFsdi9UUm1mQmdhWHZ2emdnZlhXcWhzTXRrOFVSZDgralltNjhiUk53eEQrc3VkdEUzNkJIR3gybnM4OGtvWlNyYnczQjdGcDc3VElpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ3NjE1ODYyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVdtRXdXbXdxM1pBRmhMWlJlSHBiUk5PeWdadk5KeGZEVHZTb0U5NERKWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzMTMwMTY1LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTDMyIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY INFINITY-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/rxuedn.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "INFINITY-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "INFINITY-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "50939103464",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "SIRIUS-TECH",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*> 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙎𝙄𝙍𝙄𝙐𝙎*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/rxuedn.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚒𝚗𝚏𝚒𝚗𝚒𝚝𝚢 𝚖𝚍 𝚒𝚜 𝚊𝚕𝚒𝚟𝚎⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "50939103464",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
