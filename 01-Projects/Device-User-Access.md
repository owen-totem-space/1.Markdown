---
title: Device-User-Access
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

## Spoke to Kevin Brew

- Advised against active directory as it can cause problems in future
- it's likely to go away in future and will need to be converted
- Kevin has a 1Password account, that we may be able to jump on and organise all our passwords
	- https://1password.com/
- This sounds like the best solution to all our password control

---
###### Resources

4 series - https://docs.crestron.com/en-us/8559/content/topics/Reference/Authentication.htm#UserGroupRights