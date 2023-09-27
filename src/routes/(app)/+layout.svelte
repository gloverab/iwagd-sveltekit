<script lang='ts'>
  import 'virtual:windi.css';
  import smokeTopMobile from '$images/smoke-top.png'
  import smokeBottomMobile from '$images/smoke-bottom.png'
  import wavesBg1 from '$images/waves-square-bg-1.png'
  import wavesBg2 from '$images/waves-square-bg-2.png'
  import glowLight1 from '$images/glow-light-1.png'
  import glowLight2 from '$images/glow-light-2.png'
  import blueInnerDots from '$images/blue-inner-dots.png'
  import orangeCenter from '$images/orange-center.png'
  import yellowSparks from '$images/yellow-sparks.png'
  import { page } from '$app/stores';
  import ListenPage from '$lib/Rememory/ListenPage.svelte';
  import Facebook from '$icons/Facebook.svelte';
  import InstagramLite from '$icons/InstagramLite.svelte';
  import AppleMusic from '$icons/AppleMusic.svelte';
  import Spotify from '$icons/Spotify.svelte';
  import Tidal from '$icons/Tidal.svelte';
  import UpcomingModal from '$lib/Rememory/UpcomingModalContent.svelte';
  import { showUpcomingModal } from '$src/stores/rememory';
  import { onMount } from 'svelte';
  import Bandcamp from '$icons/Bandcamp.svelte';
  import Modal from '$lib/Modal.svelte';
  import UpcomingModalContent from '$lib/Rememory/UpcomingModalContent.svelte';
  import { blur, fade } from 'svelte/transition';

  let showDrawing = false

  $: hideArtwork = $page.url.pathname.includes('contact') || $page.url.pathname.includes('listen') || $page.url.pathname.includes('shows')

  const onHideModal = () => {
    showUpcomingModal.set(false)
  }

  const links = [
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
      text: 'Listen on Tidal',
      url: 'https://tidal.com/browse/album/282520515',
      icon: Tidal
    },
    {
      text: 'Listen on Bandcamp',
      url: 'https://itwasagooddream.bandcamp.com/album/rememory',
      icon: Bandcamp
    },
  ]

  onMount(async () => {
    setTimeout(() => {
      showDrawing = true
    })
    try {
      await caches.delete("sw-precache-v3-sw-precache-webpack-plugin-https://www.itwasagooddream.com/ - https://www.itwasagooddream.com")
    } catch (err) {
      console.log(err)
    } finally {
      return {}
    }
  })
</script>

<svelte:head>
  <title>It Was A Good Dream | Official Website</title>
</svelte:head>

