<script lang='ts'>
  import { onMount } from "svelte";
  import AppleMusic from "$icons/AppleMusic.svelte";
  import Bandcamp from "$icons/Bandcamp.svelte";
  import Spotify from "$icons/Spotify.svelte";

  export let show = false

  let showVideo = false
  let showItem1 = false
  let showItem2 = false
  let showItem3 = false

  $: if (show) {
    setTimeout(() => showVideo = true, 100)
    setTimeout(() => showItem1 = true, 200)
    setTimeout(() => showItem2 = true, 300)
    setTimeout(() => showItem3 = true, 400)
  } else {
    setTimeout(() => showVideo = false, 100)
    setTimeout(() => showItem1 = false, 200)
    setTimeout(() => showItem2 = false, 300)
    setTimeout(() => showItem3 = false, 400)
  }

</script>

<div class='w-full h-full mt-10 sm:mt-0 sm:h-auto sm:w-160 space-y-5'>
  <div class='flex flex-col w-full justify-start items-center space-y-5 sm:space-y-0 sm:flex-row sm:justify-between'>
    <a class:show={showItem1} href='https://itwasagooddream.bandcamp.com' target='blank' class='listen-link flex items-center space-x-2.5'>
      <div class='w-5 sm:w-7.5'>
        <Bandcamp noHover classes='fill-white' />
      </div>
      <span class='text text-shadow'>Listen on Bandcamp</span>
    </a>
    <a class:show={showItem2} href='https://open.spotify.com/artist/3ib3FBBRjLNrucyXI6Jt6o?si=KKt2nbHqSySSwefF4tsqgg' target='blank' class='listen-link flex items-center space-x-2.5'>
      <div class='w-5 sm:w-7.5'>
        <Spotify noHover classes='fill-white' />
      </div>
      <span class='text text-shadow'>Listen on Spotify</span>
    </a>
    <a class:show={showItem3} href='https://music.apple.com/us/artist/it-was-a-good-dream/1356024166' class='listen-link flex items-center space-x-2.5'>
      <div class='w-5 sm:w-7.5'>
        <AppleMusic noHover classes='fill-white' />
      </div>
      <span class='text text-shadow'>Listen on Apple Music</span>
    </a>
  </div>
  <div class='h-90 w-full sm:h-90 flex justify-center relative'>
    <div class:rise={showVideo} class='absolute bottom-0 h-0 overflow-hidden duration-300'>
      <iframe class='hidden sm:block' width="640" height="360" src="https://www.youtube.com/embed/ATAruHfKVbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="100%" src="https://www.youtube.com/embed/ATAruHfKVbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>

<style>
  .listen-link {
    @apply opacity-0 transform translate-y-7 duration-100 ease-out;
  }

  .listen-link.show {
    @apply opacity-100 translate-y-0 duration-150 ease-in;
  }

  .rise {
    @apply h-full duration-300;
  }

  .text {
    @apply text-sm sm:text-base text-white text-center inline text-base italic;
  }
</style>