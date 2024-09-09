---
sidebar_position: 2
---

# Installation

Please find below the selected framework in which your server works and follow the step by step guide for the installation

## Install dependencies

- Install [depencies](./introduction#dependencies)

## QBCore

### Add script to server

- Download pure-spawnselector from keymaster
- Add pure-spawnselector to your resources folder of your choice
- Add this to your server.cfg such as below:

```python title="server.cfg"
ensure qb-core
# dependencies
ensure pure-spawnselector
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](configuration)

```python title="config/config.lua"
Framework = 'qbcore'
```

If you use qb-apartments then you need to uncomment the following line in the fxmanifest.lua

```python title="fxmanifest.lua"
Before:
shared_scripts {
  '@ox_lib/init.lua',
  -- '@qb-apartments/config.lua',
  'shared/**/*',
  'locales/**/*',
}
After:
shared_scripts {
  '@ox_lib/init.lua',
  '@qb-apartments/config.lua',
  'shared/**/*',
  'locales/**/*',
}
```

### Delete existing files

- Delete `qb-spawn` or alternative spawnselector resources from your resources folder

- Restart your server and enjoy!

## ESX

### Add script to server

- Download pure-spawnselector from keymaster
- Add pure-spawnselector to your resources folder of your choice
- Add this to your server.cfg such as below:

```python title="server.cfg"
ensure [core]
# dependencies
ensure pure-spawnselector
```

### Delete existing files

- Delete all clothing related resources from your resources folder such as below:

  - esx_spawnselector

- Restart your server and enjoy!

## QBOX

### Add script to server

- Download pure-spawnselector from keymaster
- Add pure-spawnselector to your resources folder of your choice
- Add this to your server.cfg such as below:

```python title="server.cfg"
ensure qbx_core
# dependencies
ensure pure-spawnselector
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](configuration)

```python title="config/config.lua"
Framework = 'qbox'
```

If you use qb-apartments then you need to uncomment the following line in the fxmanifest.lua

```python title="fxmanifest.lua"
Before:
shared_scripts {
  '@ox_lib/init.lua',
  -- '@qb-apartments/config.lua',
  'shared/**/*',
  'locales/**/*',
}
After:
shared_scripts {
  '@ox_lib/init.lua',
  '@qb-apartments/config.lua',
  'shared/**/*',
  'locales/**/*',
}
```

### Delete existing files

- Delete `qbx_spawn` or alternative spawnselector resources from your resources folder

- Restart your server and enjoy!

## Standalone

Change Framework to standalone in the config.lua and edit functions in the respected folders
