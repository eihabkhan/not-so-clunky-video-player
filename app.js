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
    progress.value = (video.currentTime / video.duration) * 100;

    // Update Timestamp
    // Minutes
    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    // Seconds
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

// Set Video Time
function setVideoProgess(){
    console.log("selected value:", progress.value)
    video.currentTime = (+progress.value * video.duration) / 100;

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