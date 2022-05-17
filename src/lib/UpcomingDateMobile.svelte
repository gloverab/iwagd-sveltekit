<script lang='ts'>
  import moment from "moment";

  export let upcomingDate: any
  export let handleMoreClick: () => void
</script>

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