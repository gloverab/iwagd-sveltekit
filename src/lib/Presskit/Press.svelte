<script lang='ts'>
  import PressItem from "./PressItem.svelte";

  const pressQuotes = [
    {
      href: 'https://everythingisnoise.net/reviews/it-was-a-good-dream-help-me-to-recollect/',
      outlet: 'Everything is Noise',
      quote: `Rarely does it occur, that an album can transpose me into a certain atmosphere, irrespective of the state of mind I had when I started listening to the album.`
    },
    {
      href: 'https://capturedhowls.com/2019/05/27/it-was-a-good-dreams-new-post-rock-hits-with-captivating-emotional-freedom/',
      outlet: 'Captured Howls',
      quote: `...the band seem to have arrived at a conclusion that sheer intensity (which does occasionally pop up) doesn't have to be defined by conventional limits. Instead, it's something that can be welcomed as part of a broader, beautiful picture like the one It Was A Good Dream paints on Help Me to Recollect. 5/5`
    },
    {
      href: 'https://www.merchantsofair.com/albums/it-was-a-good-dream-help-me-to-recollect',
      outlet: 'Merchants of Air',
      quote: `This is great post rock, with indie jams in 'You Left a Letter and a Song' and shoegazing ambient elements in closer 'A Blistering Reminder of Why You Are Where You Are'`
    },
    {
      href: 'https://www.heavyblogisheavy.com/2019/04/26/exclusive-premiere-its-time-to-get-melancholic-with-it-was-a-good-dream/',
      outlet: 'Heavy Blog is Heavy',
      quote: `...from name to trippy video, through electronic percussion, hazy samples, and modified saxophone, is pure despondence and hefty mood weaved into just over five minutes of touching post-rock.`
    },
    {
      href: 'https://www.heavyblogisheavy.com/2020/03/27/exclusive-premiere-and-then-some-it-was-a-good-dream-invite-us-to-descend-suppress-sustain/',
      outlet: 'Heavy Blog is Heavy',
      quote: `They make a kind of dreamy, melancholic, grandiose post-rock that is exactly what we all need right now.`
    }
  ]
</script>

<div class='py-10 x-container sm:py-15'>
  <div class='width-limit'>
    <h3 class='mb-5'>Press</h3>

    <div class='space-y-10 md:space-y-0 md:flex md:flex-wrap'>
      {#each pressQuotes as item}
        <PressItem {item} />
      {/each}
    </div>
  </div>
</div>