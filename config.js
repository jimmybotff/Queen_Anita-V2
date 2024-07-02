//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lUcHRKQy9ONk8wd3NVaC9CdTNBRjBpeDEwaS9RTlhBTVg1c2N1SHpVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEFwZUZnemlUQXRxYXlIN3JMMjhxRi83ejdETXpEbEhUNUIyL1NzTDdsQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrR2crRFNnNnJXSXBCNjBmSjVsdUUwVHhmaDlRSHNvY1lmMXY2UGRCNkYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFdKbVZXeG02dnNtSW05OTZlMkNnaXMzQU1TM3kxTElPc0FLeDVmQjE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Ed0RxWWptcEtITVpKNGJIbGRUYTNsZVVwSWhXWi9MKzIxdUFSN0FyMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhDZkc2NmNsUlRwZmxBSTZIMzdhdWIvZ0FvNHRxeWh1b1NTYjJMUlFSZ0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0V4aW5iQk1vcVJTM2RsNWRRMWRpcVI5VDhldEh5S1ZESVllSlljY3JFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmprK0VXSDZjWWc1SVJDeXU0WFB4YS85Ly9mRWxCU3c2TDJSYmNQSXNrTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5uZ05zTlB0aDlpejdhN1RMOERrdmJqbk9EeThSSHBCekJxUkVoZHFVcjZ0Zlp3anhSR2FYbGp0UnQ2MkFYc0JGL2NCaHNZSFFJeko1UFhUYVJUUEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJBY0FSaVBGNVdpZ2tCT21YZktSOVJ0UUNnYVpyK2k5MU1IMU9mS2ZmSzdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNjM3NDcyNjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNEE4N0Y3Qzk5RUZDQTQ5QzNBOEQ0NkFEQjBFQUUxMDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTk0MTQ1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA2Mzc0NzI2NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5OEE2NjYzNTkzODc0QkI0RTg4NzlENzExMjI1M0U4QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5OTQxNDUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVR0d4dE5oOFJVNlBYTzBISzVsdVl3IiwicGhvbmVJZCI6IjYxNzRlNGZmLTRlNWQtNDc3NC1iNTA0LWZhYzVlOTA3NDM1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3aW5aaFJaWFdYSmo5eE9IWEUzSUYwTncyR2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSml6NHR0b3BnN3RCRWhrMzRpZDlSQXRHeFdnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjMxTEJLSEQ1IiwibWUiOnsiaWQiOiIyMzQ4MDYzNzQ3MjY0OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpJTU1ZIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPL3JwTDhERUx2eWtMUUdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvVkdNNFM4bW9YNXBaK2oyNmpSQUowck45Z2xlYkFqdGIreXlaYjFQTXlBPSIsImFjY291bnRTaWduYXR1cmUiOiJCRW9Xam1VOHJkKzRuV0M0TTFsUW9IYmFJZnZnN2hDSWMzS3ZsOFFYdXJXM3lpNzE1VERVS1BRdE0rR1FrdmVqa2R1WFJxdUpEdkFEdEhQekxpdmZEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWWtPbzVKcUgzSVd2WGFpajJuNGxtakdLK2lhM0UvTWJ1WXIxbVF0M1pBcmNRSnEwdTZ6cXVKa2E1U2JwbWg5dEJLeG9TL3lyT2JSTFNDTnhoSjVuQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDYzNzQ3MjY0OjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFGUmpPRXZKcUYrYVdmbzl1bzBRQ2RLemZZSlhtd0k3Vy9zc21XOVR6TWcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5NDE0NDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGVlIn0=";
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
