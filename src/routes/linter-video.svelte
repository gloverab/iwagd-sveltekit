<script lang='ts'>
  import { onMount } from "svelte";
  import linter from "$src/assets/audio/linter-unmastered.wav"
  import ThreePanel from "$lib/LinterVideo/ThreePanel.svelte";

  let time = 0
  let spanW= 0
  let screenW = 0

  let showTitle1 = true
  let showTitle2 = false

  let backgroundShift1 = false
  let backgroundShift2 = false

  let showFlashGroup1 = false

  const removeFlashGroup1 = () => {
    showFlashGroup1 = false
  }

  $: numEl = Math.ceil(screenW / spanW)
  $: arr = new Array(numEl || 0)

  $: if (time > 1.42 && time < 1.44) {
    backgroundShift1 = true
    backgroundShift2 = false
    showFlashGroup1 = true
  } else if (time > 7.10 && time < 7.12) {
    backgroundShift1 = false
    backgroundShift2 = true
    showFlashGroup1 = true
  } else if (time > 12.78 && time < 12.80) {
    showTitle1 = false
    showTitle2 = true
    backgroundShift2 = false
    backgroundShift1 = true
    showFlashGroup1 = true
  } else if (time > 18.46 && time < 18.48) {
    backgroundShift2 = true
    backgroundShift1 = false
    showFlashGroup1 = true
  } else if (time > 24.14 && time < 24.16) {
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
    {#if showTitle1}
      <h2 class='text-rememory-blue-dark font-arimo font-thin relative uppercase tracking-widest'>It Was A Good Dream</h2>
    {/if}
    {#if showTitle2}
      <h2 class='text-rememory-blue-dark font-arimo font-thin relative uppercase tracking-widest'>Linter</h2>
    {/if}
  </div>
</div>
<audio controls bind:currentTime={time} src={linter} />

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