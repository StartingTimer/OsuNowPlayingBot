const tmi = require("tmi.js");
const fs = require("fs");
const axios = require("axios");

try {
  config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
} catch (error) {
  console.log("Error reading config.json");
}

// Define configuration options
const client = new tmi.Client({
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: config.BOT_USERNAME,
    password: config.OAUTH_TOKEN,
  },
  channels: [config.CHANNEL_NAME],
});

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect().catch(console.error);

function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  }

  const commandName = msg.trim();

  if (commandName === "!np") {
    getCurrentMap()
      .then((data) => {
        url = `https://osu.ppy.sh/beatmapsets/${data.menu.bm.set}#osu/${data.menu.bm.id}`;
        client.say(
          target,
          `${config.CHANNEL_NAME} is currently playing: ${url}`
        );
        console.log(`* Executed ${commandName} command`);
      })
      .catch((error) => {
        console.log("make sure gosumemory is running!");
      });
  }
}

function getCurrentMap() {
  return axios
    .get("http://127.0.0.1:24050/json")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("Make sure gosumemory is running!");
    });
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
