<script lang='ts'>
	import 'virtual:windi.css';
</script>

<div class='font-arimo'>
  <slot></slot>
</div>

<style windi:preflights:global windi:safelist:global global>
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