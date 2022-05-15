

<script>
  import { browser } from "$app/env";
  import EuTour from "$lib/EuTour.svelte";
  import LiquidCircle from "$lib/LiquidCircle.svelte";

  import TourDates from "$lib/TourDates.svelte";
  import Waves from "$lib/Waves.svelte";
  import { onDestroy, onMount } from "svelte";
  import bgPurp from '$images/bg-purp.png';
  import bgGreen from '$images/bg-green.png';
  import Zebul from "$svgs/Zebul.svelte";
  import ThisWill from "$svgs/ThisWill.svelte";
  import WhereDwells from "$svgs/WhereDwells.svelte";
  import Dunk from "$svgs/Dunk.svelte";

  let showAssets1 = false
  let showAssets2 = false

  onMount(() => {
    if (browser) {
      document?.body?.classList.add('overflow-hidden')
    }
    setTimeout(() => showAssets1 = true, 300)
    setTimeout(() => showAssets2 = true, 600)
  })

  onDestroy(() => {
    if (browser) {
      document?.body?.classList.remove('overflow-hidden')
    }
  })

</script>
<div class='bg-tan'>
  <div class='p-10 relative w-screen h-screen'>
    <div class='relative w-full h-full flex items-center justify-center'>
      <Waves show={showAssets1} />

      {#if showAssets2}
        <div class='absolute w-full flex justify-center'>
          <div class='-ml-140 -mt-60 relative'>
            <div class='absolute top-12 z-1 skew-animate h-31 w-58 bg-grey-darkest' />
            <div class='float-up z-2 absolute left-0 top-0 w-50'>
              <EuTour />
            </div>
          </div>
        </div>
      {/if}

      <div class:move={showAssets1} class='absolute w-full h-full top-0 left-0 flex justify-center items-center duration-1000 linear transform {showAssets1 ? 'translate-x-70 -translate-y-20' : 'translate-x-0 translate-y-0'}'>
        <div class='relative'>
          <LiquidCircle />
        </div>
      </div>
      
      <div class='absolute left-0 top-0 space-y-20'>
        <div class='flex space-x-2'>
          <p class='font-tight uppercase tracking-0.5em text-xs write-vertical-left transform rotate-180'>Melodic Instrumental • Post-Rock</p>
          <h1 class='font-display leading-19 pt-2 whitespace-nowrap'>IT WAS A<br>GOOD<br>DREAM</h1>
        </div>

        <div class='flex flex-col w-25 space-y-10'>
          <Zebul />
          <ThisWill />
          <div class='flex items-center space-x-10'>
            <div>
              <div class='w-25'>
                <WhereDwells />
              </div>
            </div>
            <div>
              <div class='w-25'>
                <Dunk />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a class='absolute top-0 right-0 uppercase text-xs tracking-widest group flex items-center' target="_blank" href='/press-kit'>
        <span>Press Kit</span>
        <div class='duration-150 transform translate-x-0.5 group-hover:translate-x-1.5'>
          <span class='font-display'>→</span>
        </div>
      </a>

    </div>

    <div class='absolute bottom-0 left-0 w-full h-1/6 flex justify-center'>
      <div class='w-3/4 h-full flex items-center'>
        <TourDates />
      </div>
    </div>
    
    
  </div>
</div>

<style>
  .skew-animate {
    animation: skew 7s forwards;
  }

  @keyframes skew {
    0% { transform: skew(0deg) translateX(0); opacity: 0; }
    70% { opacity: 100; }
    100% { transform: skew(-40deg) translateX(-1em); }
  }
  @keyframes floatup {
    0% { transform: translateY(-100px); }
    100% { transform: translateY(0); }
  }
</style>