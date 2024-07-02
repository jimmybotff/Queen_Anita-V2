//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pVOHQ2dUhrd3pNVmluU1dOL281WktzMDJmaHpDazZNT1pXSng2ZHluTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURSV3VjakVmYlAwalR5S1A3SzE2TUI5bnN4MmZXZFFFeHNveGNNVGQzVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTmJ5VXJJbzVrenVqSy8yNW42TDB0ODRuZ2JZcCtPRFhxaUo4V2VWZ1hzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyR3ozcTNVMi85eGxoNzNaQ2I2bHc3Y0pDbXNCSkszTzE0Unh4cjF3bzNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPcitkMVBzRlMxZjFMVnF6MmljYXVYWEtzaVgwSjQ1V1RSS3ZnakRGWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklVSWRIa2pza0toMmY5dzBtWTk1VUkvYXJZSWtFVFIyVWx0YkZxMXZ4RTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid002aXliSHdBRnRzN00xRkxqNnBIeTZyeTJTUmlPa2JHQ0pNY24rNDYzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieForL3hYVlRaSmQyZ1FQUW1HSFZzeGIwWDI1MnhrRlJmcG9xZTZiMXdUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ISGMwRHQ5TnMwT1VvRXlHeWgyTnZ4eVl5dWl1TjVseVFEQjY1MC9MSzJHOWt0aVZ5Q0NkOXNsMlh4QVEzVmZRem44SGR3a1lVV3BOcEtVNGdCN0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJhemZqeXJvSk1EZzdWUE82OHZmeS96aUJTNE1FcnExWU8wK3RvN254RzRnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNjM3NDcyNjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTM4NzkzMTgzOUU3MDI3OUVDNjA4RDkxNzFFQzAwRDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTkwNDIxOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTWxFUDUwVWlRV3F6SG1jVkdBNFB4QSIsInBob25lSWQiOiI2ZjVlNTM2ZC1mNzM0LTQzMGEtYTNhYS0xNTEzYTI5ZjMzNGEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzRUcytsbVZpUTA0Z3VlazZzZEhIUUJzN3lJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXYlFFdmFFM0FLYjFFK0dYRFduSnVFUVhxSm89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPL3JwTDhERU1yUGpyUUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvVkdNNFM4bW9YNXBaK2oyNmpSQUowck45Z2xlYkFqdGIreXlaYjFQTXlBPSIsImFjY291bnRTaWduYXR1cmUiOiJZREQ5RnpzWVloUEZ1UVRWbzk2K0FmUExscSsrelBkYzg0S2hrdnV4U1ZYVUxFdkpZaE13Q1ZjcWZ5cTRZRU1ZNWNacXFLSzkva201NHB1L1FnbHZDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMUlHak40SzZYSnpxQ3ZpT0R1Q1ViMFJqZHphOURyekhCeGlUeXlDWVpMYnUvRGM2YmtEYnRCem5GSmdVSm9uSkV6REFCb0hSYkhJYUdCNTdBUzM2RHc9PSJ9LCJtZSI6eyJpZCI6IjIzNDgwNjM3NDcyNjQ6MjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSklNTVkifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2Mzc0NzI2NDoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhRlJqT0V2SnFGK2FXZm85dW8wUUNkS3pmWUpYbXdJN1cvc3NtVzlUek1nIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTA0MjE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURlZSJ9=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
