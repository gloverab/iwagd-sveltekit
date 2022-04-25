<script>
  import AppleMusic from "$icons/AppleMusic.svelte";
  import Bandcamp from "$icons/Bandcamp.svelte";
  import Facebook from "$icons/Facebook.svelte";
  import Instagram from "$icons/Instagram.svelte";
  import Spotify from "$icons/Spotify.svelte";
</script>

<div class='flex space-x-5'>
  <a href='https://open.spotify.com/artist/3ib3FBBRjLNrucyXI6Jt6o?si=KKt2nbHqSySSwefF4tsqgg' target='_blank' class='w-7.5 h-7.5'>
    <Spotify />
  </a>

  <a href='https://music.apple.com/us/artist/it-was-a-good-dream/1356024166' target='_blank' class='w-7.5 h-7.5'>
    <AppleMusic />
  </a>

  <a href='http://itwasagooddream.bandcamp.com' target='_blank' class='w-7.5 h-7.5'>
    <Bandcamp />
  </a>

  <a href='http://instagram.com/_u/itwasagooddream/' target='_blank' class='w-7.5 h-7.5'>
    <Instagram />
  </a>

  <a href='http://facebook.com/_u/iwagd/' target='_blank' class='w-7.5 h-7.5'>
    <Facebook />
  </a>
</div>