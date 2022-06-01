const video = document.getElementById("video")
const playBtn = document.getElementById("play")
const stopBtn = document.getElementById("stop")
const timeline = document.getElementById("timeline")
const timestamp = document.getElementById("timestamp")

function toggleVideoStatus() {
  console.log("toggle")
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
function updateVideoIcon() {
  if (video.paused) {
    playBtn.innerHTML = "<i class='fa fa-play fa-2x'></i>"
  } else {
    playBtn.innerHTML = "<i class='fa fa-pause fa-2x'></i>"
  }
}
function setVideoTime() {
  video.currentTime = (+timeline.value * video.duration) / 100
}
function stopVieo() {
  video.pause()
  video.currentTime = 0
}
function updateVideoTime() {
  timeline.value = (video.currentTime / video.duration) * 100

  let mins = Math.floor(video.currentTime / 60)

  if (mins < 10) {
    mins = "0" + String(mins)
  }
  let seconds = Math.floor(video.currentTime % 60)

  if (seconds < 10) {
    seconds = "0" + String(seconds)
  }
  timestamp.innerHTML = `${mins}:${seconds}`
}

video.addEventListener("click", toggleVideoStatus)
video.addEventListener("play", updateVideoIcon)
video.addEventListener("pause", updateVideoIcon)
video.addEventListener("timeupdate", updateVideoTime)

playBtn.addEventListener("click", toggleVideoStatus)
stopBtn.addEventListener("click", stopVieo)
timeline.addEventListener("change", setVideoTime)
