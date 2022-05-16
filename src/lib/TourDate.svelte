<script lang='ts'>
  import moment from 'moment'

  export let tourDate
</script>

<a href={tourDate.url} target="_blank" class="flex flex-col p-4 md:p-0 w-full h-full justify-center items-center hover:bg-black group">
  <h2 class='font-display uppercase text-grey-dark group-hover:text-grey-light'>{moment(tourDate.datetime).format('DD MMMM')}</h2>
  <p class='font-tight uppercase tracking-widest text-sm whitespace-nowrap text-grey-dark group-hover:text-grey-light'>{tourDate.venue.location}</p>
</a>