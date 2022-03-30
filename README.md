# OsuNowPlayingBot

A bot that sends what map you are playing in osu! to twitch chat when the command "!np" is run

Needs [gosumemory](https://github.com/l3lackShark/gosumemory) to be running to and a config.json file in the same directory

This needs to be run locally to get the beatmap information

## config.json

```
{
  "BOT_USERNAME": "username",
  "OAUTH_TOKEN": "oauth token from https://twitchapps.com/tmi/",
  "CHANNEL_NAME": "name of your channel"
}
```
