---
sidebar_position: 2
---

# Installation

Please find below the selected framework in which your server works and follow the step by step guide for the installation

## Install dependencies

- Install [depencies](./introduction#dependencies)

## QBCore

### Add script to server

- Download pure-clothing from keymaster
- Add pure-clothing to your resources folder of your choice
- Add this to your server.cfg below your qb-core:

```python title="server.cfg"
ensure qb-core
# dependencies
ensure pure-clothing
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](./configuration)

```python title="config/config.lua"
Framework = 'qbcore'
```

- Run the sql files `sql/`

### Delete existing files

- Delete `qb-clothing` or `illenium-appearance` or alternative clothing resources from your resources folder
- Delete any other clothing related resource such as qb-tattooshop etc
- Open your entire resource folder and check the manifests for dependencies for qb-clothing such as check `qb-houses` | `qb-apartments` etc and then remove these

```python title="fileExample/fxmanifest.lua"
dependencies {
    'qb-clothing'
}
```

- Restart your server and enjoy!

## ESX

### Add script to server

- Download pure-clothing from keymaster
- Add pure-clothing to your resources folder of your choice
- Add this to your server.cfg such as below:

```python title="server.cfg"
ensure [core]
# dependencies
ensure pure-clothing
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](./configuration)

```python title="config/config.lua"
Framework = 'esx'
```

- Run the sql files `sql/`

### Delete existing files

- Delete all clothing related resources from your resources folder such as below:
  - skinchanger
  - esx_skin
  - fivem-appearance
  - illenium-appearance
  - esx_clotheshop
  - esx_barbershop
  - esx_tattooshop etc
- Open your entire resource folder and check the manifests for dependencies for esx\*skin or skinchanger such as check `esx_ambulancejob` etc and then remove these

```python title="fileExample/fxmanifest.lua"
dependencies {
    'esx_skin'
}
```

- Restart your server and enjoy!

## qbox

- Download pure-clothing from keymaster
- Add pure-clothing to your resources folder of your choice
- Add this to your server.cfg below your qbx_core:

```python title="server.cfg"
ensure qbx_core
# dependencies
ensure pure-clothing
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](./configuration)

```python title="config/config.lua"
Framework = 'qbox'
```

- Run the sql files `sql/`

### fxmanifest

Uncomment out this line in your fxmanifest.lua

```python title="fxmanifest.lua"
Before:
client_scripts {
  -- '@qbx_core/modules/playerdata.lua', -- UNCOMMENT THESE IF YOU USE QBOX
  'client/**/*',
}
After:
client_scripts {
  '@qbx_core/modules/playerdata.lua', -- UNCOMMENT THESE IF YOU USE QBOX
  'client/**/*',
}
```

### Delete existing files

- Delete `qbx_clothing` or `illenium-appearance` or alternative clothing resources from your resources folder
- Delete any other clothing related resource such as qb-tattooshop etc
- Open your entire resource folder and check the manifests for dependencies for qbx_clothing such as check `qbx_houses` | `qbx_apartments` etc and then remove these

```python title="fileExample/fxmanifest.lua"
dependencies {
    'qbx_clothing'
}
```

## Standalone

Change Framework to standalone in the config.lua and edit functions in the respected folders
