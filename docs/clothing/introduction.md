---
sidebar_position: 1
---

# Introduction

pure-clothing is a feature rich clothing menu for FiveM, being easy to use along with compbatability with a wide range of other clothing and/or multicharacter systems

## Features

- Easier & more customization for appearance
- Unique user interface whilst being easy and simple
- Multi core support (esx, qb, standalone, ox, qbx, standalone)
- Realistic randomizer that randomizes your players facial appearance
- Outfits are integrated within the menu
- Optimized (0.01 ms at idle)
- Colour presets
- Every option is configurable
- You can share your outfits with near-by players
- Improved camera functionality, being able to control/drag your character for better a better view/angle
- Job based pre-saved outfits
- Peds only showing available items of clothing that the player has the ability to change (configurable)
- Payment system for each item that is changed (a player applies a $5 hat & a $50 shirt, that will only charge him $55, rather than a normal total amount)
- Tattoos have the ability to apply multiple tattoos from the same body part at once
- Commands: /h1 /h0 /m1 /m0 etc. (if your hat falls off, you can do /h1 to apply it back on. to take off your mask you can do /m1, same with any other pieces of clothing)
- Includes a Clothing, Barber & Tattoo menu

## Previews

- [Youtube](https://www.youtube.com/watch?v=XER-RzmPugI)

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
