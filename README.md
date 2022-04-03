# OsuNowPlayingBot

A Twitch bot that sends what map you are playing in osu! to twitch chat when the command "!np" is run

Needs [gosumemory](https://github.com/l3lackShark/gosumemory) to be running to and a config.json file in the same directory

This needs to be hosted locally to get the beatmap information

You can use your broadcaster account with it or make a seperate one to be the bot

~~only works on standard~~ you have to have right gamemode selected for it to work properly

## config.json

```
{
  "BOT_USERNAME": "username of your channel/bot channel",
  "OAUTH_TOKEN": "oauth token from https://twitchapps.com/tmi/",
  "CHANNEL_NAME": "username of your channel"
}
```
