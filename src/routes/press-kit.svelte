<script>
  import HeroImg from '$images/iwagd-presskit-img.jpeg';
  import Biography from '$lib/Presskit/Biography.svelte';
  import Footer from '$lib/Presskit/Footer.svelte';
  import Press from '$lib/Presskit/Press.svelte';
  import Releases from '$lib/Presskit/Releases.svelte';
  import Sidebar from '$lib/Presskit/Sidebar.svelte';
  import TourDates from '$lib/Presskit/TourDates.svelte';
  import Videos from '$lib/Presskit/Videos.svelte';
</script>

<img class='md:hidden' alt='press' src={HeroImg} />

<div class='divide-y divide-black divide-opacity-20 md:mt-20'>
  <div class='x-container'>
    <div class='width-limit md:flex md:justify-between md:space-x-5 md:pb-15'>
      <div class='space-y-2.5 pt-5.5 pb-10 relative md:flex-1'>
        <h4 class='text-xs lg:text-sm'>Press Kit</h4>
        <h1 class='text-2xl leading-7 font-normal sm:text-6xl'>It Was A Good Dream</h1>
        <h4 class='lg:text-lg'>Melodic Instrumental • Post-Rock</h4>
      </div>
      <div class='hidden md:top-0 md:block md:flex-1'>
        <img alt='press' src={HeroImg} />
      </div>
    </div>
  </div>

  <div class='x-container-desktop'>
    <div class='width-limit sm:flex sm:flex-row-reverse sm:py-15'>
      <Sidebar />
      <Biography />
    </div>
  </div>

  <Releases />

  <Videos />
  <Press />
  <TourDates />

  <Footer />
</div>