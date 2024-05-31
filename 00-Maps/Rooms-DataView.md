---
title: Rooms
date: 2024-04-16
tags:
  - room-list
  - moc
---
<!--
## Teams Rooms
```dataviewjs
const pages = '#room-info'

dv.table(["Room", "Building", "Teams Email"], dv.pages(pages)
	.sort(r => r.building)
	.filter( r => r.email)
	.map(r => [r.file.link, r.building, r.email]))
```

## Room List

```dataviewjs
const pages = '#room-info'

console.log(r)

dv.table(["Room", "Building"], dv.pages(pages)
	.sort((r) => {r.building})
	.filter((r) => !r.tags.includes('teams-room'))
	.map(r => [r.file.link, r.building]))
```
-->


```dataviewjs
const pages = dv.pages('#room-info')

const func = () => {
	for (let group of pages.groupBy(b => b.building)){
			//dv.header(3, group.key);
			dv.table([group.key, "Teams Email"],
			    group.rows.sort(r => r.title, 'desc')
								    //.filter((r) => !r.tags.includes('teams-room'))
			              .map(r => [r.file.link, r.email]))
	}
}

func()

```