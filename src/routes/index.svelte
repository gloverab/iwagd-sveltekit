<script>
import EuTour from "$lib/EuTour.svelte";
import LiquidCircle from "$lib/LiquidCircle.svelte";

import TourDates from "$lib/TourDates.svelte";
import Waves from "$lib/Waves.svelte";

</script>

<div class='p-10 relative w-screen h-screen bg-orange-primary'>
  <div class='relative w-full h-full flex items-center justify-center'>
    <Waves />

    <div class='absolute w-full flex justify-center'>
      <div class='-ml-140 -mt-60 relative'>
        <div class='absolute top-12 z-1 skew-animate h-31 w-58 bg-grey-darkest' />
        <div class='float-up z-2 absolute left-0 top-0 w-50'>
          <EuTour />
        </div>
      </div>
    </div>

    <div class='absolute w-full flex justify-center'>
      <div class='ml-100 -mt-30 relative'>
        <div class='float-up z-2 absolute left-0 top-0 w-50'>
          <LiquidCircle />
        </div>
      </div>
    </div>
    
    <div class='absolute left-0 top-0 flex space-x-2'>
      <p class='font-tight uppercase tracking-0.5em text-sm write-vertical-left transform rotate-180'>Melodic Instrumental • Post-Rock</p>
      <h1 class='font-display leading-19 pt-2 whitespace-nowrap'>IT WAS A<br>GOOD<br>DREAM</h1>
    </div>

  </div>

  <div class='absolute bottom-0 left-0 w-full h-1/6 flex justify-center'>
    <div class='w-3/4 h-full flex items-center'>
      <TourDates />
    </div>
  </div>
  
</div>

<style>
  .skew-animate {
    animation: skew 7s forwards;
  }

  /* .float-up {
    animation: floatup 2s forwards;
  } */

  @keyframes skew {
    0% { transform: skew(0deg) translateX(0); }
    100% { transform: skew(-40deg) translateX(-1em); }
  }
  @keyframes floatup {
    0% { transform: translateY(-100px); }
    100% { transform: translateY(0); }
  }
</style>