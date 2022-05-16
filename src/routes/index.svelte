

<script lang='ts'>
  import { browser } from "$app/env";
  import smoothscroll from 'smoothscroll-polyfill';
  import EuTour from "$lib/EuTour.svelte";
  import LiquidCircle from "$lib/LiquidCircle.svelte";
  import { bandsInTownResponse } from "$lib/constants";

  import TourDates from "$lib/TourDates.svelte";
  import Waves from "$lib/Waves.svelte";
  import { onDestroy, onMount } from "svelte";
  import Zebul from "$svgs/Zebul.svelte";
  import ThisWill from "$svgs/ThisWill.svelte";
  import WhereDwells from "$svgs/WhereDwells.svelte";
  import Dunk from "$svgs/Dunk.svelte";
  import iwagdPress from "$images/IWAGD-Press-1.png";
  import paperTexture from "$images/paper-texture.png";
  import TourDatesMobile from "$lib/TourDatesMobile.svelte";
import moment from "moment";

  let windowH: number
  let windowW: number
  let photoH: number
  let showAssets1 = false
  let showAssets2 = false
  let showAssets3 = false
  let applyBlur = false
  let beneathText

  onMount(() => {
    if (browser) {
      smoothscroll.polyfill();
    }
    if (browser && window.innerWidth > 767) {
      document?.body?.classList.add('overflow-hidden')
    }
    setTimeout(() => showAssets1 = true, 900)
    setTimeout(() => showAssets2 = true, 1200)
    setTimeout(() => showAssets3 = true, 2600)
  })

  onDestroy(() => {
    if (browser && window.innerWidth > 767) {
      document?.body?.classList.remove('overflow-hidden')
    }
  })

  let upcomingDate: any
  
  bandsInTownResponse.forEach(date => {
    let diff = moment(date.datetime).diff(moment(), 'days');
    if (diff > 0) {
      if (upcomingDate) {
        if (moment(date.datetime).diff(moment(upcomingDate), 'days') < 0) {
          upcomingDate = date;
        }
      } else {
        upcomingDate = date;
      }
    }
  })

  $: console.log(upcomingDate)
  const showToday = bandsInTownResponse.find(date => moment(date.datetime).isSame(moment(), 'day'))
  const showUpcoming = bandsInTownResponse.find(date => moment(date.datetime).isSame(moment(), 'day'))

  const handleMoreClick = () => {
    window.scroll({ top: windowH + photoH, left: 0, behavior: 'smooth' });
  }

  const clientRect = beneathText?.getBoundingClientRect()

  $: console.log('bottom', clientRect)

</script>

<svelte:window bind:innerHeight={windowH} bind:innerWidth={windowW} />

