import { 
  buttonPlay, 
  buttonStop, 
  buttonPlus, 
  buttonMinum, 
  buttonTree, 
  buttonBonfire, 
  buttonCafeteria, 
  buttonCloud 
} from "./elements.js"

/*export function Events({
  sounds,
  controls,
  timer
})*/ 

export function Events( sounds, controls, timer){

  buttonPlay.addEventListener('click', timer.countdown)
  buttonStop.addEventListener('click', timer.stopCountdown)
  buttonPlus.addEventListener('click', timer.addTime)
  buttonMinum.addEventListener('click', timer.removeTime)

  buttonTree.addEventListener('focus', function() {
    controls.focusButton(buttonTree)
    controls.audioPlay(sounds.treeAudio)
    controls.audioPause(sounds.treeAudio, sounds.arrayOfAudios)
  })
  buttonBonfire.addEventListener('focus', function() {
    controls.focusButton(buttonBonfire)
    controls.audioPlay(sounds.bonfireAudio)
    controls.audioPause(sounds.bonfireAudio, sounds.arrayOfAudios)
  })
  buttonCafeteria.addEventListener('focus', function() {
    controls.focusButton(buttonCafeteria)
    controls.audioPlay(sounds.cafeteriaAudio)
    controls.audioPause(sounds.cafeteriaAudio, sounds.arrayOfAudios)
  })
  buttonCloud.addEventListener('focus', function() {
    controls.focusButton(buttonCloud)
    controls.audioPlay(sounds.cloudAudio)
    controls.audioPause(sounds.cloudAudio, sounds.arrayOfAudios)
  })
}