<script lang='ts'>
  import viewport from '$src/actions/userViewportAction';

  export let videoUrl: string

  let videoWrapperW = 0
  let youtubeVideo: any
  let showButton = true
  let oneMinuteTimeout
  let fiveMinuteTimeout

  const handleVideoPlayClick = () => {
    fbq('trackCustom', 'videoClick')
  }

  const handleOneMinute = () => {
    fbq('trackCustom', 'oneMinuteAfterVideoPlay')
  }

  const handleFiveMinutes = () => {
    fbq('trackCustom', 'fiveMinutesAfterVideoPlay')
  }

  const handleOverlayClick = () => {
    showButton = false
    const symbol = youtubeVideo.src.indexOf("?") > -1 ? "&" : "?";
    youtubeVideo.src += symbol + "autoplay=1"
    handleVideoPlayClick()
    oneMinuteTimeout = setTimeout(handleOneMinute, 60000)
    fiveMinuteTimeout = setTimeout(handleFiveMinutes, 300000)
  }
</script>

<div use:viewport class='w-full' bind:clientWidth={videoWrapperW}>
  <div
    style="height:{videoWrapperW / 1.7777777}px;"
    class='w-full h-131.75 relative border-1 border-black'>
    <iframe bind:this={youtubeVideo} style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>
    {#if showButton}
      <button class='block absolute top-0 left-0 w-full h-full' on:click={handleOverlayClick} />
    {/if}
  </div>
</div>