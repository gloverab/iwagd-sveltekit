<svelte:head>
  <title>It Was A Good Dream | Press Kit</title>
</svelte:head>

<script lang='ts'>
  import { onMount } from 'svelte';
  import HeroImg from '$images/iwagd-presskit-img.jpeg';
  import Biography from '$lib/Presskit/Biography.svelte';
  import Footer from '$lib/Presskit/Footer.svelte';
  import Press from '$lib/Presskit/Press.svelte';
  import Releases from '$lib/Presskit/Releases.svelte';
  import Sidebar from '$lib/Presskit/Sidebar.svelte';
  import TourDates from '$lib/Presskit/TourDates.svelte';
  import Videos from '$lib/Presskit/Videos.svelte';

  const url = "https://secret-coast-09187.herokuapp.com/"

  let loading = true
  let performer: any

  const getPerformer = async () => {
    try {
      const resp = await fetch(url + 'performers/3')
      performer = await resp.json()
    } catch (err) {
      console.log('performer ERR: ', err)
    }
  }

  onMount(() => {
    getPerformer()
  })
</script>

{#if performer}
  <img class='md:hidden' alt='press' src={HeroImg} />

  <div class='divide-y divide-black divide-opacity-20 md:mt-20'>
    <div class='x-container'>
      <div class='width-limit md:flex md:justify-between md:space-x-5 md:pb-15'>
        <div class='space-y-2.5 pt-5.5 pb-10 relative md:flex-1'>
          <h4 class='text-xs lg:text-sm'>Press Kit</h4>
          <h1 class='text-2xl leading-7 font-normal sm:text-6xl'>{performer?.name}</h1>
          <h4 class='lg:text-lg'>{performer?.tag_line}</h4>
        </div>
        <div class='hidden md:top-0 md:block md:flex-1'>
          <img alt='press' src={HeroImg} />
        </div>
      </div>
    </div>

    <div class='x-container-desktop'>
      <div class='width-limit sm:flex sm:flex-row-reverse sm:py-15'>
        <Sidebar
          {performer}
        />
        <Biography
          biography={performer?.long_bio}
        />
      </div>
    </div>

    <Releases />

    <Press
      quotes={performer?.epk_press}
    />
    <Videos />
    <!-- <TourDates /> -->

    <Footer />
  </div>
{/if}