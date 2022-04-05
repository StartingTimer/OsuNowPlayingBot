# OsuNowPlayingBot

A Twitch bot that sends what map you are playing in osu! to twitch chat when the command "!np" is run

Needs [gosumemory](https://github.com/l3lackShark/gosumemory) to be running to and a config.json file in the same directory

This needs to be hosted locally to get the beatmap information

You can use your broadcaster account with it or make a seperate one to be the bot

~~only works on standard~~ you have to have right gamemode selected for it to work properly

## Setup
If you don't want to go to the hassle of setting up node.js you can just use the executable and setup the config file appropriately

### node.js
Install [node.js](https://nodejs.org/en/)

1. Clone the repository
2. run ``npm install``
3. setup config.json to have the username of the bot account, the oauth token of said account and the name of your channel
4. run ``node index.js`` and the bot should run 

make sure gosumemory is running or the bot will not work

## config.json

```
{
  "BOT_USERNAME": "username of your channel/bot channel",
  "OAUTH_TOKEN": "oauth token from https://twitchapps.com/tmi/",
  "CHANNEL_NAME": "username of your channel"
}
```
