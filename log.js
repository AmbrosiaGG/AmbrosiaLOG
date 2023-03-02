const { red, green, grey, blue, yellow, black, bold } = require("chalk");
const chalk = require('chalk')
const dayjs = require("dayjs");
const fs = require("fs");
const formatted = dayjs().format("YYYY-MM-DD H:m:s");
const discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
class Client {
  constructor(
    options = {
      logPath: "./logs",
      discord_webhook: false,
      webhook_id: null,
      webhook_token: null,
      mongodb: false,
      mongo_url: null,
      color: true,
      webhook_avatar: null,
      webhook_username: null,
    }
  ) {
this.options = {
   options: options 
    } 
     
if (options.discord_webhook == true) {
if (options.discord_id) {
  console.log('You forgot to put your webhook token')
  console.log('Exiting to avoid problems')
  process.exit(1)
}

if(options.discord_token) {
  console.log('You forgot to put your webhook token')
  console.log('Exiting to avoid problems')
  process.exit(1)
}

  var id = options.webhook_id;
  var token = options.webhook_token
  var logs = new discord.WebhookClient(id, token)
  console.log('Starting up with webhook logging')
} else {
  console.log('Starting up without webhook logging')
}
if (options.mongodb == true) {
  const { Database } = require('quickmongo')
  const db = new Database(options.mongo_url+"/log")
}

var folderName = options.logPath
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

this.debug = function (text) {
 if (options.color == true) {
  console.debug(
    `${grey(`${formatted}`)} || ${chalk.bgBlue("[ DEBUG ]")} ${grey(" :: ")} ${green(
      `${text}`
    )}`
  );
    } else { 
      console.debug(
      `${formatted} || [ DEBUG ] :: ${text}`
    );
    }

    if (options.discord_webhook == true){
      var embed = new MessageEmbed()
.setColor("GREEN")
.setTitle(`Debug log`)
.setDescription(
  `${text}
`
)
.setFooter(`${formatted}`)


logs.send({
username: options.webhook_username || "NovaLog.js",
avatarURL: options.webhook_avatar || `https://cdn.discordapp.com/avatars/896303947311104041/06a3057d95612a58b10c4c11d9c99559.png?size=2048`,
embeds: [embed],
})
    }

  fs.readFile(options.logPath+"/debug.log", "utf8", (err, data) => {
    var abc = fs.createWriteStream(options.logPath+`/debug.log`);
    abc.write(`${data} \n`);
    abc.write(`${formatted} || [ DEBUG ] :: ${text} \n`);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
  });
};

const error = function (text) {
  if (options.color == true) {
    console.error(
      `${grey(`${formatted}`)} || ${chalk.bgBlue("[ ERROR ]")} ${grey(" :: ")} ${green(
        `${text}`
      )}`
    );
      } else { 
        console.error(
        `${formatted} || [ ERROR ] :: ${text}`
      );
      }


    if (options.discord_webhook == true){
      var embed = new MessageEmbed()
.setColor("RED")
.setTitle(`Error log`)
.setDescription(
  `${text}
`
)
.setFooter(`${formatted}`)

logs.send({
username: options.webhook_username || "NovaLog.js",
avatarURL: options.webhook_avatar || `https://cdn.discordapp.com/avatars/896303947311104041/06a3057d95612a58b10c4c11d9c99559.png?size=2048`,
embeds: [embed],
});
    }

  fs.readFile(options.logPath+"/error.log", "utf8", (err, data) => {
    var abc = fs.createWriteStream(options.logPath+`/error.log`);
    abc.write(`${data} \n`);
    abc.write(`${formatted} || [ ERROR ] :: ${text} \n`);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
  });
};

this.warn = function (text) {
  if (options.color == true) {
    console.warn(
      `${grey(`${formatted}`)} || ${chalk.bgBlue("[ WARNING ]")} ${grey(" :: ")} ${green(
        `${text}`
      )}`
    );
      } else { 
        console.warn(
        `${formatted} || [ WARNING ] :: ${text}`
      );
      }
      

      if (options.discord_webhook == true){
        var embed = new MessageEmbed()
  .setColor("YELLOW")
  .setTitle(`Warning log`)
  .setDescription(
    `${text}
  `
  )
  .setFooter(`${formatted}`)
  
  logs.send({
  username: options.webhook_username || "NovaLog.js",
  avatarURL: options.webhook_avatar || `https://cdn.discordapp.com/avatars/896303947311104041/06a3057d95612a58b10c4c11d9c99559.png?size=2048`,
  embeds: [embed],
  });
      }

      fs.readFile(options.logPath+"/warnings.log", "utf8", (err, data) => {
    var abc = fs.createWriteStream(options.logPath+`/warning.log`);
    abc.write(`${data} \n`);
    abc.write(`${formatted} || [ WARNING ] :: ${text} \n`);
    abc.write(
      "< - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - > \n"
    );
    abc.end();
  });
};
}
}

module.exports = {
  Client
};
