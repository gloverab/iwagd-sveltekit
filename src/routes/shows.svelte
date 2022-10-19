<script lang='ts'>
  import { bandsInTownResponse } from "$lib/constants";
  import { BANDSINTOWN_API_KEY } from "$lib/Env";
  import TourDate from "$lib/Rememory/TourDate.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let loading = true
  let show = false
  let showLine1 = false
  let showLine2 = false
  let upcomingEvents = []
  let pastEvents = []
  let showTopGradient = false
  let showBottomGradient = false


  const getUpcomingEvents = async () => {
    try {
      const resp = await fetch(`https://rest.bandsintown.com/artists/id_15464365/events/?app_id=${BANDSINTOWN_API_KEY}&date=upcoming`)
      const data = await resp.json()
      return data
    } catch (err) {
      throw err
    }
  }

  const getPastEvents = async () => {
    try {
      const resp = await fetch(`https://rest.bandsintown.com/artists/id_15464365/events/?app_id=${BANDSINTOWN_API_KEY}&date=past`)
      const data = await resp.json()
      return data
    } catch (err) {
      throw err
    }
  }

  const handleScroll = (e) => {
    showTopGradient = e.target.scrollTop > 5
    showBottomGradient = e.target.scrollTop < e.target.scrollHeight - (e.target.clientHeight + 20)

    console.log('top', e.target.scrollTop)
    console.log('height', e.target.scrollHeight)
    console.log('c-height', e.target.clientHeight)
  }

  onMount(async () => {
    setTimeout(() => show = true, 400)
    setTimeout(() => showLine1 = true, 300)
    setTimeout(() => showLine2 = true, 400)
    try {
      const events = await Promise.all([getUpcomingEvents(), getPastEvents()])
      upcomingEvents = events[0]
      pastEvents = events[1].reverse()
    } catch (err) {
      console.log(err)
    } finally {
      loading = false
    }
  })

</script>

<div class='z-1 absolute top-0 left-0 w-full h-90 px-10 mt-30 sm:mt-10 sm:px-0 sm:h-120'>
{#if loading && !show}
  <p>sup. loading.</p>
{:else}
  <div on:scroll={handleScroll} out:fade={{ duration: 500 }} class='
    flex
    flex-col
    max-h-full
    space-y-4
    sm:space-y-8
    overflow-y-scroll
    scrollbar-hide
  '>
    <div class='w-full'>
      <div class='py-2 relative'>
        <p class='text-xs uppercase text-white text-left'>Upcoming</p>
        <div class:scale-x-0={!showLine1} class:scale-x-100={showLine1} class='absolute bottom-0 left-0 h-0.25 w-full bg-white transform origin-left duration-400' />
      </div>
    
      {#if upcomingEvents.length > 0}
        <div class='divide-y w-full'>
          {#each upcomingEvents as item, index (item.id)}
            <TourDate
              {index}
              {item}
              hideLine={index === upcomingEvents.length - 1}
            />
          {/each}
        </div>
      {:else}
        <p class='text-white mt-4 italic'>There are no tour dates scheduled at this time. Please check back again soon.</p>
      {/if}
    </div>
    <div class='w-full'>
      <div class='py-2 relative'>
        <div class:opacity-100={showLine2} class:opacity-0={!showLine2} class='duration-400'>
          <p class='text-xs uppercase text-white text-left opacity-75'>Past</p>
        </div>
        <div class:scale-x-0={!showLine2} class:scale-x-100={showLine2} class='absolute bottom-0 left-0 h-0.25 w-full bg-white transform origin-left duration-400' />
      </div>
    
      {#if pastEvents.length > 0}
        <div class='w-full'>
          {#each pastEvents as item, index (item.id)}
            <TourDate
              index={index + upcomingEvents.length}
              {item}
              past
              hideLine={index === pastEvents.length - 1}
            />
          {/each}
        </div>
      {:else}
        <p class='text-white mt-4 italic'>There are no tour dates scheduled at this time. Please check back again soon.</p>
      {/if}
    </div>
  </div>
  {/if}
  <div class:opacity-100={showTopGradient} class:opacity-0={!showTopGradient} class='h-20 bg-scroll-gradient-t w-full absolute top-0 left-0 duration-200' />
  <div class:opacity-100={showBottomGradient} class:opacity-0={!showBottomGradient} class='h-20 bg-scroll-gradient-b w-full absolute bottom-0 left-0 duration-200' />
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>