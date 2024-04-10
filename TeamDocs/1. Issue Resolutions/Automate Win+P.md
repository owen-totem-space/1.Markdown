---
title: Automate Win+P
date: 2024-04-10
tags:
  - issue
---
# Automate Win+P

#### Description
> Set up windows so that it will automatically trigger "Duplicate Display" when a user logs in or unlocks the PC.

---

### Resolution
```
- Open Windows Task Scheduler
- Right Click Task Scheduler Library and select "Create Task"
- Fill in as follows:
```

![](../../Archive/Attachments/windows-scheduler-pic1.png)
![](../../Archive/Attachments/windows-scheduler-pic2.png)
![](../../Archive/Attachments/windows-scheduler-pic3.png)

### Script
Create .bat file with the following line:
```
display /clone
```