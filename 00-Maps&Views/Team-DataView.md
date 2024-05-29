---
title: Team-DataView
date: 2024-05-29
tags:
  - dataview
  - team
  - moc
---

## Issues

```dataviewjs
const pages = '#issue'
 const data = dv.pages(pages).file.link
dv.list(data)
```
## Resources
```dataviewjs
const pages = '#resource/team'
const data = dv.pages(pages).file.link
dv.list(data)
```

---

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

---

### Rooms
```dataviewjs
const pages = '#room-info'

dv.table(["Name", "Building"], dv.pages(pages)
	.sort(r => r.building)
	.map(r => [r.file.link, r.building]))
```