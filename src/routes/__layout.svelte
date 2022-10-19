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
  import AmazonMusic from '$icons/AmazonMusic.svelte';
  import AppleMusic from '$icons/AppleMusic.svelte';
  import Spotify from '$icons/Spotify.svelte';
  import Tidal from '$icons/Tidal.svelte';
  import UpcomingModal from '$lib/Rememory/UpcomingModal.svelte';
  import { showUpcomingModal } from '$src/stores/rememory';

  $: hideArtwork = $page.url.pathname.includes('contact') || $page.url.pathname.includes('listen') || $page.url.pathname.includes('shows')

  const onHideModal = () => {
    showUpcomingModal.set(false)
  }

  const links = [
    {
      text: 'Pre-save on Spotify',
      url: 'https://distrokid.com/hyperfollow/itwasagooddream/drawing-your-recurve',
      icon: Spotify
    },
    {
      text: 'Pre-save on Tidal',
      url: '#',
      icon: Tidal
    },
    {
      text: 'Pre-add on Apple Music',
      url: '#',
      icon: AppleMusic
    },
    {
      text: 'Pre-save on Amazon Music',
      url: '#',
      icon: AmazonMusic
    },
  ]
</script>

<div class='font-arimo'>
  <UpcomingModal
    name="Drawing Your Recurve"
    type='single'
    releaseText="Streaming November 18"
    {links}
    onHide={onHideModal}
    show={$showUpcomingModal}
  />

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
          <a href='#' disabled>
            <span class='nav-text opacity-50'>Pre Order</span>
          </a>
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
      </div>
    </div>
  </div>
</div>

<style windi:preflights:global windi:safelist:global global>
  .text-shadow {
    text-shadow: 0px 0px 25px #B4C5FF;
  }
  
  h1 {
    @apply text-6xl;
  }

  h2 {
    @apply text-2xl leading-7 font-normal;
  }

  h3 {
    @apply text-lg leading-6;
  }

  h4 {
    @apply text-sm tracking-wide font-normal uppercase leading-4;
  }

  p {
    @apply text-base leading-6;
  }

  p.b2 {
    @apply text-sm leading-4;
  }

  .x-container {
    @apply px-5 lg:px-10 xl:px-15 lg:flex lg:justify-center;
  }

  .x-container-mobile {
    @apply px-5 lg:px-0;
  }

  .x-container-desktop {
    @apply lg:px-10 xl:px-15 lg:flex lg:justify-center;
  }

  .width-limit {
    @apply max-w-375 w-full;
  }

  @font-face{
    font-family: 'Enigma';
    src: url('/TANENIGMA-DISPLAY.woff') format('woff');
  }
  
  @font-face{
    font-family: 'Agrandir Tight';
    src: url('/Agrandir-Tight.woff') format('woff');
  }

  @font-face{
    font-family: 'Agrandir WideBlackItalic';
    src: url('/Agrandir-WideBlackItalic.woff') format('woff');
  }

  .shrink {
    @apply scale-0 delay-0;
  }
  .fade-out {
    @apply opacity-0 duration-450 delay-0;
  }

  .nav-text {
    @apply text-sm text-white inline sm:text-base italic tracking-0.2em uppercase;
  }

  .spin-waves-2 {
    animation: spin 5000s infinite linear;
  }
  .spin-waves-1 {
    animation: spin 2000s infinite reverse linear;
  }
  .spin-blue-dots {
    animation: spin 300s infinite linear;
  }

  .pulse-fade-1 {
    animation: pulse-fade infinite linear 12s;
  }
  .pulse-fade-2 {
    animation: pulse-fade infinite linear 15s;
  }

  .spin-yellow-sparks {
    animation: spin 1800s infinite reverse linear;
  }

  .pulse-center {
    animation: pulse 10s infinite linear;
  }

  .glitch-hover {
    @apply relative;
  }

  .glitch-hover:hover span,
  .glitch-hover:hover h1 {
    animation: glitch-hover-main 0.4s linear infinite;
  }

  [data-content]:after {
    content: attr(data-content);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    color: white;
  }

  .glitch-hover:hover[data-content]:after {
    animation: glitch-hover-afters 0.25s linear forwards;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(.92); }
    100% { transform: scale(1); }
  }

  @keyframes pulse-fade {
    0% { opacity: 100%; }
    50% { opacity: 0%; }
    100% { opacity: 100%; }
  }

  @keyframes glitch-hover-main {
    0% { opacity: 100%; }
    5% { opacity: 100%; }
    6% { opacity: 0%; }
    20% { opacity: 0%; }
    21% { opacity: 100%; }
    41% { opacity: 100%; }
    42% { opacity: 0%; }
    54% { opacity: 0%; }
    55% { opacity: 100%; }
    63% { opacity: 0%; }

    99% { opacity: 0%; }
    100% { opacity: 100%; }
  }
  @keyframes glitch-hover-afters {
    0% { opacity: 0%; transform: translate3d(0, 0, 0); }
    41% {opacity: 0%; transform: translate3d(0, 0, 0); }
    42% {opacity: 100%; transform: translate3d(0, -16px, 0); }
    53% {opacity: 100%; transform: translate3d(0, -19px, 0); }
    54% { opacity: 0%; transform: translate3d(0, 0, 0); }
    63% { opacity: 100%; }
    75% { transform: translate3d(0, 0, 0); }
    76% { transform: translate3d(20px, -10px, 0); }
    80% { transform: translate3d(20px, -10px, 0); }
    81% { opacity: 100%; transform: translate3d(10px, -22px, 0); }
    82% { opacity: 0%; }
    85% { opacity: 100%; transform: translate3d(10px, -22px, 0); }
    86% { transform: translate3d(20px, -30px, 0); }
    87% { transform: translate3d(0, 0, 0); }
    99% { opacity: 100%; }
    100% { opacity: 100%; }
  }
</style>