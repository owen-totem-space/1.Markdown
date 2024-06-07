---
title: Room-List-JS
tags:
  - moc
---

```dataviewjs
const pages = dv.pages('#room-info')

const func = () => {
	for (let group of pages.groupBy(b => b.building)){
			//dv.header(3, group.key);
			dv.table([group.key, "Teams Email"],
			    group.rows.sort(r => r.room, 'asc')
								    //.filter((r) => !r.tags.includes('teams-room'))
			              .map(r => {
					            const path = r.file.link.path
											const newName = dv.fileLink(path,false,r.room)
				              return [newName, r.email]
			              
			              }
			              ))
	}
}

func()

```