<div class='flex justify-center'>
  <div class='pb-8 pt-2 md:p-10 relative w-screen max-w-350 h-screen'>
    <div class='relative w-full h-full flex flex-col md:flex-row items-center justify-center'>

      <div class='flex md:hidden w-full mb-2 flex-col items-center space-y-2'>
        <svg viewBox="0 0 12 1">
          <text class='fill-grey-darkest' x="6" y="1" text-anchor="middle" font-size="0.8" fill="white">IT WAS A GOOD DREAM</text>
        </svg>
        <p class='fill-grey-darkest text-sm font-tight uppercase tracking-0.2em'>Melodic Instrumental • Post-Rock</p>
      </div>
      
      <Waves show={showAssets1} />

      {#if showAssets2}
        <div class='hidden md:flex absolute w-full h-full justify-center'>
          <div
            on:mouseover={() => applyBlur = true}
            on:mouseout={() => applyBlur = false}
            on:focus={() => applyBlur = true}
            on:blur={() => applyBlur = false}
            style="margin-top: {beneathText?.getBoundingClientRect().top - 40}px;" class='z-1 -ml-140 relative'>
            <div class:applyBlur class='absolute top-12 skew-animate h-31 w-58 bg-grey-darkest blur' />
            <div class='float-up absolute left-0 top-0 w-50'>
              <EuTour />
            </div>
          </div>
        </div>

        <div class='flex md:hidden absolute -left-5 justify-center'>
          <div
            on:mouseover={() => applyBlur = true}
            on:mouseout={() => applyBlur = false}
            on:focus={() => applyBlur = true}
            on:blur={() => applyBlur = false}
            class='z-1 relative'>
            <div class:applyBlur class='absolute top-12 skew-animate h-21 w-48 bg-grey-darkest blur' />
            <div class='float-up absolute left-0 top-0 w-40'>
              <EuTour />
            </div>
          </div>
        </div>
      {/if}

      <div class:move={showAssets1} class='absolute w-full h-full top-0 left-0 flex justify-center items-center duration-1000 linear transform {showAssets1 ? 'translate-x-25 -translate-y-37 md:translate-x-40 md:-translate-y-55' : 'translate-x-0 translate-y-0'}'>
        <div class='relative'>
          <LiquidCircle />
        </div>
      </div>
      
      <div class='hidden md:block absolute left-0 top-0 space-y-20'>
        <div class='flex space-x-2'>
          <p class='font-tight uppercase tracking-0.5em text-xs write-vertical-left transform rotate-180 duration-1000 {showAssets1 ? 'translate-y-0' : '-translate-y-8/7'}'>Melodic Instrumental • Post-Rock</p>
          <div>
            <h1 class='font-display leading-19 pt-2 whitespace-nowrap'>IT WAS A<br>GOOD<br>DREAM</h1>
            <div bind:this={beneathText} />
          </div>
        </div>

        {#if windowW > 767 && windowH > 819}
          <div class='hidden md:flex flex-col w-18 lg:w-25 space-y-10 duration-3000 transition-opacity {showAssets3 ? 'opacity-100' : 'opacity-0'}'>
            <Zebul />
            <ThisWill />
            <div class='flex items-center space-x-10'>
              <div>
                <div class='w-18 lg:w-25'>
                  <WhereDwells />
                </div>
              </div>
              <div>
                <div class='w-18 lg:w-25'>
                  <Dunk />
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>

      <a class='hidden md:flex absolute top-0 right-0 uppercase text-xs tracking-widest group items-center duration-3000 {showAssets3 ? 'opacity-100' : 'opacity-0'}' target="_blank" href='/press-kit'>
        <span>Press Kit</span>
        <div class='duration-150 transform translate-x-0.5 group-hover:translate-x-1.5'>
          <span class='font-display'>→</span>
        </div>
      </a>

      <div class='flex md:hidden absolute bottom-0 w-full px-10 items-center justify-between'>
        <div>
          <p class='font-thin text-xs tracking-widest uppercase mb-4'>Next Appearance:</p>
          <a class='space-y-2' href={upcomingDate.url} target='_blank'>
            <p class='font-display text-2xl uppercase leading-3'>{moment(upcomingDate.datetime).format('DD MMMM')} →</p>
            <p class='font-thin text-xs tracking-widest uppercase'>{upcomingDate.venue.location}</p>
          </a>
        </div>

        <button on:click={handleMoreClick} class='py-4 pl-4 flex flex-col items-center justify-center'>
          <p class='font-thin text-xs tracking-widest uppercase'>More</p>
          <div class='rounded-full bg-grey-darkest flex items-center justify-center w-6 h-6'>
            <p class='text-grey-light -pb-2 pl-0.25'>⌄</p>
          </div>
        </button>
      </div>
    </div>

    <div class='hidden md:flex absolute bottom-0 left-0 w-full h-1/6 justify-center duration-3000 {showAssets3 ? 'opacity-100' : 'opacity-0'}'>
      <div class='absolute left-5/7 -top-100'>
        <img class='min-w-90 relative inline-block' src={iwagdPress} />
        <div class='bg-yellow-green opacity-80 hover:opacity-60 duration-500 transition-opacity w-full h-full absolute top-0 left-0' />
      </div>
      <div class='absolute left-5/7 -top-40 transform'>
        <p class='font-thin text-xs tracking-widest uppercase mb-6'>Next Appearance:</p>
        <a class='space-y-4' href={upcomingDate.url} target='_blank'>
          <p class='font-display text-3xl uppercase leading-3'>{moment(upcomingDate.datetime).format('DD MMMM')} →</p>
          <p class='font-thin tracking-widest uppercase'>{upcomingDate.venue.location}</p>
        </a>
      </div>
      <div class='w-full lg:w-3/4 h-full flex items-center'>
        <TourDates />
      </div>
    </div>
  </div>
</div>

<div class='relative z-1 md:hidden mb-10'>
  <div bind:clientHeight={photoH} class='transform translate-x-22 mb-10 mt-8'>
    <img class='' src={iwagdPress} />
  </div>
  <TourDatesMobile />
</div>

<a href='/press-kit' class='relative z-1 md:hidden font-thin'>
  <div class="w-full bg-grey-darkest flex justify-center py-2">
    <span class='font-thin tracking-widest uppercase text-grey-light'>View Press Kit</span>
  </div>
</a>


<style>
  svg {
    font-family: 'Enigma'
  }

  .skew-animate {
    animation: skew 7s forwards;
  }

  .blur {
    filter: blur(.4rem);
    transition: .7s ease all;
  }

  .blur.applyBlur {
    filter: blur(.6rem);
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