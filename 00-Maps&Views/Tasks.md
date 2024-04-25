---
title: Main Tasks
date: 2024-04-11
cssclasses: []
tags: [todo, tasklist]
---

[Map](Map.md)| [Project-Tasks](00-Maps&Views/Project-Tasks.md)  | [Meeting-Tasks](00-Maps&Views/Meeting-Tasks.md)
 --- | --- | ---
 
### Purchases

```dataviewjs
const pages = '#purchases'
const query = (t) => { if (!t.completed) return true }

dv.taskList(
 dv.pages(pages).file.tasks
	 .filter(t => t.children = [])
	 .where(t => query(t)
	 )
)
```

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
		.where(t => query(t)))
```

---





