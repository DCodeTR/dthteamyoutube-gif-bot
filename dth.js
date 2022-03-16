const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setActivity(`!yardım | YOUTUBE DTH TEAM `, {
    type: "PLAYING"
  });

  console.log("ALTYAPI SORUNSUZ ÇALIŞIYOR. | YOUTUBE DTH TEAM ");
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "!kedi") {
    msg.channel.send(
      "https://tenor.com/view/cute-kitty-best-kitty-alex-cute-pp-kitty-omg-yay-cute-kitty-munchkin-kitten-gif-15917800"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!csgo") {
    msg.channel.send(
      "https://media.giphy.com/media/AhJmvcdiNRP1wbThuy/giphy.gif"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!valorant") {
    msg.channel.send(
      "https://tenor.com/view/kda-brimstone-valorant-dancing-gif-19786288"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!minecraft") {
    msg.channel.send(
      "https://tenor.com/view/minecraft-boxer-boxing-minecraft-boxer-gif-18025297"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!köpek") {
    msg.channel.send(
      "https://tenor.com/view/funny-animals-dog-dance-cute-smile-gif-12759384"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!eşek") {
    msg.channel.send("https://tenor.com/view/esek-hayvan-gif-10404795");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!maymun") {
    msg.channel.send(
      "https://tenor.com/view/funny-monkey-eat-hungry-adorable-cute-gif-16750529"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!koyun") {
    msg.channel.send("https://tenor.com/view/sheep-gif-5676898");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!youtube") {
    msg.channel.send(
      "https://www.youtube.com/channel/UCUj7NX8pTHOZ-_x2kkamGng"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!komut-sayım") {
    msg.channel.send("TOPLAM KOMUT SAYIM : **17**");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!ayı") {
    msg.channel.send(
      "https://tenor.com/view/bear-dance-dancing-lit-get-it-gif-11525375"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!yardım") {
    msg.channel.send(
      "```!kedi | !csgo | !valorant | !köpek | !minecraft | !youtube | !maymun | !eşek | !koyun | !komut-sayım | !ayı | !arı | !sinek | !inek```"
    );
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!arı") {
    msg.channel.send("https://tenor.com/view/ar%C4%B1-gif-19210137");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "!sinek") {
    msg.channel.send("https://tenor.com/view/fly-gif-5958663");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "!inek") {
    msg.channel.send(
      "https://tenor.com/view/cow-pick-nose-moo-not-funny-gif-16236502"
    );
  }
});

client.login("");
