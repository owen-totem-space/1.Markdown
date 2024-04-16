---
title: Meeting-Tasks
date: 2024-04-12
cssclasses: 
tags:
  - todo
  - tasklist
---

 [Map](../Map.md) | [Tasks](Tasks.md)
 --- | ---

# Meeting-Tasks


```dataviewjs
const pages = '#meeting'
const query = (t) => { if (!t.completed) return true } 

dv.taskList(
	dv.pages(pages).file.tasks
		.where(t => query(t)))
```
