---
title: All-Tasks-DataView
tags:
  - todo
  - tasklist
---


### Current Project Tasks

```dataviewjs
const pages = '#project/active'
const query = (t) => { if (!t.completed) return true } 

dv.taskList(
	dv.pages(pages).file.tasks
		.filter(t => t.children = [])
		.where(t => query(t)
    )
)
```

---

### Future Project Tasks

```dataviewjs
const pages = '#project/future'
const query = (t) => !t.completed

dv.taskList(
	dv.pages(pages).file.tasks
		.filter(t => t.children = [])
		.where(t => query(t)
		)
)
```

---

### Meeting Tasks
```dataviewjs
const pages = '#meeting'
const query = (t) => { if (!t.completed) return true } 

dv.taskList(
	dv.pages(pages).file.tasks
		.where(t => query(t)
		)
)
```

---