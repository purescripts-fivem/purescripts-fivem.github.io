---
sidebar_position: 5
---

# Themes

## Changing the scrollbar colour

This can be somewhat complicated if you need help join the discord for support!

Locate the file `pure-gangsystem/build/assets/index.....css` or search for :root and change the following:

```css
:root {
  --scrollbar-bg: #212121; -- this is the background colour of the scrollbar
  --scrollbar-main: #333333; -- this is the main colour of the scrollbar refer to 'main-colour'
}
```

## Changing the theme

Locate the file `pure-gangsystem/config/themes.json` and change the following:

**_DO NOT COPY AND PASTE THIS BELOW AS THIS HAS COMMENTS AND WILL THROW AND ERROR SIMPLY USE THIS AS A GUIDE_**

```json
{
  "backgroundFrame": "#101010", // this is for the background of the frame
  "red": "#DA1B32", // red colour used throughout
  "redHover": "#F01B32", // hover red colour used throughout
  "green": "#4DC048", // green colour used throughout
  "greenHover": "#4DF048", // hover green colour used throughout
  "blue": "#699CC8", // blue colour used throughout
  "whiteText": "#FFFFFF", // white text colour used throughout
  "boxBorder": "#3E3E3E", // border colour of the boxes
  "boxText": "#B2B2B2", // text colour of the boxes
  "boxBackground": "#212121", // background colour of the boxes
  "inputText": "#5E5E5E", // text colour of the inputs
  "missionColour": "#FFC30B", // colour of the mission text
  "navbar": {
    "buttonBackground": "#202020" // background colour of the navbar buttons
  },
  "chat": {
    "chatboxBackground": "#303030", // background colour of the chatbox
    "chatboxText": "#8E8E8E" // text colour of the chatbox
  },
  "popup": {
    "inputBackground": "#3D3D3D", // background colour of the inputs of the popup
    "redBackground": "#6C1A1A", // red background colour of the popup
    "redBorder": "#8C1F1F", // red border colour of the popup
    "redText": "#D11616", // red text colour of the popup
    "greenBackground": "#1A6C20", // green background colour of the popup
    "greenBorder": "#1F8C26", // green border colour of the popup
    "greenText": "#16CD21" // green text colour of the popup
  },
  "logs": {
    "topText": "#797979", // text colour of the top of the logs
    "messageText": "#DFDFDF", // text colour of the messages in the logs
    "dateText": "#696969" // text colour of the date in the logs
  },
  "rank": {
    "top": "#292929", // top colour of the rank
    "bottom": "#2C2C2C", // bottom colour of the rank
    "checkbox": "#1A1A1A", // checkbox colour of the rank
    "border": "#2F2F2F" // border colour of the rank
  }
}
```
