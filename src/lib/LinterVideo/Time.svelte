<script lang='ts'>
  import { onMount } from "svelte";

  export let duration: number
  export let showEnd: boolean

  let elementW = 0
  let windowW = 0
  let windowH = 0
  let interval: any
  let time = new Date();
  let videoStart = false

  let endTime: Date
  
  $: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();
	$: hundreths = time.getMilliseconds();

  $: hoursEnd = endTime?.getHours();
	$: minutesEnd = endTime?.getMinutes();
	$: secondsEnd = endTime?.getSeconds();
	$: hundrethsEnd = endTime?.getMilliseconds();

  export const stopTime = () => {
    clearInterval(interval)
    videoStart = true

    // get the current date & time (as milliseconds since Epoch)
    const currentTimeAsMs = Date.now();
    const adjustedTimeAsMs = currentTimeAsMs + (duration * 1000);

    // create a new Date object, using the adjusted time
    endTime = new Date(adjustedTimeAsMs);
  }

  onMount(() => {
		interval = setInterval(() => {
			time = new Date();
		}, 1);

		return () => {
			clearInterval(interval);
		};
	});

  $: startStyle = `transform: translate3d(${(windowW / 2) - (elementW / 2)}px, ${windowH / 4}px,0)`
  const movedStyle = `transform: translate3d(-25%,8px,0) scale3d(0.5, 0.5, 0.5); transition: 3s;`
  const movedStyleEnd = `transform: translate3d(25%,8px,0) scale3d(0.5, 0.5, 0.5); transition: 3s;`
</script>

<svelte:window bind:innerWidth={windowW} bind:innerHeight={windowH} />

{#if windowW > 0}
  <div bind:clientWidth={elementW} style={videoStart ? movedStyle : startStyle} class='absolute left-0 top-0 flex justify-center origin-left origin-top'>
    <div class='flex font-display tracking-widest'>
      <div class='hrmnsec'>
        <span>
          {hours < 10 ? `0${hours}` : hours}
        </span>
      </div>
      <div class='colon'>
        <span>:</span>
      </div>
      <div class='hrmnsec'>
        <span>
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
      </div>
      <div class='colon'>
        <span>:</span>
      </div>
      <div class='hrmnsec'>
        <span>
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <div class='colon'>
        <span>:</span>
      </div>
      <div class='w-10 whitespace-nowrap overflow-visible'>
        <span>
          {hundreths < 10 ? `00${hundreths}` : hundreths < 100 ? `0${hundreths}` : hundreths}
        </span>
      </div>

    </div>
  </div>
{/if}

{#if endTime && showEnd}
  <div bind:clientWidth={elementW} style={movedStyleEnd} class='absolute right-0 top-0 flex justify-center origin-left origin-top'>
    <div class='flex font-display tracking-widest'>
      <div class='hrmnsec'>
        <span>
          {hoursEnd < 10 ? `0${hoursEnd}` : hoursEnd}
        </span>
      </div>
      <div class='colon'>
        <span>:</span>
      </div>
      <div class='hrmnsec'>
        <span>
          {minutesEnd < 10 ? `0${minutesEnd}` : minutesEnd}
        </span>
      </div>
      <div class='colon'>
        <span>:</span>
      </div>
      <div class='hrmnsec'>
        <span>
          {secondsEnd < 10 ? `0${secondsEnd}` : secondsEnd}
        </span>
      </div>
      <div class='colon'>
        <span>:</span>
      </div>
      <div class='w-10 whitespace-nowrap overflow-visible'>
        <span>
          {hundrethsEnd < 10 ? `00${hundrethsEnd}` : hundrethsEnd < 100 ? `0${hundrethsEnd}` : hundrethsEnd}
        </span>
      </div>
    </div>
  </div>
{/if}

<style>
  .hrmnsec {
    @apply w-12 flex justify-center text-center text-3xl;
  }

  .colon {
    @apply w-5 flex justify-center text-3xl;
  }
</style>