<script lang='ts'>
	import P5 from 'p5-svelte';
  import { onMount } from 'svelte';

  export let show: boolean

  const W = 160
  const H = 120

  let showStill = false
  
  let recording = []

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
			const txt = '             .:-i|=+%O9N#@'
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

  onMount(() => {
    // setTimeout(() => showStill = true, 5000)
  })
</script>

<div class='absolute bottom-0 text-xs leading-2 font-courier tracking-normal text-primary {show ? "opacity-100" : "opacity-0"}'>
  {#if showStill}
    <!-- <div>{@html recording[recording.length - 1]}</div> -->
  {:else}
    <P5 {sketch} />
  {/if}
</div>