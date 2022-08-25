<script lang='ts'>
	import P5 from 'p5-svelte';
  import { onMount } from 'svelte';
  // import Mandelbrot1 from '$src/assets/video/mandelbrot-slice.mov';

  const W = 200
  const H = 150

  let showStill = false
  
  let recording = []

	const sketch = (p5: any) => {
    let video
    let asciiDiv

		p5.setup = () => {
      p5.noCanvas();
      // video = p5.createVideo("http://www.dl.dropboxusercontent.com/s/ec6wtmn0t91anya/mandelbrot-slice.m4v", vidLoad)
      video.size(W,H);
      // video.hide();
      asciiDiv = p5.createDiv('');
    };

    function vidLoad () {
      video.play()
    }

    p5.draw = () => {
      // video.volume(0);
      const txt = '             .:-i|=+%O9N#@'
      const dim = 15;
      // createCanvas(W * dim, H * dim);
      p5.background(0);
      video.loadPixels();
      console.log("hm")
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
      asciiDiv.html(output);
    }
	};

  onMount(() => {
    // setTimeout(() => showStill = true, 5000)
  })
</script>

<div class='absolute bottom-0 text-xs leading-2 font-courier tracking-normal'>
  {#if showStill}
    <div>{@html recording[recording.length - 1]}</div>
  {:else}
    <P5 {sketch} />
  {/if}
</div>