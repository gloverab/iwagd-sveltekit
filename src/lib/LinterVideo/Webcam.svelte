<script lang='ts'>
	import P5 from 'p5-svelte';
  import { onMount } from 'svelte';

  export let show: boolean
  export let timestamp: number

  const W = 160
  const H = 120

  let showStill = false
  let showTriggered = false
  
  let recording = []

  let txt = '                  '

  const triggerGuitarPluck = () => {
      txt = '             .:-i|=+%O9N##@@'
    setTimeout(() => {
      txt = '             ..-i|=+%O9N##@@'
    }, 50)
    setTimeout(() => {
      txt = '             ..--|=+%O9N##@@'
    }, 100)
    setTimeout(() => {
      txt = '             ..--|=+%O99N##@'
    }, 150)
    setTimeout(() => {
      txt = '              ..--|=+%O99N#@N'
    }, 200)
    setTimeout(() => {
      txt = '              ..--|=++O99N#@N'
    }, 250)
    setTimeout(() => {
      txt = '              ..--|=++O9ON#@@'
    }, 300)
    setTimeout(() => {
      txt = '             ...-|=++O9ON#@0'
    }, 400)
    setTimeout(() => {
      txt = '              ...-|=++=9ON#@O'
    }, 500)
    setTimeout(() => {
      txt = '                ...-|=++=ON#@O'
    }, 600)
    setTimeout(() => {
      txt = '                ...-|=+-=ON#@O'
    }, 700)
    setTimeout(() => {
      txt = '             .:-i|=+%O9N#@'
    }, 800)
  }

  const triggerTomPluck = () => {
      txt = '          .:-i|=+%O9N###@@@'
    setTimeout(() => {
      txt = '           .:-i|=+%O9N##@@@'
    }, 50)
    setTimeout(() => {
      txt = '           ..:-i|=+%O9N##@@'
    }, 100)
    setTimeout(() => {
      txt = '           ..:-i|=+%O9N##@@'
    }, 150)
    setTimeout(() => {
      txt = '            ..:-i|=+%O9N#@@'
    }, 200)
    setTimeout(() => {
      txt = '             .:-i|=+%O9N#@@'
    }, 250)
    setTimeout(() => {
      txt = '              .:-i|=+%O9N#@'
    }, 300)
    setTimeout(() => {
      txt = '              .-i|=+%O9N@'
    }, 400)
    setTimeout(() => {
      txt = '               .-i=+%O9@'
    }, 500)
    setTimeout(() => {
      txt = '                .-i=+O9@'
    }, 600)
    setTimeout(() => {
      txt = '                .-i=+O9'
    }, 700)
    setTimeout(() => {
      txt = '                .-i=+O'
    }, 800)
    setTimeout(() => {
      txt = '                .-i+'
    }, 900)
    setTimeout(() => {
      txt = '                .-+'
    }, 1000)
    setTimeout(() => {
      txt = '                 .-+'
    }, 1100)
  }

  const triggerIntroMelodyPlucks = () => {
    triggerGuitarPluck()
    setTimeout(() => {
      triggerGuitarPluck()
    }, 1067)
    setTimeout(() => {
      triggerGuitarPluck()
    }, 2134)
  }

  const triggerIntroMelodyToms = () => {
    triggerTomPluck()
    setTimeout(() => {
      triggerTomPluck()
    }, 1067)
  }

  $: if (timestamp > 35.50 && timestamp < 35.52) {
    triggerIntroMelodyPlucks()
  } else if (timestamp > 41.18 && timestamp < 41.20) {
    triggerIntroMelodyPlucks()
  } else if (timestamp > 46.86 && timestamp < 46.88) {
    triggerIntroMelodyToms()
  } else if (timestamp > 49.70 && timestamp < 49.72) {
    triggerIntroMelodyToms()
  } else if (timestamp > 52.54 && timestamp < 52.56) {
    triggerIntroMelodyToms()
  } else if (timestamp > 55.38 && timestamp < 55.40) {
    triggerIntroMelodyToms()
  }

	const sketch = (p5: any) => {
    let video
    let asciiDiv

		p5.setup = () => {
      p5.noCanvas();
      video = p5.createCapture(p5.VIDEO);
      video.size(W,H);
      video.hide();
      asciiDiv = p5.createDiv('');
    };

		p5.draw = () => {
      const dim = 15;
      // createCanvas(W * dim, H * dim);
      p5.background(0);
      video.loadPixels();
      p5.textFont('courier');
      let output = '';
      for (let j = 0; j < H; j++) {
        for (let i = 0; i < W; i++) {
          let index = (i + j * W) * 4;
          let r = video.pixels[index + 0];
          let g = video.pixels[index + 1];
          let b = video.pixels[index + 2];
          let bright = (r + g + b) / 3;
          let bindex = p5.map(bright, 0, 255, 0, txt.length);
          let ch = txt.charAt(p5.floor(bindex));
          if (ch == ' ') {
            output += '&nbsp;';
          } else {
            output += ch;
          }
          // let x = i * dim;
          // let y = j * dim;
          // fill(255);
          // textSize(dim);
          // text(ch, x, y);
        }
        output += '<br/>';
      }
      // recording = [...recording, output]
      asciiDiv.html(output);
		};
	};

  $: if (show && !showTriggered) {
    showTriggered = true
    setTimeout(() => {
      txt = '                   .'
    }, 200)
    setTimeout(() => {
      txt = '                  ..'
    }, 400)
    setTimeout(() => {
      txt = '                 ...'
    }, 600)
    setTimeout(() => {
      txt = '                ....'
    }, 800)
    setTimeout(() => {
      txt = '               .....'
    }, 1000)
    setTimeout(() => {
      txt = '              ......'
    }, 1300)
    setTimeout(() => {
      txt = '              .....-'
    }, 1600)
    setTimeout(() => {
      txt = '              ....--'
    }, 1900)
    setTimeout(() => {
      txt = '              ...---'
    }, 2300)
    setTimeout(() => {
      txt = '             ...:---'
    }, 2700)
    setTimeout(() => {
      txt = '             ...:---'
    }, 3200)
    setTimeout(() => {
      txt = '             ...:---'
    }, 3700)
    setTimeout(() => {
      txt = '             ...:---'
    }, 4200)
    setTimeout(() => {
      txt = '             ...:--i'
    }, 4800)
    setTimeout(() => {
      txt = '             ..:--ii'
    }, 5400)
    setTimeout(() => {
      txt = '             ..:-ii|'
    }, 6000)
    setTimeout(() => {
      txt = '             ..:-i||'
    }, 6500)
    setTimeout(() => {
      txt = '             ..:-i|='
    }, 7100)
    setTimeout(() => {
      txt = '             .:-i|=+'
    }, 7700)
    setTimeout(() => {
      txt = '             .:-i|=+%'
    }, 8300)
    setTimeout(() => {
      txt = '             .:-i|=+%O'
    }, 8900)
    setTimeout(() => {
      txt = '             .:-i|=+%O9'
    }, 9500)
    setTimeout(() => {
      txt = '             .:-i|=+%O9N'
    }, 10100)
    setTimeout(() => {
      txt = '             .:-i|=+%O9N#'
    }, 10700)
    setTimeout(() => {
      txt = '             .:-i|=+%O9N#@'
    }, 11300)
  }
</script>

<div class='absolute bottom-0 text-xs leading-2 font-courier tracking-normal text-primary {show ? "opacity-100" : "opacity-0"}'>
  {#if showStill}
    <!-- <div>{@html recording[recording.length - 1]}</div> -->
  {:else}
    <P5 {sketch} />
  {/if}
</div>