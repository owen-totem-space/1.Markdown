---
title: Display-Scheduler
date: 2024-04-10
tags:
  - issue
---
# Automate Win+P

> [!CAUTION]
> XiO Cloud settings take precedence over local settings. [XiO Cloud Help](../2.%20Information/Crestron%20OLH%20Links.md#XiO%20Cloud)

#### Description
> Issue Description

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