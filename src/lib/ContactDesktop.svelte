<script lang='ts'>
  import { draw } from 'svelte/transition';
	import { linear } from 'svelte/easing';
  import { onMount } from 'svelte';

  export let handleRemoveContact: () => void
  export let windowW: number
  export let windowH: number
  export let contactButton: any

  let showC1 = false
  let showC2 = false

  onMount(() => {
    setTimeout(() => showC1 = true, 500)
    setTimeout(() => showC2 = true, 1000)
  })

  const onRemoveContact = () => {
    setTimeout(() => showC2 = false, 100)
    setTimeout(() => showC1 = false, 200)
    handleRemoveContact()
  }
</script>

<div on:click={onRemoveContact} class='hidden md:block contact-line w-screen h-screen absolute left-0 top-0'>
  <svg viewBox="0 0 {windowW / 50} {windowH / 50}" xmlns="http://www.w3.org/2000/svg">

      <!-- polyline is an open shape -->
      <polyline in:draw="{{duration: 1200, easing: linear}}" out:draw="{{duration: 600, easing: linear}}" class='stroke-grey-light' stroke-width="0.01" fill="none"
      points="
      {(contactButton?.getBoundingClientRect().left + (contactButton?.getBoundingClientRect().width / 2)) / 50},{(contactButton?.getBoundingClientRect().bottom + 5) / 50}
      {(windowW * .65) / 50},{(windowH * .45) / 50}
      {(windowW * .4) / 50},{(windowH * .45) / 50}
      {(windowW * .65) / 50},{(windowH * .45) / 50}
      {(windowW * .65) / 50},{(windowH * .5) / 50}
      {(windowW * .4) / 50},{(windowH * .5) / 50}
      "/>
  </svg>

  <div class:show={showC1} class='opacity-0 duration-200 absolute' style="top: {windowH * .45}px; left: {windowW * .64}px">
    <div class='absolute right-0 flex flex-col items-end transform -translate-y-full'>
      <p class='font-thin text-xs text-grey-light tracking-widest uppercase'>General/Booking</p>
      <a class='font-thin text-sm text-grey-light'  href="mailto:band@itwasagooddream.com">chris@itwasagooddream.com</a>
    </div>
  </div>
  <div class:show={showC2} class='opacity-0 duration-200 absolute' style="top: {windowH * .5}px; left: {windowW * .64}px">
    <div class='absolute right-0 flex flex-col items-end transform -translate-y-full'>
      <p class='font-thin text-xs text-grey-light tracking-widest uppercase'>Label</p>
      <a class='font-thin text-sm text-grey-light'  href="mailto:wout@dunkrecords.com">wout@dunkrecords.com</a>
    </div>
  </div>
</div>

<style>
  .show {
    @apply opacity-100;
  }
</style>