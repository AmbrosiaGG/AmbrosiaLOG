# ✨ Nova logger ✨

<style>
      .multicolortext {
        background-image: linear-gradient(to left, violet, indigo, green, blue, yellow, orange, red);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
      }
</style>

<p>A fast and simple way to add <span class="multicolortext">colored text</span> to your console</p>

## features 👇
* Discord webhook intergration!
* Logs into file!
* MongoDB intergration!

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

avatar 
username

### MongoDB in progress!