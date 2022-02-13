---
layout: doc
---

<script>
  import { InteractiveCard } from "svelte-flow";
  let dropdownLinks = [
    {
      href: "/#",
      name: "Edit",
    },
    {
      href: "/#",
      name: "About",
    },
    {
      href: "/#",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/dummy-pages/profile", title: "Profile" };
  let link2 = { href: "/dummy-pages/about", title: "About" };
</script>

<h1 class="text-3xl w-full dark:text-white">Interactive Card: Setup</h1>

```html
<script>
  import { InteractiveCard } from "svelte-flow";
  let dropdownLinks = [
    {
      href: "/#",
      name: "Edit",
    },
    {
      href: "/#",
      name: "About",
    },
    {
      href: "/#",
      name: "Profile",
    },
  ];
  let img = {
    src: "/images/profile-picture-3.jpeg",
    alt: "Suzan Boil",
  };
  let header = "Lorem ipsum";
  let content = "Proin efficitur purus felis.";
  let link1 = { href: "/dummy-pages/profile", title: "Profile" };
  let link2 = { href: "/dummy-pages/about", title: "About" };
</script>
```

<h1 class="text-3xl w-full dark:text-white">Interactive cards</h1>

```html
<InteractiveCard 
  {dropdownLinks} 
  {img} 
  {header} 
  {content} 
  {link1} 
  {link2} 
/>

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  btnColor1="purple"
/>

<InteractiveCard
  {dropdownLinks}
  {img}
  {header}
  {content}
  {link1}
  {link2}
  btnColor1="green"
/>
```

<div class="container flex flex-col space-y-4 justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  
    <InteractiveCard {dropdownLinks} {img} {header} {content} {link1} {link2} />

    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      {link2}
      btnColor1="purple"
    />
 
    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      {link2}
      btnColor1="green"
    />

    <InteractiveCard
      {dropdownLinks}
      {img}
      {header}
      {content}
      {link1}
      btnColor1="red"
    />
  
</div>

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <div class="flex-auto p-4">
    <InteractiveCard {dropdownLinks} {img} {header} {content} {link2} />
  </div>
  <div class="flex-auto p-4">
    <InteractiveCard {dropdownLinks} {img} {header} {content} />
  </div>
</div>

<h1 class="text-3xl w-full dark:text-white pb-8">References</h1>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/card/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Flowbite Card</a></p>