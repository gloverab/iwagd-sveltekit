<script lang='ts'>
  import { fly } from "svelte/transition";

  export let onHide: () => void
  export let show = false

  let animateHide = false

  const handleHide = () => {
    animateHide = true
    onHide()
    setTimeout(() => {
      animateHide = false
    }, 201)
  }
</script>

{#if show}
  <div
    class:bg-opacity-0={animateHide}
    class:bg-opacity-85={!animateHide}
    class:duration-200={animateHide}
    class='
      fixed
      z-5
      w-screen
      h-screen
      top-0
      left-0
      bg-primary-dark
      flex
      justify-center
      items-center
    '>
    <div on:click={handleHide} class='w-full h-full absolute top-0 left-0 z-0' />
    <div
      in:fly={{ y: 50, x: 0, duration: 400 }}
      out:fly={{ y: 50, x: 0, duration: 200 }}
      class='
        relative
        bg-black
        text-white
        border-5
        border-white
        p-5
        max-w-[calc(100vw_-_4rem)]
        max-h-[calc(100vh_-_4rem)]
        sm:p-15
        sm:max-w-180
        overflow-scroll
        scrollbar-hide
        flex
        items-center
      '>
      <slot />
    </div>
  </div>
{/if}

<style>
  .link-pill {
    @apply border-1 border-white rounded-full h-15 flex px-5 sm:px-0 sm:pl-10 space-x-5 items-center bg-white bg-opacity-0 duration-150 hover:bg-opacity-20;
  }

  .small {
    @apply h-12 sm:pl-6;
  }
</style>