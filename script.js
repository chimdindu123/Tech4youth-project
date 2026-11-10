// Change the background video when a circle is clicked.
var heroVideo = document.getElementById("hero-video");
var videoDots = document.querySelectorAll(".video-dot");
var videos = ["vid-1.mp4", "vid-2.mp4", "vid-3.mp4", "vid-4.mp4", "vid-5.mp4"];

videoDots.forEach(function(dot) {
    dot.addEventListener("click", function() {
        var videoNumber = Number(dot.getAttribute("data-video"));

        heroVideo.src = videos[videoNumber];
        heroVideo.load();
        heroVideo.play();

        videoDots.forEach(function(circle) {
            circle.classList.remove("active");
        });

        dot.classList.add("active");
    });
});