<div class='font-arimo'>
  <Modal
    show={$showUpcomingModal}
    onHide={onHideModal}
  >
    <UpcomingModalContent
      title="New Album 'Rememory' is Out Now."
      {links}
      onHide={onHideModal}
    />
  </Modal>

  <div class='w-screen h-screen bg-rememory-blue-dark flex items-center justify-center overflow-hidden'>
    <div class='w-full h-full sm:w-480 sm:h-480 flex-shrink-0 flex relative'>
      <img class='fixed sm:hidden top-0 left-0 max-w-none' src={smokeTopMobile} />
      <img class='fixed sm:hidden bottom-0 left-0 max-w-none' src={smokeBottomMobile} />
      <div class='sm:hidden flex justify-center items-center w-full h-full'>
        <img class='max-w-none h-3/2' src={wavesBg2} />
      </div>
      <img alt='background waves 2' class='hidden sm:block max-w-none absolute top-0 left-0 spin-waves-2' src={wavesBg2} />
      <img alt='background waves 1' class='hidden sm:block max-w-none absolute top-0 left-0 spin-waves-1' src={wavesBg1} />
      <div class:fade-out={hideArtwork} class='absolute top-0 left-0 w-full h-full flex items-center justify-center delay-400'>
        <img alt='glow light 1' class='max-w-none pulse-fade-1' src={glowLight1} />
      </div>
      <div class:fade-out={hideArtwork} class='absolute top-0 left-0 w-full h-full flex items-center justify-center delay-400'>
        <img alt='glow light 2' class='max-w-none pulse-fade-2' src={glowLight2} />
      </div>
      <div class:shrink={hideArtwork} class='absolute top-0 left-0 w-full h-full flex items-center justify-center transform scale-100 duration-350 delay-400'>
        <img alt='blue inner dots' class='max-w-6/7 sm:max-w-none spin-blue-dots' src={blueInnerDots} />
      </div>
      <div class:shrink={hideArtwork} class='absolute top-0 left-0 w-full h-full flex items-center justify-center transform scale-100 duration-350 delay-400'>
        <img alt='orange heartbeat center' class='max-w-4/5 sm:max-w-none pulse-center' src={orangeCenter} />
      </div>
      <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        <img class:fade-out={hideArtwork} alt='yellow sparks' class='max-w-full sm:max-w-none spin-yellow-sparks duration-150 opacity-100 delay-400' src={yellowSparks} />
      </div>
    </div>
    <div class='z-1 absolute top-0 left-0 w-full h-full flex justify-center items-center'>
      <div class='w-full sm:w-auto h-full py-20 sm:py-0 sm:h-139 relative flex flex-col justify-between items-center'>
        <div class='z-2 relative'>
          <a data-content="IT WAS A GOOD DREAM" class='inline glitch-hover text-white inline text-base italic tracking-0.2em text-shadow' href='/'>
            <h1 class='text-white inline text-base italic tracking-0.2em text-shadow'>IT WAS A GOOD DREAM</h1>
          </a>
        </div>
        <ListenPage
          show={$page.url.pathname.includes('listen')}
        />
        <slot></slot>
        <div class='
          z-2
          flex
          flex-col
          items-start
          space-y-1.5
          fixed
          left-10
          bottom-10
          sm:relative
          sm:flex-row
          sm:space-x-10
          sm:space-y-0
          sm:left-0
          sm:bottom-0
        '>
          <button on:click={() => showUpcomingModal.set(true)} target='blank' data-content='Buy "Rememory" LP' class='glitch-hover nav-text' href='https://itwasagooddream.bandcamp.com/album/rememory'>
            <span class='nav-text text-shadow'>Buy "Rememory" LP</span>
          </button>
          <a sveltekit:prefetch data-content="Listen" class='glitch-hover nav-text' href='/listen'>
            <span class='nav-text text-shadow'>Listen</span>
          </a>
          <a data-content="Tour" class='glitch-hover nav-text' href='/shows'>
            <span class='nav-text text-shadow'>Tour</span>
          </a>
          <a data-content="Contact" class='glitch-hover nav-text' href='/contact'>
            <span class='nav-text text-shadow'>Contact</span>
          </a>
          <a data-content="Merch" class='glitch-hover nav-text' target='blank' href='https://itwasagooddream.bandcamp.com/merch'>
            <span class='nav-text text-shadow'>Merch</span>
          </a>
          <div class='fixed bottom-10 right-10 sm:bottom-0 sm:right-0 sm:relative flex space-x-5'>
            <a href='http://facebook.com/iwagd' target='blank'>
              <div class='w-5 h-5'>
                <Facebook classes='fill-white' />
              </div>
            </a>
            <a href='http://instagram.com/itwasagooddream' target='blank'>
              <div class='w-5 h-5'>
                <InstagramLite classes='fill-white' />
              </div>
            </a>
          </div>
        </div>
        {#if showDrawing}
          <div transition:blur={{ duration: 2500 }} class='w-full fixed top-32 sm:top-auto sm:bottom-12 flex justify-center'>
            <a data-content='Watch the award-winning short film "Drawing Your Recurve" →' class='glitch-hover nav-text bg-primary-default px-4 py-1 max-w-[calc(100vw_-_8rem)] text-center' target='blank' href='/videos/drawing-your-recurve/watch'>
              <span class='nav-text text-shadow'>Watch the award-winning short film "Drawing Your Recurve" →</span>
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>