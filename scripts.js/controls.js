export function Controls() {

  const getButtonsFocus = (buttonFocusOn) => {
    const buttonsFocusOff = Array.from(document.querySelectorAll('.card:not(:focus):not([disabled])'));
    for (let i = buttonsFocusOff.length - 1; i >= 0; i--) {
      if (buttonFocusOn === buttonsFocusOff[i]) {
        buttonsFocusOff.splice(i, 1)
      }
    }
    return { buttonsFocusOff };
  };

  const focusButton = (buttonFocusOn) => {
    const { buttonsFocusOff } = getButtonsFocus(buttonFocusOn);
    buttonFocusOn.classList.add('focus');
    for (let i = 0; i < buttonsFocusOff.length; i++) {
      buttonsFocusOff[i].classList.remove('focus');
    }
  };

  const audioPlay = (audioOn) => {
    audioOn.play();
  };
  
  const audioPause = (audioOn, arrayOfAudios) => {
    for (let i = arrayOfAudios.length - 1; i >= 0; i--) {
      if (audioOn !== arrayOfAudios[i]) {
        arrayOfAudios[i].pause()
      }
    }
  }

  return {
    focusButton,
    audioPlay,
    audioPause
  }
}