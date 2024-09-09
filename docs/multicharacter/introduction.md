---
sidebar_position: 1
---

# Introduction

pure-multicharacter is a highly compatible multicharacter system, in which contains a great amount of custom and unique features tailored to your fivem server.

## Features

- Multiple different pre installed options
- Two different pre installed designs [design1](https://i.imgur.com/infNPkg.png) | [design2](https://i.imgur.com/V2Mwz1m.png)
- Drag and Drop for ease of use
- Unique interface with a custom character creation
- Multi core support (esx, qb, standalone, qbx)
- Smooth and seemless transitions
- Sleek and unique custom ui
- Advanced support for pre set clothing resources
- Easily interchangeable theme.json
- Whitelisted slots for all different types (identifier, steam, discord roles! and more)
- Optimized for performance

## Previews

[Youtube](https://www.youtube.com/watch?v=2DoW0ZPHR54)

## Dependencies

### ox_lib

ox_lib is: 'A standalone library for providing easily reusable code as importable modules and exports.'

- [Download](https://github.com/overextended/ox_lib/releases/)
- [Documentation](https://overextended.dev/ox_lib)

### oxmysql

oxmysql is: 'A FiveM resource to communicate with a MySQL database using node-mysql2.'

- [Download](https://github.com/overextended/oxmysql/releases)
- [Documentation](https://overextended.dev/oxmysql)

### server.cfg

```python title="server.cfg"
ensure core_here
ensure ox_lib
ensure oxmysql
ensure pure-... (purescripts scripts here)
```
