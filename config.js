const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Pawny's-Bot" 


global.devs = "2348103392919" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103392919";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null, recording " ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_02_10_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA1OCxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDY5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJNam54TCtKZW4rNU5SWjV4bWVpeEUvUmRHNEwzb2l6T0dISHRaSVQrL2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFtUC1jVnNoUTZtWnBnenUtY2p5SndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjk2YTNlNzctNWZjNi00ZjU5LTk3ODctMTdmN2M5N2ExN2MyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDIwNyxcbiAgICAgIDIyNyxcbiAgICAgIDc2LFxuICAgICAgNTcsXG4gICAgICAyNTAsXG4gICAgICAyMjIsXG4gICAgICAyMjQsXG4gICAgICAxODUsXG4gICAgICA1OCxcbiAgICAgIDE4NixcbiAgICAgIDEwOCxcbiAgICAgIDE0OSxcbiAgICAgIDEyMixcbiAgICAgIDE4MCxcbiAgICAgIDQ3LFxuICAgICAgMTk4LFxuICAgICAgMjUwLFxuICAgICAgMjM4LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgNzAsXG4gICAgICA5NyxcbiAgICAgIDE0NyxcbiAgICAgIDE3LFxuICAgICAgMTE5LFxuICAgICAgMTY2LFxuICAgICAgMjEzLFxuICAgICAgODksXG4gICAgICAxMTAsXG4gICAgICAxMDgsXG4gICAgICA1NixcbiAgICAgIDEzOCxcbiAgICAgIDEzOSxcbiAgICAgIDI0NCxcbiAgICAgIDU1LFxuICAgICAgMjEyLFxuICAgICAgNTQsXG4gICAgICAxODAsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXNEhMNFk0SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMzM5MjkxOTo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlByaW5jZXBhd255XCIsXG4gICAgXCJsaWRcIjogXCIyNzczNjkxNTYyMzk1MDo0N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQM3JsL1lCRU9uVmc3a0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5tc2F2akJpYWpjVTZ3M2NVV1l5YUxUSG5pY3c5SHpXYTlLZGhoVDY5RkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMmE4WmMwZW40ZVpmc2I0WXAxOXZYamlYQW1sTTZ2NGpTRlVFdXVaY3IvVDQvY0ZhMUpYOUNwU3FOWVB2UUJHQ2lSSTl4QkdaVlJSMVdONmdaQXlURFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMUppNm9WQkE2QTBQOUM2YUVmWjNEeFJKSkI2bDIyMVE1dnJJaDMxanFjSGQyNk5mMzNaNkU3R3hXa2dUMzFYNnFwK0NYTzdpMnRoelZCR3pPb1gyZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMzM5MjkxOTo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDIxMDU0MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUEyMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTIxLmpzb24iOiAie1wia2V5RGF0YVwiOlwicmlXeEwwMXlQWVV3ZHdmSS80NGxCbkN6S25LWHcrelFQYW1IUkNyK0JuND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTYyOTAwNDUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDIwODYxMjAxNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "all",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『₱∆wñ¥• 𝕡𝕣𝕚𝕟𝕔𝕖𝕡𝕒𝕨𝕟𝕪』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝕡𝕒𝕨𝕟𝕪",
  packname: process.env.PACK_NAME || "𝕡𝕒𝕨𝕟𝕪",
  botname : process.env.BOT_NAME  || "𝕡𝕒𝕨𝕟𝕪𝕤-𝔹𝕠𝕥",
  ownername:process.env.OWNER_NAME|| "ℙ𝕣𝕚𝕟𝕔𝕖𝕡𝕒𝕨𝕟𝕪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ℙ𝕒𝕨𝕟𝕪-𝔹𝕠𝕥"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
