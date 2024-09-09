---
sidebar_position: 2
---

# Installation

Please find below the selected framework in which your server works and follow the step by step guide for the installation

## Install dependencies

- Install [depencies](./introduction#dependencies)

## QBCore

### Add script to server

- Download pure-multicharacter from keymaster
- Add pure-multicharacter to your resources folder of your choice
- Add this to your server.cfg such as below:

```python title="server.cfg"
ensure qb-core
# dependencies
ensure pure-multicharacter
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](configuration)

```python title="config/config.lua"
Framework = 'qbcore'
```

### Delete existing files

- Delete `qb-multicharacter` or alternative multicharacter resources from your resources folder

- Restart your server and enjoy!

## ESX

### Add script to server

- Download pure-multicharacter from keymaster
- Add pure-multicharacter to your resources folder of your choice
- Add this to your server.cfg such as below:

```python title="server.cfg"
ensure [core]
# dependencies
ensure pure-multicharacter
```

- Navigate to core/es_extended/config.lua and change this setting

```python title="core/es_extended/config.lua"
Change this:

Config.Multichar                 = GetResourceState("esx_multicharacter") ~= "missing" @ line 47

To this:

Config.Multichar                 = true
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](/clothing/configuration)

```python title="config/config.lua"
Framework = 'esx'
```

### Delete existing files

- Delete all clothing related resources from your resources folder such as below:

  - esx_multicharacter
  - esx_identity

- Restart your server and enjoy!

## QBOX

### Add script to server

- Download pure-multicharacter from keymaster
- Add pure-multicharacter to your resources folder of your choice
- Add this to your server.cfg such as below:

```python title="server.cfg"
ensure qbx_core
# dependencies
ensure pure-multicharacter
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](configuration)

```python title="config/config.lua"
Framework = 'qbox'
```

### Delete existing files

- Delete `qbx_multicharacter` or alternative multicharacter resources from your resources folder

- Restart your server and enjoy!

## Standalone

Change Framework to standalone in the config.lua and edit functions in the respected folders
