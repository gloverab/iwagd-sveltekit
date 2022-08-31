<script lang='ts'>
  import AppleMusic from "$icons/AppleMusic.svelte";
  import Bandcamp from "$icons/Bandcamp.svelte";
  import Facebook from "$icons/Facebook.svelte";
  import Instagram from "$icons/Instagram.svelte";
  import Spotify from "$icons/Spotify.svelte";

  export let socials: any[]

  const getSocialIcon = (social: any) => {
    switch (social.social_network.slug) {
      case 'facebook':
      return Facebook
      case 'spotify':
      return Spotify
      case 'apple-music':
      return AppleMusic
      case 'bandcamp':
      return Bandcamp
      case 'instagram':
      return Instagram
    }
  }
</script>

<div class='flex space-x-5'>
  {#if socials?.length > 0}
    {#each socials as social}
      <a href={social.link} target='_blank' class='social-link w-7.5 h-7.5'>
        <svelte:component this={getSocialIcon(social)} />
      </a>
    {/each}
  {/if}
</div>

<style>
  .social-link:not(:hover) svg {
    /* @apply fill-black; */
  }
  
  .social-link:hover svg {
    @apply fill-secondary;
  }
</style>