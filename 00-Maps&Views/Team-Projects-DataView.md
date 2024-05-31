---
title: Team-Project-Tasks
date: 2024-05-31
tags:
  - tasklist
---



## Tasks
```dataviewjs
const pages = '#project/team and #project/active'
const query = (t) => {if (!t.completed) return true}

dv.taskList(
	dv.pages(pages).file.tasks
		.where(t => query(t)))
```

## Project Files
```dataviewjs
const pages = '#project/team and #project/active'

dv.list(dv.pages(pages).file.link)
```