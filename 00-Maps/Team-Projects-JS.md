---
title: Team-Projects-JS
tags:
  - tasklist
  - moc
---

## Project Files
```dataviewjs
const pages = '#project/team and #project/active'

dv.list(dv.pages(pages).file.link)
```

---

## Tasks
```dataviewjs
const pages = '#project/team and #project/active'
const query = (t) => {if (!t.completed) return true}

dv.taskList(
	dv.pages(pages).file.tasks
		.where(t => query(t)))
```

