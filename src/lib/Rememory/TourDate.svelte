<script lang='ts'>
  import moment from "moment";
  import { onMount } from "svelte";

  export let index: number
  export let item: any
  export let hideLine = false;
  export let show = false
  export let past = false

  const ticketLink = item.offers.filter(i => i.type === "Tickets")[0]?.url || item.url

  onMount(() => {
    setTimeout(() => show = true, (index + 1) * 125)
  })
</script>

<div
  class:opacity-0={!show}
  class:opacity-75={past && show}
  class:opacity-100={!past && show}
  class:translate-y-8={!show}
  class:translate-y-0={show}
  class="flex py-2 sm:py-4 px-5 duration-250 w-full transform justify-between text-white {past ? "" : "text-shadow"} italic relative">
  <div class='flex space-x-12 items-center'>
    <div class='flex flex-col items-center'>
      <p class='text-xs'>{moment(item.datetime).format('MMM')}</p>
      <p class='text-base'>{moment(item.datetime).format('DD')}</p>
    </div>
    <div class='hidden sm:flex items-center'>
      <p>{moment(item.datetime).format('h:mm A')}</p>
    </div>
    <div class='flex flex-col'>
      <p class='uppercase text-xs'>{item.venue.location}</p>
      <p>{item.venue.name}</p>
    </div>
  </div>

  <div class='hidden sm:flex items-center'>
    {#if past}
      <p class='line-through cursor-default'>Tickets</p>
    {:else}
      <a href={ticketLink} target='blank'>Tickets</a>
    {/if}
  </div>
  {#if !hideLine}
    <div class:scale-x-0={!show} class:scale-x-100={show} class='absolute bottom-0 left-0 h-0.25 w-full bg-white transform origin-left duration-400' />
  {/if}
</div>