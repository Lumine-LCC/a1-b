// Discord: https://discord.gg/Yx2NHSNQrb
// Author: Auth
// Date: 2022-12-04
// Version: 1.0.0

const { execSync } = require("child_process");
const fs = require("fs");

if (!fs.existsSync("./node_modules")) {
  console.log("Installing Libraries!");
  execSync('npm install discord.js express nodemon').then('\n\nInstallation was successful!');
} else {
  console.log("Libraries already installed!");

  // Libraries

  const Discord = require("discord.js");
  const express = require("express");
  const path = require("path");

  // Variables

  const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
  const config = require("./bin/config/bot-config.json");
  const app = express();
  const port = config.port;

  // Connections

  ["handler"].forEach((_) => {
    require(`./source/${_}.js`)
  });

  client.on('messageCreate', async (message) => {
    if (message.author.bot) return
    let raw = message.content.split(" ")
    raw.shift()
    raw = raw.join(" ")
    if (message.content.startsWith(config.prefix)) {
        const Content = await Handler(message,message.content.split(" ")[0].substring(1),raw)
        if(Content) message.channel.send(Content).catch((err) => {
          return console.log(err);
        })
    }
  })

  client.login(config.token);
  app.listen(port, () => console.log(`Listening on port ${port}!`));
}
