const Discord = require("discord.js");

module.exports.Handler = async (message, command, raw) => {
switch (command) {

    case "ping":
      const m = await message.channel.send("Pinging...");
      m.edit(
        `Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`
      );
      break;
    case "explanation": // Command name
        // Whatever you want the bot to do.
    break; // Ends the command (always put this or else the code will break)
    
    
    
    
    default:
      return "Invalid command. Use >help more information.";
  }
};
