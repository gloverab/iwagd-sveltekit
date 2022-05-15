<script lang='ts'>
import { bandsInTownResponse } from "./constants";
import TourDate from "./TourDate.svelte";

  
</script>

<div class='grid grid-cols-6 h-full w-full flex items-center'>
  {#each bandsInTownResponse as tourDate}
    <TourDate {tourDate} />
  {/each}
</div>