<script>
  import WavesSvg from "./WavesSvg.svelte";
  import * as PIXI from 'pixi.js'
  import { onMount } from "svelte";
  import waves from '$svgs/waves.svg';
  import space from '$images/NWBUV-SpaceAbstract04.png';
  import bump from '$images/belgian-bump-displacement.jpeg';

  export let show = false

  const initPixi = () => {
    var playground = document.getElementById('px-render');

    var canvas;

    var count = 0;
    var raf;


    var renderer = PIXI.autoDetectRenderer({height: 800, transparent:true});
    renderer.autoResize = true;

    var tp, preview;
    var displacementSprite1,
      displacementFilter1,
      displacementSprite2,
      displacementFilter2,
      stage;

    function setScene(url){
      playground.appendChild(renderer.view);

      stage = new PIXI.Container();

      tp = PIXI.Texture.from(url);
      preview = new PIXI.Sprite(tp);

      preview.anchor.x = 0;
  
      displacementSprite1 = PIXI.Sprite.from('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/disp5.jpg');
      displacementSprite1.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

      displacementFilter1 = new PIXI.filters.DisplacementFilter(displacementSprite1);

      displacementSprite1.scale.y = 1;
      displacementSprite1.scale.x = 1;


      displacementSprite2 = PIXI.Sprite.from('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/disp5.jpg');
      displacementSprite2.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

      displacementFilter2 = new PIXI.filters.DisplacementFilter(displacementSprite2);

      displacementSprite2.scale.y = 2;
      displacementSprite2.scale.x = .5;


      stage.addChild(displacementSprite1);
      stage.addChild(displacementSprite2);

      stage.addChild(preview);

      animate();
    }

    function removeScene(){
      cancelAnimationFrame(raf);
      stage.removeChildren();
      stage.destroy(true);
      playground.removeChild(canvas);
    }


    function animate() {
      raf = requestAnimationFrame(animate);
                
      displacementSprite1.x = count*10;
      displacementSprite1.y = count*10;

      count += 0.05;

      stage.filters = [displacementFilter1, displacementFilter2];

      renderer.render(stage);

      canvas = playground.querySelector('canvas');
    }

    setScene(waves);
  }

  onMount(() => {
    setTimeout(initPixi, 60)
  })


</script>

<div class='relative mb-2/7 h-full w-full flex items-center justify-center'>
  <div class:show class='clip absolute bottom-0 h-0 transition-all duration-3000 linear transform translate-x-62.3 overflow-hidden'>
    <img class='h-full absolute top-0 -left-30 z-1' src={space} />
    <div class='relative z-2 perspect-lg perspect-origin-bottom transform -translate-y-20 '>
      <div class='move perspect-origin-center' id="px-render"></div>
    </div>
  </div>
</div>

<style>
  .clip {
    clip-path: path('M0 150.576V643H301V150.576C301 67.4158 233.618 0 150.5 0C67.3815 0 0 67.4158 0 150.576Z');
  }

  .move {
    opacity: 0;
    -moz-animation: fadeinphoto 7s 2s forwards;
    -webkit-animation: fadeinphoto 7s 2s forwards;
    -o-animation: fadeinphoto 7s 2s forwards;
    animation: fadeinphoto 7s 2s forwards;
  }

  .show {
    @apply h-2/3;
  }

  @keyframes fadeinphoto {
    0% { transform: rotate3d(1, 0, 0, 0deg) translateZ(90px); opacity: 0; }
    40% { opacity: 1; }
    100% { transform: rotate3d(1, 0, 0, 40deg) translateZ(-100px); opacity: 1; }
  }
  @webkit-keyframes fadeinphoto {
    0% { transform: rotate3d(1, 0, 0, 0deg) translateZ(90px); opacity: 0; }
    40% { opacity: 1; }
    100% { transform: rotate3d(1, 0, 0, 40deg translateZ(-100px)); opacity: 1; }
  }
</style>