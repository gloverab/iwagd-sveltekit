<script lang='ts'>
  import wavesBg1 from '$images/waves-square-bg-1.png'
  import wavesBg2 from '$images/waves-square-bg-2.png'
  import glowLight1 from '$images/glow-light-1.png'
  import glowLight2 from '$images/glow-light-2.png'
  import blueInnerDots from '$images/blue-inner-dots.png'
  import orangeCenter from '$images/orange-center.png'
  import yellowSparks from '$images/yellow-sparks.png'
</script>

<div class='w-screen h-screen bg-rememory-blue-dark flex items-center justify-center overflow-hidden'>
  <div class='w-480 h-480 flex-shrink-0 flex relative'>
    <img class='max-w-none absolute top-0 left-0 spin-waves-2' src={wavesBg2} />
    <img class='max-w-none absolute top-0 left-0 spin-waves-1' src={wavesBg1} />
    <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
      <img class='max-w-none pulse-fade-1' src={glowLight1} />
    </div>
    <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
      <img class='max-w-none pulse-fade-2' src={glowLight2} />
    </div>
    <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
      <img class='max-w-none spin-blue-dots' src={blueInnerDots} />
    </div>
    <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
      <img class='max-w-none pulse-center' src={orangeCenter} />
    </div>
    <div class='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
      <img class='max-w-none spin-yellow-sparks' src={yellowSparks} />
    </div>
  </div>
  <div class='z-1 absolute top-0 left-0 w-full h-full flex justify-center items-center'>
    <div class='h-124 flex flex-col justify-between items-center'>
      <div>
        <a class='inline glitch-hover' href='/'>
          <h1 class='text-white inline text-base italic tracking-0.2em text-shadow'>IT WAS A GOOD DREAM</h1>
        </a>
      </div>
      <div class='flex flex-row space-x-10'>
        <a href='/' disabled>
          <span class='nav-text opacity-50'>Pre Order</span>
        </a>
        <a class='glitch-hover' href='/'>
          <span class='nav-text text-shadow'>Listen</span>
        </a>
        <a class='glitch-hover' href='/'>
          <span class='nav-text text-shadow'>Tour</span>
        </a>
        <a class='glitch-hover' href='/'>
          <span class='nav-text text-shadow'>Contact</span>
        </a>
        <a class='glitch-hover' href='/'>
          <span class='nav-text text-shadow'>Merch</span>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .nav-text {
    @apply text-white inline text-base italic tracking-0.2em uppercase;
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

  .glitch-hover:hover {
    animation: glitch-hover 0.25s linear;
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

  @keyframes glitch-hover {
    0% { opacity: 100%; transform: translate3d(0, 0, 0); }
    5% { opacity: 100%; }
    6% { opacity: 0%; }
    20% { opacity: 0%; }
    21% { opacity: 100%; }
    41% { opacity: 100%; }
    42% { opacity: 0%; }
    62% { opacity: 0%; }
    63% { opacity: 100%; }
    75% { transform: translate3d(0, 0, 0); }
    76% { transform: translate3d(18px, -25px, 0); }
    86% { transform: translate3d(20px, -30px, 0); }
    87% { transform: translate3d(0, 0, 0); }

    100% { opacity: 100%; }
  }
</style>