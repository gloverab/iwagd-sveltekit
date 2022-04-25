<script>
  import SocialLinks from "./SocialLinks.svelte";
</script>

<div class='x-container-mobile pt-5 pb-5'>
  <div class='bg-grey-light space-y-5 p-5 pt-5.5 sm:w-72 md:w-84 md:p-7.5 lg:w-100'>
    <div class='flex justify-between space-x-2.5 sm:flex-col sm:space-x-0 sm:space-y-5'>
      <div class='space-y-2.5 flex-1'>
        <h4>label</h4>
        <p class='b2'>dunk!records (EU)</p>
        <p class='b2'>Birdlab Records (US)</p>
      </div>
      <div class='space-y-2.5 flex-1'>
        <h4>genre</h4>
        <p class='b2'>Post-rock, Instrumental Rock, Soundtrack</p>
      </div>
    </div>

    <div class='space-y-2.5'>
      <h4>location</h4>
      <p class='b2'>Boston, MA, USA</p>
    </div>
    <div class='space-y-2.5'>
      <h4>management/licensing</h4>
      <p class='b2'>
        <a class='underline' href="mailto:chris@itwasagooddream.com">
          <p class='b2'>chris@itwasagooddream.com</p>
        </a>
      </p>
    </div>
    <div class='space-y-2.5'>
      <h4>general</h4>
      <p class='b2'>
        <a class='underline' href="mailto:chris@itwasagooddream.com">
          <p class='b2'>band@itwasagooddream.com</p>
        </a>
      </p>
    </div>
    <div class='space-y-2.5'>
      <h4>label contact</h4>
      <p class='b2'>
        <a class='underline' href="mailto:chris@itwasagooddream.com">
          <p class='b2'>wout@dunkrecords.com</p>
        </a>
      </p>
    </div>
    <div class='space-y-2.5'>
      <h4>For fans of</h4>
      <p class='b2'>This Will Destroy You, Exposions in the Sky, Caspian, Tycho</p>
    </div>
    <div class='space-y-2.5'>
      <h4>streaming & social</h4>
      <SocialLinks />
    </div>
  </div>
</div>