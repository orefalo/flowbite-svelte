---
layout: footerLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { SimpleFooter, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import componentProps from '../props/SimpleFooter.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let site = {
    href: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", href: "/" },
    { name: "Profile", href: "/" },
    { name: "Contact", href: "/" },
  ];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Footer',
      href:'/footer/'
    },
    {
      label:'Footer default',
      href:'/footer/default'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Simple Footer</h1>

<Htwo label="Examples" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SimpleFooter {links} {site} />
</div>

```html
<script>
  import {SimpleFooter} from 'flowbite-svelte'
  let site = {
    href: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", href: "/" },
    { name: "Profile", href: "/" },
    { name: "Contact", href: "/" },
  ];
</script>

<SimpleFooter {links} {site}/>
```


<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>