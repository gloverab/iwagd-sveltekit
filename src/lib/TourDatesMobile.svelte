<script lang='ts'>
  import { bandsInTownResponse } from "./constants";
  import TourDate from "./TourDate.svelte";
  
    
  </script>
  
  <div class='grid grid-cols-2'>
    {#each bandsInTownResponse as tourDate}
      <TourDate {tourDate} />
    {/each}
  </div>