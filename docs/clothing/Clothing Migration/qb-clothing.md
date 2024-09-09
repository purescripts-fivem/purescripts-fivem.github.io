---
sidebar_position: 2
---

# QB Clothing Migration

## **How to install:**

- Whitelist your server so no one can join but you!!! - this is important as if they join as a character they will have to remake it
- Install all sqls from `pure-clothing\sqls\main.sql` in order to setup the tables
- Load into your server
- Run the command `/migrateskins qb-clothing` in game
- Await until all of the skins are migrated - will recieve a notification when done
- Restart your server
- For cleanup of old character:
  - Delete qb-clothing from your resources
  - Delete the following tables: `playerskins`
