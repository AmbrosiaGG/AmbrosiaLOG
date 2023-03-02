# ✨ Nova logger ✨



<p>A fast and simple way to add <span class="multicolortext">colored text</span> to your console</p>

## features 👇
* Discord webhook intergration!
* Logs into file!
* MongoDB intergration!
* Adds life to the console via Color!

## Images
![debug](https://github.com/nova-develoment-team/nova-log-js/blob/main/ReadmeImg/debug.png?raw=true)
![warn](https://github.com/nova-develoment-team/nova-log-js/blob/main/ReadmeImg/warn.png?raw=true)
![error](https://github.com/nova-develoment-team/nova-log-js/blob/main/ReadmeImg/error.png?raw=true)
## Setup
```js
const novalog = require('nova-log.js')
const log = new novalog()
log.debug('A debug message')
log.error('A error message')
log.warning('A warning message')
```

## Optional features

### Colorless
```js 
const novalog = require('nova-log.js')
const log = new novalog({ color: false })
log.debug('A debug message')
log.error('A error message')
log.warning('A warning message')
```

### Custom log folder
```js 
const novalog = require('nova-log.js')
const log = new novalog({ filePath: "path to folder" })
log.debug('A debug message')
log.error('A error message')
log.warning('A warning message')
```

### Discord webhook
* Optional: Add webhook_avatar: "Link to avatar" to add a custom avatar and webhook_username for custom username
```js 
const novalog = require('nova-log.js')
const log = new novalog({ discord_webhook: true, webhook_id: "Your webhook id", webhook_token: "Your webhook token" })
log.debug('A debug message')
log.error('A error message')
log.warning('A warning message')
```

![webhook](https://github.com/nova-develoment-team/nova-log-js/blob/main/ReadmeImg/discordwebhook.png?raw=true)
### MongoDB in progress!