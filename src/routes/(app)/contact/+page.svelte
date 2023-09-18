<script lang='ts'>
  import { page } from '$app/stores';
  import { onDestroy, onMount } from "svelte";
  import { fade } from 'svelte/transition';

  let showLabel1 = false
  let showContent1 = false
  let showLabel2 = false
  let showContent2 = false
  let showLabel3 = false
  let showContent3 = false

  onMount(() => {
    setTimeout(() => showLabel1 = true, 100)
    setTimeout(() => showContent1 = true, 200)
    setTimeout(() => showLabel2 = true, 300)
    setTimeout(() => showContent2 = true, 400)
    setTimeout(() => showLabel3 = true, 500)
    setTimeout(() => showContent3 = true, 600)
  })

  $: if (!$page.url.pathname.includes('contact')) {
    setTimeout(() => showLabel1 = false, 0)
    setTimeout(() => showContent1 = false, 100)
    setTimeout(() => showLabel2 = false, 175)
    setTimeout(() => showContent2 = false, 250)
    setTimeout(() => showLabel3 = false, 300)
    setTimeout(() => showContent3 = false, 350)
  }
</script>

<svelte:head>
  <title>It Was A Good Dream | Contact</title>
</svelte:head>

<div out:fade={{ duration: 500 }} class='z-1 space-y-10 absolute top-0 left-0 w-full h-139 flex flex-col justify-center items-center'>
  <div class='flex flex-col space-y-2'>
    <span class:show-50={showLabel1} class='label text-shadow ease-in'>general contact</span>
    <span class:show={showContent1} class='contact text-shadow ease-in'><a href='mailto:chris@itwasagooddream.com'>chris@itwasagooddream.com</a></span>
  </div>
  <div class='flex flex-col space-y-2'>
    <span class:show-50={showLabel2} class='label text-shadow ease-in'>booking</span>
    <span class:show={showContent2} class='contact text-shadow ease-in'><a href='mailto:chris@itwasagooddream.com'>booking@itwasagooddream.com</a></span>
  </div>
  <div class='flex flex-col space-y-2'>
    <span class:show-50={showLabel3} class='label text-shadow ease-in'>EU Label</span>
    <span class:show={showContent3} class='contact text-shadow ease-in'><a href='mailto:chris@itwasagooddream.com'>wout@dunkrecords.com</a></span>
  </div>
</div>

<style>
  .label {
    @apply text-white text-center inline text-base italic tracking-0.2em uppercase opacity-0 transform translate-y-8 duration-100;
  }

  .contact {
    @apply text-white text-center inline text-base italic tracking-0.2em opacity-0 transform translate-y-8 duration-100;
  }

  .show {
    @apply translate-y-0 opacity-100 ease-out duration-250;
  }
  .show-50 {
    @apply translate-y-0 opacity-50 ease-out duration-250;
  }
</style>