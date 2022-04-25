<script lang='ts'>
  export let item: { quote: string, href: string, outlet: string }
</script>

<div class='item md:w-1/2 md:pb-10'>
  <div class='border-l border-l-solid border-l-4 border-l-black pl-4'>
    <p class='text-black font-bold italic mb-2.5'>
      "{item.quote}"
    </p>
    <p>
      <a class='underline text-sm' href={item.href}>{item.outlet}</a>
    </p>
  </div>
</div>

<style>
  .item:nth-of-type(odd) {
    @apply md:pr-5;
  }
  .item:nth-of-type(even) {
    @apply md:pl-5;
  }
</style>