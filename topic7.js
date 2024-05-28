var image30=document.getElementById("image30");
image30.style.display='none';
document.addEventListener('DOMContentLoaded', function() {
    const bgVideo = document.getElementById('bgVideo');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', function() {
        bgVideo.play();
    });

    stopBtn.addEventListener('click', function() {
        bgVideo.pause();
    });
});
document.getElementById("startBtn").addEventListener('click',function(){
    var image30=document.getElementById("image30");
    image30.style.display='none';
})
document.getElementById("output").addEventListener('click',function(){
    var image30=document.getElementById("image30");
    image30.style.display='block';
})