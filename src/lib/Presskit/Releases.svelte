<script lang='ts'>
  import RecollectVinyl from "$images/hmtr-artwork.jpeg"
  import RememoryArtwork from "$images/rememory-artwork.jpg"
  import DSSArtwork from "$images/dss-artwork.jpeg"
  import ReleaseItem from "./ReleaseItem.svelte"

  const releaseItems = [
    {
      name: 'Rememory',
      releaseDate: 'upcoming',
      type: 'LP',
      detail: 'Dunk Records',
      quote: 'Coming soon...',
      img: RememoryArtwork,
      links: [
        {
          text: "Preview on Soundcloud",
          href: "#"
        }
      ]
    },
    {
      name: 'Descend/Sustain/Surpress',
      releaseDate: 'Winter 2020',
      type: 'single',
      detail: 'Birdlab Records',
      quote: "Written for Piano Day 2020...It Was A Good Dream utilize the full toolkit of post-rock to create this moving track and its textures.",
      quoteSource: 'Heavy Blog is Heavy',
      img: DSSArtwork,
      links: [
        {
          text: 'Listen on Spotify',
          href: 'https://open.spotify.com/album/1sZAn155m8BYaIaKQTnpNG?si=YpGzAPxFT9yLzoB5csGIGQ'
        },
        {
          text: 'Listen on Apple Music',
          href: 'https://music.apple.com/us/album/help-me-to-recollect-ep/1464730219'
        },
        {
          text: 'Listen on Bandcamp',
          href: 'https://itwasagooddream.bandcamp.com/album/help-me-to-recollect'
        }
      ]
    },
    {
      name: 'Help Me to Recollect',
      releaseDate: 'Spring 2019',
      type: 'LP',
      detail: 'Dunk Records',
      quote: 'Help Me to Recollect sees the duo create large sonic landscapes, they imbibe the best of both ambient electronica and post-rock.',
      quoteSource: 'Everything Is Noise',
      img: RecollectVinyl,
      links: [
        {
          text: 'Listen on Spotify',
          href: 'https://open.spotify.com/album/1sZAn155m8BYaIaKQTnpNG?si=YpGzAPxFT9yLzoB5csGIGQ'
        },
        {
          text: 'Listen on Apple Music',
          href: 'https://music.apple.com/us/album/help-me-to-recollect-ep/1464730219'
        },
        {
          text: 'Listen on Bandcamp',
          href: 'https://itwasagooddream.bandcamp.com/album/help-me-to-recollect'
        }
      ]
    }
  ]
</script>

<div class='py-10 x-container sm:py-15'>
  <div class='width-limit'>
    <h3 class='mb-5'>Releases</h3>

    <div class='space-y-7.5 sm:flex sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 md:gap-10 lg:grid-cols-3'>
      {#each releaseItems as item}
        <ReleaseItem {item} />
      {/each}
    </div>
  </div>
</div>