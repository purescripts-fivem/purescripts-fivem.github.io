---
sidebar_position: 1
---

# Installation and Updating Guide

## Installation

### 1. Install MariaDB

:::warning
Do **not** use XAMPP and ensuure you **backup** your database before making any changes
:::

Install [MariaDB](https://mariadb.org) version **10.11 or newer**.  
You can check your MariaDB version by running:

```sql
SELECT VERSION();
```

### 2. Run the SQL file

:::warning
Do not use phpMyAdmin
:::

Before you run the sql file, ensure all tables with `mdt_` are deleted, this provides a clean install

Navigate to the sqls/ folder and pick your framework for example, run the `sqls/qbox.sql` file in your database using [HeidiSQL](https://www.heidisql.com/)

Once done and complete, you can run the `charges_sql.sql`, this is essential for the charges pages within the MDT, this allows for live editing in game, however it is **recommended** to go through these before hand and change them

### 3. Install all dependencies

You will need to download the following resources, and ensure the mdt is started **after** these resources have started (Can always leave the mdt to start at the bottom of your server.cfg)

- [ox_lib](https://github.com/CommunityOx/ox_lib/releases)
- [oxmysql](https://github.com/CommunityOx/oxmysql/releases)

### 4. Configure

There is a number of different settings for the MDT, in which you can see here [configure](./configure)

## Updating

Whenever there is an update, this guide is recommended to follow, unless otherwise stated in the announcement

### 1. Check Announcements

Check the announcements, to see what files have changed, and if it is recommened to fresh install

### 2. Backup the MDT

Take a backup of the MDT resource, and also the database. You can achieve this by:

- Either zipping the folder in the current location
- Or creating a copy of the folder and moving it elsewhere

To backup the database:

1. Right click on your database
2. Click 'Export database as SQL'
3. Ensure where it says `Table(s)` `Create` is checked and the `Drop` is unchecked
4. Ensure the Data: is `Insert ignore (do not update existing)` and nothing else
5. Select your file location and click **Export**

### 3. Delete the old resource and replace it

Delete the old resource and re download it from the [Portal](https://portal.cfx.re/)

### 4. Replace your config files

Replace your config files from your old one and drag them to the new one
