---
sidebar_position: 2
---

# Installation

Please find below the selected framework in which your server works and follow the step by step guide for the installation

<!-- TODO: SQL TELL THEM TO INSTALL IT -->

## Install dependencies

- Install [depencies](./introduction#dependencies)

## QBCore

### Add script to server

- Download pure-crafting from keymaster
- Add pure-crafting to your resources folder of your choice
- Add this to your server.cfg below your qb-core:

```python title="server.cfg"
ensure qb-core
# dependencies
ensure pure-crafting
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](./configuration)

```python title="config/config.lua"
Framework = 'qbcore'
```

### Delete existing files

- Delete any gang related resources from your resources folder

### Inventory

- Navigate to your selected inventory from `server/inventory/` and then scroll to the bottom to find the items list
- Add these items to your inventoryItems
- Navigate to `INSTALLFILES/images` and add these to your retrospective inventory icon folder

### SQL

- Navigate to the `INSTALLFILES/sql` folder and run the SQL file in your database

- Restart your server and enjoy!

## ESX

### Add script to server

- Download pure-crafting from keymaster
- Add pure-crafting to your resources folder of your choice
- Add this to your server.cfg such as below:

```python title="server.cfg"
ensure [core]
# dependencies
ensure pure-crafting
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](./configuration)

```python title="config/config.lua"
Framework = 'esx'
```

### Delete existing files

- Delete any gang related resources from your resources folder

### Inventory

- Navigate to your selected inventory from `server/inventory/` and then scroll to the bottom to find the items list
- Add these items to your inventoryItems
- Navigate to `INSTALLFILES/images` and add these to your retrospective inventory icon folder

### SQL

- Navigate to the `INSTALLFILES/sql` folder and run the SQL file in your database

- Restart your server and enjoy!

## qbox

### Add script to server

- Download pure-crafting from keymaster
- Add pure-crafting to your resources folder of your choice
- Add this to your server.cfg below your qbx_core:

```python title="server.cfg"
ensure qbx_core
# dependencies
ensure pure-crafting
```

- Navigate to the config/config.lua and change the settings accordingly, such as below - an in depth guide to the config is available [here](./configuration)

```python title="config/config.lua"
Framework = 'qbox'
```

### Delete existing files

- Delete any gang related resources from your resources folder

### Inventory

- Navigate to your selected inventory from `server/inventory/` and then scroll to the bottom to find the items list
- Add these items to your inventoryItems
- Navigate to `INSTALLFILES/images` and add these to your retrospective inventory icon folder

### SQL

- Navigate to the `INSTALLFILES/sql` folder and run the SQL file in your database

- Restart your server and enjoy!

## Standalone

Change Framework to standalone in the config.lua and edit functions in the respected folders
