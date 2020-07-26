const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & Pause
function toggleVideoStatus() {
    video.paused ? video.play() : video.pause();
}

// Update play and pause button
function updatePlayButton() {
    video.paused ? playBtn.innerHTML = '<i class="fa fa-play fa-2x" aria-hidden="true"></i>' : playBtn.innerHTML = '<i class="fa fa-pause fa-2x" aria-hidden="true"></i>'
}

// Update progress 
function updateProgress() {
    return true;
}

// Set Video Time
function setVideoProgess(){
    return true;
}

// Stop Video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


// Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("play", updatePlayButton);
video.addEventListener("timeupdate", updateProgress);

playBtn.addEventListener("click",toggleVideoStatus);
stopBtn.addEventListener("click",stopVideo);

progress.addEventListener("change", setVideoProgess);