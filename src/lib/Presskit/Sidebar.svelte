<script lang='ts'>
  import SocialLinks from "./SocialLinks.svelte";

  export let performer: any

  const getFfoString = () => {
    let string = ''
    if (performer.ffo_1) {
      string += performer.ffo_1
    }
    if (performer.ffo_2) {
      string += `, ${performer.ffo_2}`
    }
    if (performer.ffo_3) {
      string += `, ${performer.ffo_3}`
    }
    if (performer.ffo_4) {
      string += `, ${performer.ffo_4}`
    }
    if (performer.ffo_5) {
      string += `, ${performer.ffo_5}`
    }
    return string
  }

  const getGenreString = () => {
    let string = ''
    performer.genres.forEach((item: any, index: number) => {
      if (index === 0) {
        string += item.name
      } else {
        string += `, ${item.name}`
      }
    })
    return string
  }
</script>

<div class='x-container-mobile pt-5 pb-5'>
  <div class='bg-grey-light space-y-5 p-5 pt-5.5 sm:w-72 md:w-84 md:p-7.5 lg:w-100'>
    <div class='flex justify-between space-x-2.5 sm:flex-col sm:space-x-0 sm:space-y-5'>
      <div class='space-y-2.5 flex-1'>
        <h4>label</h4>
        {#each performer.labels as label}
          <p class='b2'>{label.name} {performer.labels.length > 1 && `(${label.country === "BE" ? "EU" : label.country})`}</p>
        {/each}
      </div>
      <div class='space-y-2.5 flex-1'>
        <h4>genre</h4>
        <p class='b2'>{getGenreString()}</p>
      </div>
    </div>

    <div class='space-y-2.5'>
      <h4>location</h4>
      <p class='b2'>{performer.city}, {performer.state}, USA</p>
    </div>
    <div class='space-y-2.5'>
      <h4>management/licensing</h4>
      <p class='b2'>
        <a class='underline' href="mailto:{performer.email_booking}">
          <p class='b2'>{performer.email_booking}</p>
        </a>
      </p>
    </div>
    <div class='space-y-2.5'>
      <h4>general</h4>
      <p class='b2'>
        <a class='underline' href="mailto:{performer.email_1}">
          <p class='b2'>{performer.email_1}</p>
        </a>
      </p>
    </div>
    {#if performer.labels[0]}
      <div class='space-y-2.5'>
        <h4>label contact</h4>
        <p class='b2'>
          <a class='underline' href="mailto:{performer.labels[0].email_1}">
            <p class='b2'>{performer.labels[0].email_1}</p>
          </a>
        </p>
      </div>
    {/if}
    <div class='space-y-2.5'>
      <h4>For fans of</h4>
      <p class='b2'>
        {getFfoString()}
      </p>
    </div>
    <div class='space-y-2.5'>
      <h4>streaming & social</h4>
      <SocialLinks
        socials={performer.social_media_accounts}
      />
    </div>
  </div>
</div>