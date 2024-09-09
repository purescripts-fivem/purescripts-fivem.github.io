---
sidebar_position: 1
---

# Introduction

pure-spawnselector is a customisable spawnselector system with a realistic design, in which being coord relative along with a number of different features making this the best and most unique spawnselector out at the moment!

## Features

- Highly compabitble (esx, qb, standalone, qbox)
- Drag and Drop for ease of use
- Unique interface with coord based relativity (takes the coords instead of having to deal with css)
- Supports a number of different housing scripts (qb, qs, ps, bcs)
- If POI is closely together it will bunch up and create a new pin in where you can select either easily
- Spawns you actually inside your apartment/house
- Get houses based on keyholders instead of just owners (configurable)
- Anti combat log - if someone dies and joins back it spawns them back last location (menu does not pop up) - (configurable)
- Relative to different screen sizes such as 4k and more
- Job based spawn positions
- Animations support

## Previews

[Youtube](https://www.youtube.com/watch?v=ZbVMtBLJiks)

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
