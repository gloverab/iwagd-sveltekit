<script lang='ts'>
  import Feather from "$icons/Feather.svelte";

  export let textTop: string
  export let textLine1: string
  export let textLine2: string
  export let textLine3 = ''
  export let visible: boolean
  export let year: string
</script>

<div class='grid-span-1'>
  <div class='relative w-full flex items-center justify-between'>
    <div class='w-1/3'>
      <Feather {visible} />
    </div>
    <div class='mirror w-1/3'>
      <Feather {visible} />
    </div>
    <div class='absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center px-1/7 text-white'>
      <div class='w-full'>
        <div class='w-full mb-0.5'>
          <svg width="100%" class='font-helvetica font-thin uppercase' viewBox="0 0 10 1">
            <text class='stroke-white flicker-1' x="5" y="1" text-anchor="middle" font-size="1" fill="white" stroke-width=".01">{textTop}</text>
          </svg>
        </div>
        {#if !textLine3}
          <div class='w-full mb-1'>
            <svg class='font-helvetica w-full font-semibold tracking-0.05px' viewBox="0 0 9 2">
              <text class='stroke-white flicker-1' x="4.5" y="1" text-anchor="middle" font-size=".85" fill="white" stroke-width=".01">{textLine1}</text>
              <text class='stroke-white flicker-1' x="4.5" y="2" text-anchor="middle" font-size=".85" fill="white" stroke-width=".01">{textLine2}</text>
            </svg>
          </div>
        {:else}
          <div class='w-full mb-1'>
            <svg class='font-helvetica w-full font-semibold tracking-0.05px' viewBox="0 0 9 3">
              <text class='stroke-white flicker-1' x="4.5" y="1" text-anchor="middle" font-size=".85" fill="white" stroke-width=".01">{textLine1}</text>
              <text class='stroke-white flicker-1' x="4.5" y="2" text-anchor="middle" font-size=".85" fill="white" stroke-width=".01">{textLine2}</text>
              <text class='stroke-white flicker-1' x="4.5" y="3" text-anchor="middle" font-size=".85" fill="white" stroke-width=".01">{textLine3}</text>
            </svg>
          </div>
        {/if}
        <div class='w-full'>
          <svg width="100%" class='font-helvetica font-thin' viewBox="0 0 10 1">
            <text class='stroke-white flicker-1' x="5" y="1" text-anchor="middle" font-size="1" fill="white" stroke-width=".01">{year}</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .mirror {
    transform: scaleX(-1);
  }
</style>