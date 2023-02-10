<script lang='ts'>
  export let onHide: () => void
  export let links: any[]
  export let name: string
  export let releaseText: string
  export let show = false
  export let type: 'single' | 'album' | 'video'

  let animateHide = false

  const handleHide = () => {
    animateHide = true
    setTimeout(onHide, 400)
  }
</script>

{#if show}
  <div
    on:click={handleHide}
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
    <div
      class:translate-y-10={animateHide}
      class:duration-200={animateHide}
      class:opacity-0={animateHide}
      class:opacity-100={!animateHide}
      class='
        border-5
        border-white
        bg-black
        text-white
        p-5
        max-w-full
        sm:p-15
        transform
      '>
      <div class='flex flex-col items-center uppercase italic tracking-0.2em font-base mb-7.5'>
        <p>Listen to the New {type}</p>
        <p>{name}</p>
        <p>{releaseText}</p>
      </div>

      <div class='flex flex-col space-y-7.5 mb-6.5'>
        {#each links as link}
          <a href={link.url} target='blank' class='
            border-1
          border-white
            rounded-full
            sm:w-80
            h-15
            flex
            px-5
            sm:px-0
            sm:pl-10
            space-x-5
            items-center
            bg-white
            bg-opacity-0
            duration-150
            hover:bg-opacity-20
          '>
            <div class='w-7.5 h-7.5'>
              <svelte:component classes='fill-white' this={link.icon} noHover />
            </div>
            <p class='italic tracking'>{link.text}</p>
          </a>
        {/each}
      </div>

      <div class='flex justify-center'>
        <button data-content="Continue to site" on:click={handleHide} class='p-1 glitch-hover uppercase italic tracking-0.2em'>
          <span class='uppercase italic tracking-0.2em'>Continue to site</span>
        </button>
      </div>
    </div>
  </div>
{/if}