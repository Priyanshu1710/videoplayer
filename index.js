var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var btn = document.getElementById('play-pause');

function toggleplaypause() {
    if (video.paused) {
        btn.className = "pause";
        video.play();

    }
    else {
        btn.className = "play";
        video.pause();
    }
}
btn.onclick = function () {
    toggleplaypause();
    // alert('playyy!!!');
}
video.addEventListener('timeupdate', function(){
    var juicePos=video.currentTime/video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
        btn.idName="button";
    }
})