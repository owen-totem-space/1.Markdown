---
title: Team-Map
date: 2024-04-11
tags: [moc]
---

[Map](../Map.md) | 
--- | ---

## Issues

<div><div class="block-language-dataviewjs node-insert-event" style="overflow-x: auto;"><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="01-Issue-Resolutions/Automate-Duplicate-Display.md" data-href="01-Issue-Resolutions/Automate-Duplicate-Display.md" href="01-Issue-Resolutions/Automate-Duplicate-Display.md" class="internal-link" target="_blank" rel="noopener">Automate-Duplicate-Display</a></span></li><li><span><a data-tooltip-position="top" aria-label="01-Issue-Resolutions/TR-Room-Screens.md" data-href="01-Issue-Resolutions/TR-Room-Screens.md" href="01-Issue-Resolutions/TR-Room-Screens.md" class="internal-link" target="_blank" rel="noopener">TR-Room-Screens</a></span></li><li><span><a data-tooltip-position="top" aria-label="01-Issue-Resolutions/UC-Engine-IP-Address-Changed.md" data-href="01-Issue-Resolutions/UC-Engine-IP-Address-Changed.md" href="01-Issue-Resolutions/UC-Engine-IP-Address-Changed.md" class="internal-link" target="_blank" rel="noopener">UC-Engine-IP-Address-Changed</a></span></li></ul></div></div></div>


## Resources

<div><div class="block-language-dataviewjs node-insert-event" style="overflow-x: auto;"><div><ul class="dataview list-view-ul"><li><span><a data-tooltip-position="top" aria-label="02-Resources/Required-Software.md" data-href="02-Resources/Required-Software.md" href="02-Resources/Required-Software.md" class="internal-link" target="_blank" rel="noopener">Required-Software</a></span></li><li><span><a data-tooltip-position="top" aria-label="02-Resources/Common-Purchases.md" data-href="02-Resources/Common-Purchases.md" href="02-Resources/Common-Purchases.md" class="internal-link" target="_blank" rel="noopener">Common-Purchases</a></span></li><li><span><a data-tooltip-position="top" aria-label="02-Resources/XiO-Cloud.md" data-href="02-Resources/XiO-Cloud.md" href="02-Resources/XiO-Cloud.md" class="internal-link" target="_blank" rel="noopener">XiO-Cloud</a></span></li><li><span><a data-tooltip-position="top" aria-label="02-Resources/Crestron-OLH-Links.md" data-href="02-Resources/Crestron-OLH-Links.md" href="02-Resources/Crestron-OLH-Links.md" class="internal-link" target="_blank" rel="noopener">Crestron-OLH-Links</a></span></li><li><span><a data-tooltip-position="top" aria-label="02-Resources/USBC-Info.md" data-href="02-Resources/USBC-Info.md" href="02-Resources/USBC-Info.md" class="internal-link" target="_blank" rel="noopener">USBC-Research</a></span></li></ul></div></div></div>

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

> [!NOTE] 
> - Search and replace "05-Team/" to remove from all URLs. This allows pasted HTML to work on Github.