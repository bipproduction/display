'use client'
import { useEffect } from 'react';
import * as H from '@vladmandic/human';

export default function Cam () {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }

    const humanConfig: any = { // user configuration for human, used to fine-tune behavior
      modelBasePath: './models', // models can be loaded directly from cdn as well
      filter: {
        enabled: true,
        equalization: true,
        flip: false,
      },
      flags: true,
      face: {
        liveness: {
          enabled: true
        },
        enabled: true,
        detector: {
          rotation: false
        }, mesh: {
          enabled: true
        }, attention: {
          enabled: false
        }, iris: {
          enabled: true
        }, description: {
          enabled: true
        }, emotion: {
          enabled: true,
        }
      },
      segmentation: { enabled: false },
    };
    const human = new H.Human(humanConfig); // create instance of human with overrides from user configuration
    const canvas = document.getElementById('canvas') as HTMLCanvasElement; // output canvas to draw both webcam and detection results

    async function drawLoop() { // main screen refresh loop
      const interpolated = human.next(); // get smoothed result using last-known results which are continuously updated based on input webcam video
      human.draw.canvas(human.webcam.element!, canvas); // draw webcam video to screen canvas // better than using processed image as this loop happens faster than processing loop
      await human.draw.all(canvas, interpolated); // draw labels, boxes, lines, etc.
      setTimeout(drawLoop, 200); // use to slow down refresh from max refresh rate to target of 1000/30 ~ 30 fps
    }

    async function main() { // main entry point
      document.getElementById('log')!.innerHTML = `human version: ${human.version} | tfjs version: ${human.tf.version['tfjs-core']}<br>platform: ${human.env.platform} | agent ${human.env.agent}`;
      await human.webcam.start({ crop: true }); // find webcam and start it
      human.video(human.webcam.element!); // instruct human to continuously detect video frames
      canvas.width = human.webcam.width; // set canvas resolution to input webcam native resolution
      canvas.height = human.webcam.height;
      canvas.onclick = async () => { // pause when clicked on screen and resume on next click
        if (human.webcam.paused) await human.webcam.play();
        else human.webcam.pause();
      };
      await drawLoop(); // start draw loop
    }

    main();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div>
      <canvas style={{ width: '100%', height: '100%' }} id="canvas"></canvas>
      <div hidden style={{position: "fixed", left: 0, bottom: 0, padding: 10, width: "100%", textAlign: "center", color: "white", backgroundColor: "rgba(0, 0, 0, 0.5)"}} id="log"></div>
    </div>
  );
};
