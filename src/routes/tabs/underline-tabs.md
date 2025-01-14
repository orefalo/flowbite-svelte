---
layout: tabLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import { UnderlineTabs, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
import componentProps from '../props/UnderlineTabs.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Settings",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Contacts",
    active: false,
    href: "/#",
    rel: undefined,
  },
];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Tabs',
      href:'/tabs/'
    },
    {
      label:'Underline tabs',
      href:'/tabs/underline-tabs'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Underline Tabs</h1>

<Htwo label="Examples" />

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <UnderlineTabs {tabs} />
</div>

```html
<script>
import { UnderlineTabs }from 'flowbite-svelte';
let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Settings",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Contacts",
    active: false,
    href: "/#",
    rel: undefined,
  },
];
</script>

<UnderlineTabs {tabs} />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>