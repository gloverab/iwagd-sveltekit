<script lang='ts'>
  export let item: { quote: string, link: string, outlet: string }
</script>

<div>
  <div class='border-l border-l-solid border-l-4 border-l-black pl-4'>
    <p class='text-black font-bold italic mb-2.5'>
      "{item.quote}"
    </p>
    <p>
      <a class='underline text-sm' href={item.link} target='_blank'>{item.outlet_name}</a>
    </p>
  </div>
</div>