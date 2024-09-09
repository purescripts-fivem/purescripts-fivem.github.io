---
sidebar_position: 5
---

# Themes

## Changing the scrollbar colour

This can be somewhat complicated if you need help join the discord for support!

Locate the file `pure-clothing/build/assets/index.5a60.....` and change the following:

```css
:root {
  --scrollbar-bg: #212121; -- this is the background colour of the scrollbar
  --scrollbar-main: #4453bd; -- this is the main colour of the scrollbar refer to 'main-colour'
}
```

## Changing the theme

Locate the file `pure-clothing/config/themes.json` and change the following:

**_DO NOT COPY AND PASTE THIS BELOW AS THIS HAS COMMENTS AND WILL THROW AND ERROR SIMPLY USE THIS AS A GUIDE_**

```json
{
  "background": {
    "container": "#121212", -- the main background of the clothing menu
    "clothing-main": "#212121", -- this is the background of the clothing menu also, this is for say the background of the popups etc
    "sidebar": "#212121", -- this is the background colour of the sidebar
    "clothing-top-block": "#323232", -- this is the colour of the lighter gray you see on the clothing components
    "box-shadow": "#121212 0px 7px 29px 0px" -- this is the box shadow present on components such as the popup etc
  },
  "text": {
    "white": "#ffffff", -- this is the main text colour (white)
    "grey-faded": "#a5a5a5", -- this is the text for the popup buttons so it doesnt stand out too much
    "text-like-borders": "#686868" -- this is the text colour for the borders of the clothing components refer to 'clothing-top-block'
  },
  "borders": {
    "border-colour": "#323232", -- this is the border colour also refer to 'clothing-top-block'
    "border-thin": "0.15em solid", -- this is the thin border such as for the colour picker when it is selected
    "border-main-complete": "0.25em solid #323232", -- this is the border that borders the components, refer to 'clothing-top-block' for the colour
    "border-radius": "5px" -- this is the rounding on the corners of the components
  },
  "mainColourway": {
    "main-colour": "#4c57ac", -- this is the main colourway, everything follows this
    "main-colour-faded": "#4c57ac1f" -- this is the faded colourway, this is for the sidebar select
    -- tip here is use the main-colour then just add 1f to the end of it
  },
  "sidebar": {
    "info": "#4c57ac", -- this is the info button colour
    "save": "#52bd57", -- this is the save button colour
    "delete": "#b95050", -- this is the delete button colour
    "tattooClear": "#F28F19", -- this is the tattoo clear button colour
    "randomiser": "#F28F19", -- this is the randomiser button colour
    "onSelectBorder": " 0.2em solid", -- this is the border applied to the selected sidebar item
    "nameHover": "#2D2D2D" -- this is the colour of the name when you hover over it (used for the outfit popup)
  },
  "hair": {
    "dropDownBorder": "1px solid", -- this is the border of the hair dropdown with the colour boxes
    "dropDownBorderColour": "#323232", -- this is the colour of the border of the hair dropdown with the colour boxes
    "hairTileBorder": "2px solid", -- this is the border of the hair tile (on select)
    "hairTileBorderColour": "#323232" -- this is the colour of the border of the hair tile (on select)
  },
  "dropdownDivider": {
    "border-colour": "#323232" -- this is the colour of the divider in the dropdowns
  },
  "checkbox": {
    "checkbox-hover": "0 0 0 20px #4c57ac3d" -- this is the colour of the checkbox when you hover over it
  }
}
```
