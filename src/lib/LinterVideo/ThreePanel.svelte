<script lang='ts'>
  import { onMount } from "svelte";

  export let unmount: () => void
  let flash1 = false
  let flash2 = false
  let flash3 = false

  onMount(() => {
    setTimeout(() => flash1 = true, 0)
    setTimeout(() => flash2 = true, 355)
    setTimeout(() => flash3 = true, 710)
    setTimeout(unmount, 2000)
  })
</script>

<div class='flex w-full h-full absolute left-0 top-0'>
  <div class:flash1 class='w-1/3 bg-tan opacity-0' />
  <div class:flash2 class='w-1/3 bg-tan opacity-0' />
  <div class:flash3 class='w-1/3 bg-tan opacity-0' />
</div>

<style>
  .flash1 {
    animation: flash1 1.3s;
  }
  .flash2 {
    animation: flash2 1s;
  }
  .flash3 {
    animation: flash3 1s;
  }

  @keyframes flash1 {
    0% { opacity: 100% }
    100% { opacity: 0% }
  }

  @keyframes flash2 {
    0% { opacity: 75% }
    100% { opacity: 0% }
  }

  @keyframes flash3 {
    0% { opacity: 50% }
    100% { opacity: 0% }
  }
</style>