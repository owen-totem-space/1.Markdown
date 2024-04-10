---
title: Automate Duplicate Display
date: 2024-04-08
tags:
  - issue
---
#### Description
> Set up windows so that it will automatically trigger "Duplicate Display" when a user logs in or unlocks the PC.

---

### Resolution #1 - Windows Scheduler
```
- Open Windows Task Scheduler
- Right Click Task Scheduler Library and select "Create Task"
- Fill in as follows:
```

![](../../Archive/Attachments/windows-scheduler-pic1.png)
![](../../Archive/Attachments/windows-scheduler-pic2.png)
![](../../Archive/Attachments/windows-scheduler-pic3.png)

### Resolution #2 - Script
>[!NOTE]
> > This method creates a .bat file that is clickable.  This `.bat` file can be triggered from windows scheduler.
> > 
> > You can also create a shortcut to this `.bat` file to change the icon etc. to make it more user friendly. I used to do this to put a button on the taskbar or desktop

- Create a new `.txt` file and name it `DisplaySwitch.txt`
- Open the `DisplaySwitch.txt` file with `notepad.exe`
- Copy and paste the following into the file:
	```
	display /clone
	```
- Save and close the file
- Right click the file and rename it from `DisplaySwitch.txt` to `DisplaySwitch.bat`
- You have now created an executable file. Double click the file to duplicate the displays!
> Now create a shortcut:
- Put this file in a discreet location on the PC
- Right click the `DisplaySwitch.bat` file and select `Create Shortcut`
- Once the shortcut is create, you can right click the file and select `Properties`
- You can customize the icon from within here