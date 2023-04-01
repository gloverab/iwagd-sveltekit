<script lang='ts'>
  export let onHide: () => void
  export let links: any[]
  export let name: string
  export let releaseText: string
  export let show = false
  export let title: string

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
        max-w-180
        transform
        max-h-screen
        overflow-scroll
      '>
      <div class='flex flex-col items-center uppercase italic tracking-0.2em font-base mb-7.5'>
        <p>{title}</p>
      </div>

      <div class='flex mb-7.5 space-x-6.5 items-center'>
        <div class='flex-1'>
          <img class='' alt='Rememory Vinyl' src="https://cdn.shopify.com/s/files/1/0721/5471/0314/files/IWAGD-Square-Rememory.png?v=1678725441&width=1070" />
        </div>
        <div class='flex flex-col space-y-4.5'>
          <div>
            <p class='italic uppercase tracking'>Buy it on Vinyl</p>
            <p class='text-sm text-grey-light tracking opacity-90'>Edition of 300</p>
            <p class='text-sm text-grey-light tracking'><span class='opacity-40 line-through'>50 Limited Edition</span>&nbsp;<span class='text-secondary'>sold out</span></p>
            <p class='text-sm text-grey-light tracking'><span class='opacity-90'>250 Standard Edition |</span>&nbsp;<span class='text-grey-mid'>limited remaining</span></p>
          </div>
          <a href="https://itwasagooddream.bandcamp.com/album/rememory" target='blank' class='link-pill small'>
            <p class='italic tracking'>Americas - IWAGD Store</p>
          </a>
          <a href="https://churchroadrecords.com/products/it-was-a-good-dream-rememory-lp-dunk-records-pre-order" target='blank' class='link-pill small'>
            <p class='italic tracking'>UK - Church Road Records</p>
          </a>
          <a href="#" target='blank' class='link-pill small'>
            <p class='italic tracking'>Europe - Dunk!Records</p>
          </a>
        </div>
      </div>

      <div class='flex flex-col space-y-7.5 mb-6.5'>
        {#each links as link}
          <a href={link.url} target='blank' class='link-pill'>
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

<style>
  .link-pill {
    @apply border-1 border-white rounded-full h-15 flex px-5 sm:px-0 sm:pl-10 space-x-5 items-center bg-white bg-opacity-0 duration-150 hover:bg-opacity-20;
  }

  .small {
    @apply h-12 sm:pl-6;
  }
</style>