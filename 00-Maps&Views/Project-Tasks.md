---
title: Project-Tasks
date: 2024-04-12
cssclasses: []
tags: [tasklist, todo]
---

 [Map](../Map.md) | [Tasks](Tasks.md)
 --- | ---

# Project Tasks

```dataviewjs
const pages = '#project/active'
const query = (t) => { if (!t.completed) return true } 

dv.taskList(
	dv.pages(pages).file.tasks
		.where(t => query(t)))
```