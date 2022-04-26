<script lang='ts'>
  import { onMount } from "svelte";
import TourDatesHeaders from "./TourDatesHeaders.svelte";

  let show = false

  onMount(() => {
    setTimeout(() => show = true, 0)
  })
</script>

{#if show}
  <TourDatesHeaders />
{/if}

<div class='py-10 x-container sm:py-15'>
  <div class='width-limit'>
    <h3 class='mb-5'>Upcoming Tour Dates</h3>
    <a class="bit-widget-initializer"
        
      data-artist-name="id_15464365"
      
      data-background-color="#ffffff"
      data-separator-color="rgba(155,155,155,1)"
      data-text-color="#424242"
      data-font="Arimo"
      data-auto-style="true"
      
      data-local-dates-position="tab"
      data-display-details="false"
      data-display-lineup="false"
      data-display-start-time="false"
      data-social-share-icon="true"
      data-display-limit="all"
      
      data-date-format="MMM. D, YYYY"
      data-date-orientation="horizontal"
      data-date-border-color="#08C3BA"
      data-date-border-width="1px"
      data-date-border-radius="10px"
      
      data-event-ticket-cta-size="medium"
      data-event-ticket-text="TICKETS"
      data-event-ticket-icon="false"
      data-event-ticket-cta-text-color="#FFFFFF"
      data-event-ticket-cta-bg-color="#08C3BA"
      data-event-ticket-cta-border-color="#08C3BA"
      data-event-ticket-cta-border-width="0px"
      data-event-ticket-cta-border-radius="4px"
      
      data-sold-out-button-text-color="#FFFFFF"
      data-sold-out-button-background-color="#9B9B9B"
      data-sold-out-button-border-color="#08C3BA"
      data-sold-out-button-clickable="true"
      
      data-event-rsvp-position="hidden"
      data-event-rsvp-cta-size="medium"
      data-event-rsvp-text="SET REMINDER"
      data-event-rsvp-icon="false"
      data-event-rsvp-cta-text-color="#08C3BA"
      data-event-rsvp-cta-bg-color="#FFFFFF"
      data-event-rsvp-cta-border-color="#08C3BA"
      data-event-rsvp-cta-border-width="1px"
      data-event-rsvp-cta-border-radius="4px"
      
      data-follow-section-position="top"
      data-follow-section-alignment="center"
      data-follow-section-header-text="Get updates on new shows, new music, and more."
      data-follow-section-cta-size="medium"
      data-follow-section-cta-text="FOLLOW"
      data-follow-section-cta-icon="true"
      data-follow-section-cta-text-color="#FFFFFF"
      data-follow-section-cta-bg-color="#08C3BA"
      data-follow-section-cta-border-color="#08C3BA"
      data-follow-section-cta-border-width="0px"
      data-follow-section-cta-border-radius="4px"
      
      data-play-my-city-position="bottom"
      data-play-my-city-alignment="Center"
      data-play-my-city-header-text="Don’t see a show near you?"
      data-play-my-city-cta-size="medium"
      data-play-my-city-cta-text="REQUEST A SHOW"
      data-play-my-city-cta-icon="true"
      data-play-my-city-cta-text-color="#FFFFFF"
      data-play-my-city-cta-bg-color="#08C3BA"
      data-play-my-city-cta-border-color="#08C3BA"
      data-play-my-city-cta-border-width="0px"
      data-play-my-city-cta-border-radius="4px"
      
      data-language="en"
      data-widget-width=""
      data-div-id=""
      data-app-id=""
      data-affil-code="undefined"
      data-bit-logo-position="bottomRight"
      data-bit-logo-color="#CCCCCC"
    />
  </div>
</div>

<style global>
  .bit-widget a.bit-event {
    @apply border-t-0 hover:bg-black hover:bg-opacity-10;
  }
  .bit-widget a.bit-event:nth-child(even) {
    @apply bg-grey-light hover:bg-black hover:bg-opacity-10;
  }

  .bit-widget div.bit-upcoming-events {
    margin: 0;
  }

  .bit-widget .bit-upcoming-events-container .bit-upcoming-events {
    @apply border-b-0;
  }

  .bit-widget div.bit-follow-section-wrapper {
    display: none;
  }

  .bit-widget div.bit-play-my-city-wrapper {
    display: none;
  }

  .bit-play-my-city-wrapper + div {
    display: none;
  }
</style>