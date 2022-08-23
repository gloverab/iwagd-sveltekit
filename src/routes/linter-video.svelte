<script lang='ts'>
  import { onMount } from "svelte";
  import linter from "$src/assets/audio/linter-unmastered.wav"
  import ThreePanel from "$lib/LinterVideo/ThreePanel.svelte";
  import Time from "$lib/LinterVideo/Time.svelte";
  import { fade } from 'svelte/transition';

  let textValue = ''
  let stopTime: () => void
  let showEnd = false

  let paused = true
  let timestamp = 0
  let duration: number
  let spanW= 0
  let screenW = 0

  let showWelcome = true
  let showTitle1 = false
  let showTitle2 = false

  let backgroundShift1 = false
  let backgroundShift2 = false

  let showFlashGroup1 = false

  const removeFlashGroup1 = () => {
    showFlashGroup1 = false
  }

  const startVideo = () => {
    paused = false
    showWelcome = false
    stopTime()
  }

  $: if (textValue.toLowerCase() === 'play') {
    startVideo()
  }

  $: numEl = Math.ceil(screenW / spanW)
  $: arr = new Array(numEl || 0)

  $: if (timestamp > 1.42 && timestamp < 1.44) {
    showTitle1 = true
    backgroundShift1 = true
    backgroundShift2 = false
    showFlashGroup1 = true
  } else if (timestamp > 7.10 && timestamp < 7.12) {
    backgroundShift1 = false
    backgroundShift2 = true
    showFlashGroup1 = true
    showEnd = true
  } else if (timestamp > 12.78 && timestamp < 12.80) {
    showTitle1 = false
    showTitle2 = true
    backgroundShift2 = false
    backgroundShift1 = true
    showFlashGroup1 = true
  } else if (timestamp > 18.46 && timestamp < 18.48) {
    backgroundShift2 = true
    backgroundShift1 = false
    showFlashGroup1 = true
  } else if (timestamp > 24.14 && timestamp < 24.16) {
    showFlashGroup1 = true
    showTitle2 = false
  }
  const barLength = 1420
  const barLength4 = 5680
</script>

<div class='w-screen h-screen flex items-center justify-center'>
  <div bind:clientWidth={screenW}
    class:backgroundShift1
    class:backgroundShift2
    class='background w-screen h-screen flex items-center justify-center border-10'>
    <span bind:clientWidth={spanW} class='text-orange-primary absolute left-full'>▓</span>
    
    {#each arr as el}
      <!-- <span class='block-el text-rememory-blue-dark'>▓</span> -->
    {/each}

    {#if showFlashGroup1}
      <ThreePanel unmount={removeFlashGroup1} />
    {/if}

    <div class='flex flex-col'>
      <Time
        bind:stopTime={stopTime}
        {duration}
        {showEnd}
      />
      {#if showWelcome}
        <span out:fade={{ duration: 1500 }} class='text-sm tracking-widest text-sm uppercase text-center'>Type "play" below to begin</span>
        <input out:fade={{ duration: 1500 }} bind:value={textValue} class='p-2 border-b-1 outline-none uppercase text-center text-lg tracking-widest' type='text' />
      {/if}
    </div>
    {#if showTitle1}
      <h2 class='text-rememory-blue-dark font-arimo font-thin relative uppercase tracking-widest'>It Was A Good Dream</h2>
    {/if}
    {#if showTitle2}
      <h2 class='text-rememory-blue-dark font-arimo font-thin relative uppercase tracking-widest'>Linter</h2>
    {/if}
  </div>
</div>
<audio class='hidden' controls bind:currentTime={timestamp} bind:duration={duration} src={linter} bind:paused={paused} />

<style>
  .backgroundShift1 {
    animation: background-white-to-orange 5680ms forwards ease-in;
  }

  .backgroundShift2 {
    animation: background-white-to-blue 5680ms forwards ease-in;
  }

  @keyframes move-up {
    0% { transform: translate3d(0,0,0) }
    100% { transform: translate3d(0,-200px,0) }
  }

  @keyframes move-down {
    0% { transform: translate3d(0,0,0) }
    100% { transform: translate3d(0,200px,0) }
  }

  @keyframes background-white-to-orange {
    0% { background: #ffffff }
    100% { background: #E13D31 }
  }

  @keyframes background-white-to-blue {
    0% { background: #ffffff }
    100% { background: #0B0C1B }
  }
</style>