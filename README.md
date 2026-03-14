# ServerWelcome

A minimal BeamMP client mod that shows a welcome popup with a Discord button automatically when a player joins the server.

## Preview

![ServerWelcome preview](https://raw.githubusercontent.com/5DROR5/ServerWelcome/main/ServerWelcome.png)

## Features

- Welcome popup appears automatically on join
- Discord button opens your invite link directly in the browser
- No server-side component required

## Installation

1. Place the contents of this mod into your client zip
2. Open `ui/modules/apps/ServerWelcome/app.js` and set your Discord invite link:
   ```javascript
   var DISCORD_URL = 'https://discord.gg/XXXXXXX';
   ```

## File Structure

```
YourMod.zip
├── lua/ge/extensions/
│   └── serverWelcome.lua              # GE extension — applies the UI layout on world load
├── scripts/
│   └── serverWelcome/
│       └── modScript.lua              # Loads the GE extension
├── ui/modules/apps/ServerWelcome/
│   ├── app.html
│   ├── app.js                         # ← set DISCORD_URL here
│   ├── app.css
│   └── app.json
└── settings/ui_apps/layouts/default/
    └── Welcome.uilayout.json          # Registers the app in the UI layout — do not remove
```

## License

The Unlicense (public domain)
