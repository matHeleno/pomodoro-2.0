import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js";
import { Events } from "./events.js";

const sounds = Sounds()
const controls = Controls()
const timer = Timer()

Events(sounds, controls, timer)

/*const events = Events({
  sounds,
  controls,
  timer
})*/

