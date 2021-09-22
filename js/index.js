const $video = document.querySelector('#video'); 
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $backward = document.querySelector('#backward');

$play.addEventListener('click',handlePlay);
$pause.addEventListener('click',handlePause);
$backward.addEventListener('click',handleBackwar);
$forward.addEventListener('click',handleForward);

function handlePlay() {
  $video.play()
  $play.hidden =true
  $pause.hidden = false
  
}

function handlePause(){
  $video.pause()
  $play.hidden =false /* oculta el boton */
  $pause.hidden = true
}   

function handleForward(){
  $video.currentTime/*tiempo de progreso del video */ += 10
 
}

function handleBackwar(){
  $video.currentTime -= 10  
}
const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded) /* cargue de los datos del video */
$video.addEventListener('timeupdate', handleTimeUpdate) /* tiempo de reproducción del video */
$progress.addEventListener('input', handleInput)

function handleLoaded(){
  $progress.max = $video.duration /* tenemos el dato exacto de la duración dle video */
  console.log("ha cargado el video", $video.duration)
}

function handleTimeUpdate(){
  $progress.value = $video.currentTime
}

function handleInput(){  
  $video.currentTime =$progress.value
}