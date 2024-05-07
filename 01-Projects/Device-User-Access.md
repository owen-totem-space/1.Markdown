---
title: Device-User-Access
date: 2024-05-01
building: 
room: 
tags:
  - project/active
---

## Description

Credentials
ray_lohan - Operator1
admin - Connected1
ISS - ISSAVRCSI

## Actions

- added devices to XiO
- Added authentication with 3 user accounts listed above.

## Comments

- I was able to add the active directory group Design-MediaServices
- I added myself as user. I could log in with the toolbox terminal.
- Could not log in to web interface or toolbox
- used username  `rcsi\owenmccarthy`

## Instructions

#### Check Active Directory Groups

```
net user USERNAME /domain
```
Also:
```
whoami /groups
```



---
###### Resources

4 series - https://docs.crestron.com/en-us/8559/content/topics/Reference/Authentication.htm#UserGroupRights