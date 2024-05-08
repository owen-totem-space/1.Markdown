---
title: Device-User-Access
date: 2024-05-01
building: 
room: 
tags:
  - project/active
---

## Device Access Control
### Active Directory

- I was able to add the active directory group Design-MediaServices
- I added myself as user. I could log in with the toolbox terminal.
- Could not log in to web interface or toolbox
- used username  `rcsi\owenmccarthy`

#### Instructions

###### Check Active Directory Groups

```powershell
net user USERNAME /domain

OR

whoami /groups
```

### Use script to create new credentials on all devices
- 


---
###### Resources

4 series - https://docs.crestron.com/en-us/8559/content/topics/Reference/Authentication.htm#UserGroupRights