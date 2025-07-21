const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "INFINITY-MD;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0dUcHBlQUMxKzZoejVOOHdnTThWdWZ0RFNGc3lvSDRyTXV1WHFrRVkzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTRDaHNndFNLcUxVSWRqN1RLcE1VWU9UakUvb1htTktkelY3UGhXZmtXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlS1pVdm91YVY2RFQ1QmNEZG5VMHRCUHFzSER4a3ErWCtsY200dC9BcW1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYbHFRZ2o1OEliM21MSENLQ0xRSW56V291NVg0aFlOckJsNnBvUVZSMERBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCeittSEtSbGRMbU1panBraU0xcDVTcit5ck9JcnphN2J1MDRQL2k4MzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR4WXphaVI4Z2JCV1R6WHVSQSt5cFVmRnJtZTJLZ2ZjeDNQTlg4TWNpMDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1SMEFlMFRTaVF4MmRRK21LckZOSDFJTXJsVTZNR2tsSlIvTmFyOVBrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGZFaFZDTmdFRVZ3ejM3Z1hsZHRYb2tXK05OM1NoZFVKbFpmbTU3TFR4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlWQ1hhYjF5N1krbnJoNTVOOTFEbVA5NnpMNmRTY1JodlJuWXFhem9QS3luU1B2cnI2VHZ6c2dpaUs3K2tRSFlqdGI5ZFh2R0U1eFZhN0x3R1AzU2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiI3VDhWV1dlTWtwUEh6c2IxQUtIcmJ1VzZKK3E5ViswenlEbEZwYzB6bXg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiNTA5NDc2MTU4NjI6OThAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI2MDMwNjcwOTcwOTc4Ojk4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT090anA4RkVObVUrc01HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUmFZVEJhYkNyZGtBV0V0bEY0ZWx0RTA3S0JtODBuRjhOTzlLZ1QzZ01sZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibzV5YlpBWkJZQmd2VUE3WXpxUFZmOHl2c0dqRkdjSmhFMmV1cFZjYVVoWTN1ODk4d3R4eEh4SnJNeDY2a3lKQWhCTEQ1dDhFZEZtcC9mYnJSZXpRRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IllneCtyMWw0aWVlQXkvUXY3M2RRR2QwdmxEb2hzWVNPWGE0MkcxdHArbStxdVEwTUpBWGw4TTd0YUtLS0g1Z05leWRrUk8wbFZHeVYzUmwydVcxemlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDc2MTU4NjI6OThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVVdtRXdXbXdxM1pBRmhMWlJlSHBiUk5PeWdadk5KeGZEVHZTb0U5NERKWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzMTIzNDI5LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTDMxIn0=",
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
