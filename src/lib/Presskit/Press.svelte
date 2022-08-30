<script lang='ts'>
  import PressItem from "./PressItem.svelte";
  export let quotes: any[]
</script>

<div class='py-10 x-container sm:py-15'>
  <div class='width-limit'>
    <h3 class='mb-5'>Press</h3>

    <div class='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-10'>
      {#each quotes as item}
        <PressItem {item} />
      {/each}
    </div>
  </div>
</div>