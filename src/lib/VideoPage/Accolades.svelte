<script lang='ts'>
  import Accolade from "./Accolade.svelte";

  export let watchPage = false
</script>

<div class='
  grid
  grid-cols-2
  gap-x-8
  gap-y-6
  sm:gap-x-12
  md:grid-cols-4
  md:gap-y-4
  md:gap-x-10
  xl:gap-y-4
  xl:grid-cols-4
  xl:gap-y-2
  xl:gap-x-12
  m-auto'>
  <Accolade
    textTop="winner"
    textLine1='Brussels World'
    textLine2='Film Festival'
    award='Best Music Video'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="winner"
    textLine1='Chicago'
    textLine2='Filmmaker Awards'
    award='Best Music Video'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="winner"
    textLine1='Rotterdam'
    textLine2='Independent Film'
    textLine3='Festival'
    award='Best Music Video'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="winner"
    textLine1='Santa Cruz'
    textLine2='Independent Film'
    textLine3='Fest'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="semi-finalist"
    textLine1='Paris'
    textLine2='International'
    textLine3='Short Festival'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="semi-finalist"
    textLine1='San Francisco'
    textLine2='Arthouse Short'
    textLine3='Festival'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="semi-finalist"
    textLine1='Santa Fe'
    textLine2='Independent Film'
    textLine3='Festival'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="semi-finalist"
    textLine1='Nashville'
    textLine2='Independent'
    textLine3='Filmmakers Festival'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="semi-finalist"
    textLine1='Austin International'
    textLine2='Art Festival'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="semi-finalist"
    textLine1='Vancouver'
    textLine2="Independent"
    textLine3='MovieMaker Awards'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="semi-finalist"
    textLine1='Washington'
    textLine2='Film Awards'
    visible={!watchPage}
    year="2023"
  />
  <Accolade
    textTop="semi-finalist"
    textLine1='Munich Short'
    textLine2='Film Awards'
    visible={!watchPage}
    year="2023"
  />

</div>