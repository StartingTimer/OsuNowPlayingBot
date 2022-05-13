const tmi = require("tmi.js");
const fs = require("fs");
const axios = require("axios");

// read config file
try {
  config = JSON.parse(fs.readFileSync("./config.json", "utf8"));
} catch {
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
        url = `https://osu.ppy.sh/b/${data.menu.bm.id}`;
        length = new Date(data.menu.bm.time.full);
        length = `${length.getMinutes()}:${length.getSeconds()}`;
        beatmap = `${data.menu.bm.metadata.artist} - ${data.menu.bm.metadata.title} [${data.menu.bm.metadata.difficulty}]`;
        client.say(
          target,
          `@${context.username}, ${config.CHANNEL_NAME} is now playing: ${beatmap}, ${data.menu.bm.stats.SR}★, ${length} Download: ${url}`
        );
        console.log(`* Executed ${commandName} command`);
      })
      .catch(() => {
        console.log("make sure gosumemory is running!");
      });
  }
}

// Fuck websockets all my homies hate websockets
function getCurrentMap() {
  return axios
    .get("http://127.0.0.1:24050/json")
    .then(({ data }) => {
      return data;
    })
    .catch(() => {
      console.log("Make sure gosumemory is running!");
    });
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
