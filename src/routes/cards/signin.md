---
layout: cardLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { SignInCard, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/SignInCard.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let title = 'Sign in';
  let action='/';
  let btnSignInColor = 'red';
	let rememberMe = true;
	let signupLink = {
		href: '/',
		rel: 'external'
	};
	let lostPasswordLink = {
		href: '/'
	};

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Cards',
      href:'/cards/'
    },
    {
      label:'Signin card',
      href:'/cards/signin'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Sign In Card</h1>

<Htwo label="Set up" />

<p>Import SignInCard in the script tag.</p>

```html
<script>
  import { SignInCard } from "flowbite-svelte";
</script>
```

<Htwo label="Examples" />

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
   <SignInCard id="id1" {btnSignInColor} {title} {action} {rememberMe} {signupLink} {lostPasswordLink} />
</div>

```html
 <SignInCard id="id1" {btnSignInColor} {title} {action} {rememberMe} {signupLink} {lostPasswordLink} />
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <SignInCard id="id2" btnSignInColor="purple" {title} {action} {rememberMe} {signupLink} {lostPasswordLink} />
</div>

```html
<SignInCard id="id2" btnSignInColor="purple" {title} {action} {rememberMe} {signupLink} {lostPasswordLink} />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>