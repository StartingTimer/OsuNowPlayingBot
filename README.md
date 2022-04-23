# OsuNowPlayingBot

[![CodeFactor](https://www.codefactor.io/repository/github/startingtimer/osunowplayingbot/badge/main)](https://www.codefactor.io/repository/github/startingtimer/osunowplayingbot/overview/main)

A Twitch bot that sends what map you are playing in osu! to twitch chat when the command "!np" is run

Needs [gosumemory](https://github.com/l3lackShark/gosumemory) to be running and a config.json file in the same directory

This needs to be hosted locally to get the beatmap information

You can use your broadcaster account with it or make a seperate one to be the bot

~~only works on standard~~ you have to have right gamemode selected for it to work properly

## Setup
### Prepackaged Binary
1. Download [index.exe](index.exe) and [config.json](config.json) you can download them by right clicking them and clicking save link as
2. setup config.json to have the username of the bot account, the oauth token of said account and the name of your channel
3. Run ``index.exe``

### node.js
1. Install [node.js](https://nodejs.org/en/) if it isn't already installed
2. Clone the repository
3. run ``npm install``
4. setup config.json to have the username of the bot account, the oauth token of said account and the name of your channel
5. run ``node index.js`` and the bot should run 

make sure gosumemory is running or the bot will not work

## config.json

```
{
  "BOT_USERNAME": "username of your channel/bot channel",
  "OAUTH_TOKEN": "oauth token from https://twitchapps.com/tmi/",
  "CHANNEL_NAME": "username of your channel"
}
```
