---
sidebar_position: 1
---

# Installation and Updating Guide

## Installation

### 1. Install all dependencies

You will need to download the following resources, and ensure the mdt is started **after** these resources have started (Can always leave the mdt to start at the bottom of your server.cfg)

- [ox_lib](https://github.com/CommunityOx/ox_lib/releases)
- [oxmysql](https://github.com/CommunityOx/oxmysql/releases)

### 2. Configure

There is a number of different settings for the multicharacter, in which you can see find in the `config/config.lua`

## Framework Specific

### QBOX

Remove the old multicharacter and set the config as you like then

Navigate to **qbx_core** and go to `config/client.lua` and set `useExternalCharacters` to true

```lua title='config/client.lua'
useExternalCharacters = true
```

### QB CORE

Just remove the old multicharacter and set the config as you like

### ESX

Remove the below resources:
`esx_identity`
`esx_multicharacter`
