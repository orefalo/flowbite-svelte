---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
import { onMount } from 'svelte';
import { FloatingLabelInput, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/FloatingLabelInput.json'
let items = componentProps.props
let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Forms',
      href:'/forms/'
    },
    {
      label:'Floating label',
      href:'/forms/floating-label'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Floating label Components</h1>

<Htwo label="Examples" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<form>
<FloatingLabelInput id="email" name="email" type="email" required label="Email"/>
<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>
</div>

```html
<script>
  import { FloatingLabelInput } from 'flowbite-svelte'
</script>

<form> 
<FloatingLabelInput id="email" name="email" type="email" required label="Email"/>
<FloatingLabelInput id="password" name="password" type="password" required label="Password" />
<FloatingLabelInput id="confirmpassword" name="confirm_password" type="password" required label="Confirm password" />
<FloatingLabelInput id="first_name" name="first_name" type="text" required label="First name" />
</form>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
