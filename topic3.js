var image16=document.getElementById("image16");
image16.style.display='none';
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
    var image16=document.getElementById("image16");
    image16.style.display='none';
})
document.getElementById("output").addEventListener('click',function(){
    var image16=document.getElementById("image16");
    image16.style.display='block';
})

var image18=document.getElementById("image18");
image18.style.display='none';
document.addEventListener('DOMContentLoaded', function() {
    const bgVideo2 = document.getElementById('bgVideo2');
    const startBtn2 = document.getElementById('startBtn2');
    const stopBtn2 = document.getElementById('stopBtn2');

    startBtn2.addEventListener('click', function() {
        bgVideo2.play();
    });

    stopBtn2.addEventListener('click', function() {
        bgVideo2.pause();
    });
});
document.getElementById("startBtn2").addEventListener('click',function(){
    var image18=document.getElementById("image18");
    image18.style.display='none';
})
document.getElementById("output2").addEventListener('click',function(){
    var image18=document.getElementById("image18");
    image18.style.display='block';
})