<script lang='ts'>
  import moment from 'moment'

  export let tourDate
</script>

<a href={tourDate.url} target="_blank" class="flex flex-col items-center">
  <h2 class='font-display uppercase'>{moment(tourDate.datetime).format('DD MMMM')}</h2>
  <p class='font-tight uppercase tracking-widest text-sm'>{tourDate.venue.location}</p>
</a>