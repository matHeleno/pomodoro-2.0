export function Sounds() {
  
  const treeAudio = new Audio('./assets/sounds/Floresta.wav')
  const cloudAudio = new Audio('./assets/sounds/Chuva.wav')
  const cafeteriaAudio = new Audio('./assets/sounds/Cafeteria.wav')
  const bonfireAudio = new Audio('./assets/sounds/Lareira.wav')

  const arrayOfAudios = [treeAudio, cloudAudio, cafeteriaAudio, bonfireAudio]

  return {
    treeAudio,
    cloudAudio,
    cafeteriaAudio,
    bonfireAudio,
    arrayOfAudios
  }
}
