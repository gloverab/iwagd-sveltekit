<script lang='ts'>
  import AppleMusic from '$icons/AppleMusic.svelte';
  import Spotify from '$icons/Spotify.svelte';
  import Bandcamp from '$icons/Bandcamp.svelte';
  import { page } from '$app/stores';
  import Accolades from '$lib/VideoPage/Accolades.svelte';
  import AboutVideo from '$lib/VideoPage/AboutVideo.svelte';
  import VideoEmbed from '$lib/VideoPage/VideoEmbed.svelte';

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
  
  let mousePositionX = 0
  let mousePositionY = 0
  let linkParentEl: any
  let watchEl: any
  let readEl: any
  let watchPageH = 0

  const handleMouseMove = (e: any) => {
    mousePositionX = e.clientX
    mousePositionY = e.clientY
  }

  $: watchPage = $page.url.pathname.includes('/watch')
  $: element = watchPage ? watchEl : readEl
  $: styleStringVal = (element?.getBoundingClientRect().top - linkParentEl?.getBoundingClientRect().top) + (element?.getBoundingClientRect().height / 2)
</script>

<svelte:window on:mousemove={handleMouseMove} />
<div class='bg-rememory-blue-dark min-h-screen font-arimo grid grid-cols-12 px-6 sm:px-20 md:px-12 lg:px-28 xl:px-36 w-screen md:items-center'>
  <div class='w-full flex justify-center col-span-12'>
    <div class='hidden md:block col-span-12 max-w-288 w-full'>
      <div style="transform: translate3d({mousePositionX - 120}px, {mousePositionY - 120}px, 0px)" class='fixed w-60 h-60 top-0 left-0 bg-rememory-blue-glow orb rouned-full duration-3500 ease-out' />
      <div class='relative grid gap-10 xl:gap-20 grid-cols-12 flex items-center'>
        <div bind:this={linkParentEl} class='relative col-span-2'>
          <div style="top: {styleStringVal}px" class='absolute -left-5 rounded-full bg-white w-1 h-1 duration-300' />
          <div class='flex flex-col space-y-9'>
            <a bind:this={watchEl} sveltekit:prefetch data-content="Watch" class='glitch-hover nav-text' href='/videos/{$page.params.videoName}/watch'>
              <span class='nav-text text-shadow'>Watch</span>
            </a>
            <a bind:this={readEl} sveltekit:prefetch data-content="Read" class='glitch-hover nav-text' href='/videos/{$page.params.videoName}/read'>
              <span class='nav-text text-shadow'>Read</span>
            </a>
            <a sveltekit:prefetch data-content="Vinyl" class='glitch-hover nav-text' target="_blank" href='https://itwasagooddream.bandcamp.com/album/rememory'>
              <span class='nav-text text-shadow'>Vinyl</span>
            </a>
            <div class='flex space-x-6'>
              {#each streamingLinks as link}
                <a target="_blank" href={link.url}>
                  <div class='w-5 h-5'>
                    <svelte:component classes='fill-white' this={link.icon} />
                  </div>
                </a>
              {/each}
            </div>
          </div>
        </div>
        <div style="height: {watchPageH}px" class='col-span-10 overflow-hidden'>
          <div style="transform: translate3d(0, -{watchPage ? 0 : watchPageH}px, 0)" class='duration-500'>
            <div bind:offsetHeight={watchPageH} class='py-20'>
              <h2 class='text-white uppercase italic text-xs font-light tracking-0.2em text-center mb-4'>It was a good dream + colectivo alison present</h2>
              <h1 class='text-white font-medium uppercase text-center text-4xl tracking-6.4px mb-10'>Drawing Your Recurve</h1>
              <VideoEmbed
                videoUrl="https://www.youtube.com/embed/gDvZBD4SO3A?si=2LO8cGFYj9BKzooE"
              />
            </div>
  
            <div style="height: {watchPageH}px" class='flex flex-col justify-center py-20 xl:px-18'>
              <AboutVideo />
              <Accolades
                {watchPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='md:hidden py-10'>
      <div class='fixed w-60 h-60 top-0 left-0 bg-rememory-blue-glow orb rouned-full duration-3500 ease-out transform translate-x-1/2' />
      <div class='mb-10 relative'>
        <h2 class='text-white uppercase italic text-xs font-light tracking-0.2em text-center mb-4'>It was a good dream + colectivo alison present</h2>
        <h1 class='text-white font-medium uppercase text-center text-4xl tracking-6.4px mb-6'>Drawing Your Recurve</h1>
        <VideoEmbed
          videoUrl="https://www.youtube.com/embed/gDvZBD4SO3A?si=2LO8cGFYj9BKzooE"
        />
      </div>
      <div class='mb-10 relative'>
        <AboutVideo />
        <Accolades />
      </div>
      <div class='flex space-x-6 justify-center relative'>
        <a sveltekit:prefetch data-content="Vinyl" class='glitch-hover nav-text' target="_blank" href='https://itwasagooddream.bandcamp.com/album/rememory'>
          <span class='nav-text text-shadow'>Vinyl</span>
        </a>
        {#each streamingLinks as link}
          <a target="_blank" href={link.url}>
            <div class='w-5 h-5'>
              <svelte:component classes='fill-white' this={link.icon} />
            </div>
          </a>
        {/each}
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

  @keyframes flicker1 {
    0% { opacity: 1; }
    14% { opacity: 1; }
    15% { opacity: 0; }
    21% { opacity: 0; }
    22% { opacity: 1; }
    42% { opacity: 1; }
    43% { opacity: 0; }
    50% { opacity: 0; }
    51% { opacity: 1; }
    57% { opacity: 1; }
    58% { opacity: 0; }
    61% { opacity: 0; }
    62% { opacity: 1; }
    80% { opacity: 1; }
    81% { opacity: 0; }
    83% { opacity: 0; }
    84% { opacity: 1; }
    95% { opacity: 1; }
    96% { opacity: 0; }
    98% { opacity: 0; }
    99% { opacity: 1; }
  }
</style>