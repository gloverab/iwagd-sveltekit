<script lang='ts'>
  export let item: {
    detail: string,
    name: string,
    releaseDate: string,
    type: string,
    img: string,
    quote: string,
    links: {
      text: string,
      href: string
    }[]
  }
</script>

<div class='space-y-1'>
  <p class='font-semibold'>{`${item.name} (${item.type})`}</p>
  <p class='b2 italic'>{`${item.detail}, ${item.releaseDate}`}</p>
  <div class='relative group'>
    <div class='relative shadow-md transform perspect-lg preserve-3d rotate-y-0 duration-500 group-hover:rotate-y-180'>
      <img class='relative' alt={`${item.name} artwork`} src={item.img} />
      <div class='absolute top-0 left-0 bg-black space-y-2 h-full w-full flex flex-col justify-center items-center p-5 opacity-0 duration-300 transform rotate-y-180 bg-opacity-0 group-hover:bg-opacity-80 group-hover:opacity-100'>
        <p class='text-grey-light italic leading-7'>"{item.quote}"</p>
        {#if item.quoteSource}
          <p class='b2 font-semibold w-full text-grey-light text-right'>-{item.quoteSource}</p>
        {/if}
      </div>
    </div>
  </div>
  <div class='space-y-0.5'>
    {#each item.links as link}
      <p class='b2'>
        <a class='underline' href={link.href} target='_blank'>{link.text}</a>
      </p>
    {/each}
  </div>
</div>