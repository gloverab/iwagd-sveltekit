<script lang='ts'>
  import viewport from '$src/actions/userViewportAction';
  import AppleMusic from '$icons/AppleMusic.svelte';
  import Spotify from '$icons/Spotify.svelte';
  import Tidal from '$icons/Tidal.svelte';
  import Bandcamp from '$icons/Bandcamp.svelte';
  import { page } from '$app/stores';

  const streamingLinks = [
    {
      text: 'Listen on Spotify',
      url: 'https://open.spotify.com/album/5ekMzcyoak0orVXj3SvF7R?si=ZFxYanZ6Q9yzgaRJQUXLVQ',
      icon: Spotify
    },
    {
      text: 'Listen on Apple Music',
      url: 'https://music.apple.com/us/album/rememory/1677867233',
      icon: AppleMusic
    },
    {
      text: 'Listen on Bandcamp',
      url: 'https://itwasagooddream.bandcamp.com/album/rememory',
      icon: Bandcamp
    },
  ]

  const videoUrl = "https://www.youtube.com/embed/nHmEDGQgexU"

  let videoWrapperW = 0
  let mousePositionX = 0
  let mousePositionY = 0
  let linkParentEl: any
  let watchEl: any
  let readEl: any
  let showButton = true
  let youtubeVideo
  let oneMinuteTimeout
  let fiveMinuteTimeout

  $: console.log(linkParentEl?.getBoundingClientRect())
  $: console.log(watchEl?.getBoundingClientRect())

  const handleMouseMove = (e: any) => {
    mousePositionX = e.clientX
    mousePositionY = e.clientY
    console.log(e)
  }

  const handleVideoPlayClick = () => {
    fbq('trackCustom', 'videoClick')
  }

  const handleOneMinute = () => {
    fbq('trackCustom', 'oneMinuteAfterVideoPlay')
  }

  const handleFiveMinutes = () => {
    fbq('trackCustom', 'fiveMinutesAfterVideoPlay')
  }

  const handleOverlayClick = () => {
    showButton = false
    const symbol = youtubeVideo.src.indexOf("?") > -1 ? "&" : "?";
    youtubeVideo.src += symbol + "autoplay=1"
    handleVideoPlayClick()
    oneMinuteTimeout = setTimeout(handleOneMinute, 60000)
    fiveMinuteTimeout = setTimeout(handleFiveMinutes, 300000)
  }


  $: element = $page.url.pathname.includes('/watch') ? watchEl : readEl
  $: styleStringVal = (element?.getBoundingClientRect().top - linkParentEl?.getBoundingClientRect().top) + (element?.getBoundingClientRect().height / 2)
  $: console.log(styleStringVal)
</script>

<svelte:window on:mousemove={handleMouseMove} />
<div class='bg-rememory-blue-dark min-h-screen font-arimo grid grid-cols-12 px-36 items-center'>
  <div class='col-span-12'>
    <div style="transform: translate3d({mousePositionX - 120}px, {mousePositionY - 120}px, 0px)" class='fixed w-60 h-60 top-0 left-0 bg-rememory-blue-glow orb rouned-full duration-3000 ease-out' />
    <div class='relative grid gap-20 grid-cols-12 mb-10'>
      <div class='col-span-2' />
      <div class='col-span-10'>
        <h2 class='text-white uppercase italic text-xs font-light tracking-0.2em text-center mb-4'>It was a good dream + colectivo alison present</h2>
        <h1 class='text-white font-medium uppercase text-center text-4xl tracking-6.4px'>Drawing Your Recurve</h1>
      </div>
    </div>
    <div class='relative grid gap-20 grid-cols-12 flex items-center'>
      <div bind:this={linkParentEl} class='relative col-span-2'>
        <div style="top: {styleStringVal}px" class='absolute -left-5 rounded-full bg-white w-1 h-1' />
        <div class='flex flex-col space-y-9'>
          <a bind:this={watchEl} sveltekit:prefetch data-content="Watch" class='glitch-hover nav-text' href='/watch'>
            <span class='nav-text text-shadow'>Watch</span>
          </a>
          <a bind:this={readEl} sveltekit:prefetch data-content="Read" class='glitch-hover nav-text' href='/read'>
            <span class='nav-text text-shadow'>Read</span>
          </a>
          <a sveltekit:prefetch data-content="Vinyl" class='glitch-hover nav-text' href='/listen'>
            <span class='nav-text text-shadow'>Vinyl</span>
          </a>
          <div class='flex space-x-6'>
            {#each streamingLinks as link}
              <a href={link.url}>
                <div class='w-5 h-5'>
                  <svelte:component classes='fill-white' this={link.icon} />
                </div>
              </a>
            {/each}
          </div>
        </div>
      </div>
      <div class='col-span-10 bg-white'>
        <div use:viewport class='w-full' bind:clientWidth={videoWrapperW}>
          <div
            style="height:{videoWrapperW / 1.7777777}px;"
            class='w-full h-131.75 relative border-1 border-black'>
            <iframe bind:this={youtubeVideo} style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>
            {#if showButton}
              <button class='block absolute top-0 left-0 w-full h-full' on:click={handleOverlayClick} />
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<svelte:head>
  <title>It Was A Good Dream | Drawing Your Recurve Music Video</title>
</svelte:head>

<style>
  .orb {
    filter: blur(120px);
  }
</style>