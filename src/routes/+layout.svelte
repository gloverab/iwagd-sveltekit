<script lang='ts'>
  import 'virtual:windi.css';
</script>

<slot />

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