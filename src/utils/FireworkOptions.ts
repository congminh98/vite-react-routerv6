import { AUDIOS } from "@/constants";

export const FireworkOptions = {
  autoresize: true,
  opacity: 0.5,
  acceleration: 1,
  friction: 0.97,
  gravity: 1.5,
  particles: 50,
  traceLength: 2,
  traceSpeed: 10,
  explosion: 5,
  intensity: 30,
  flickering: 50,
  sound: {
    enabled: true,
    files: [
      AUDIOS?.EXPLOSION0,
      AUDIOS?.EXPLOSION1,
      AUDIOS?.EXPLOSION2,
    ],
    volume: {
      min: 4,
      max: 50
    }
  },
  // lineStyle: 'round',
  hue: {
    min: 0,
    max: 360
  },
  delay: {
    min: 30,
    max: 60
  },
  rocketsPoint: {
    min: 20,
    max: 60
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 5
    },
    trace: {
      min: 0,
      max: 1
    }
  },
  brightness: {
    min: 50,
    max: 80
  },
  decay: {
    min: 0.001,
    max: 0.03
  },
  mouse: {
    click: true,
    move: false,
    max: 1
  }
};
