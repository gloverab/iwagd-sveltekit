<script lang='ts'>
	import AmazonMusic from '$icons/AmazonMusic.svelte';
  import AppleMusic from '$icons/AppleMusic.svelte';
  import Spotify from '$icons/Spotify.svelte';
  import Tidal from '$icons/Tidal.svelte';
  import UpcomingModal from '$lib/Rememory/UpcomingModal.svelte';
  import { showUpcomingModal } from '$src/stores/rememory';
  import { onMount } from 'svelte';
  import 'virtual:windi.css';

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
  <slot></slot>
</div>

<UpcomingModal
  name="Drawing Your Recurve"
  type='single'
  releaseText="Streaming November 18"
  {links}
  onHide={onHideModal}
  show={$showUpcomingModal}
/>

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
</style>