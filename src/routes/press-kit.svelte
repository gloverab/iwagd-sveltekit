<script lang='ts' context='module'>
  const url = "https://secret-coast-09187.herokuapp.com/"
  // const url = "http://localhost:3001/"
  const getPerformer = new Promise(async (res, rej) => {
    const resp = await fetch(url + 'performers/3')
    if (resp.status === 200) {
      const data = await resp.json()
      res(data)
    } else {
      rej(resp)
    }
  })

  export const load = async () => {
    const data = await Promise.all([getPerformer])
    
    return {
      props: {
        performer: data[0]
      }
    }
  }
</script>

<script lang='ts'>
  import HeroImg from '$images/iwagd-presskit-img.jpeg';
  import Biography from '$lib/Presskit/Biography.svelte';
  import Footer from '$lib/Presskit/Footer.svelte';
  import Press from '$lib/Presskit/Press.svelte';
  import Releases from '$lib/Presskit/Releases.svelte';
  import Sidebar from '$lib/Presskit/Sidebar.svelte';
  import TourDates from '$lib/Presskit/TourDates.svelte';
  import Videos from '$lib/Presskit/Videos.svelte';

  export let performer: any
</script>

<img class='md:hidden' alt='press' src={performer.header_image} />

<div class='divide-y divide-black divide-opacity-20 md:mt-20'>
  <div class='x-container'>
    <div class='width-limit md:flex md:justify-between md:space-x-5 md:pb-15'>
      <div class='space-y-2.5 pt-5.5 pb-10 relative md:flex-1'>
        <h4 class='text-xs lg:text-sm'>Press Kit</h4>
        <h1 class='text-2xl leading-7 font-normal sm:text-6xl'>{performer.name}</h1>
        <h4 class='lg:text-lg'>{performer.tag_line}</h4>
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
        biography={performer.long_bio}
      />
    </div>
  </div>

  <Releases />

  <Press
    quotes={performer.epk_press}
  />
  <Videos />
  <TourDates />

  <Footer />
</div>