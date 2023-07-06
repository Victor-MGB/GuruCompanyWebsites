document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".mylogGallery img");

  // Open the clicked image in a new window
  function openImage(event) {
    const imageUrl = event.target.src;
    window.open(imageUrl);
  }

  // Attach click event listeners to each image
  images.forEach(function (image) {
    image.addEventListener("click", openImage);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const videoPlayer = document.querySelector(".video-player");
  const videoTime = document.querySelector(".video-time");
  const playPauseBtn = document.querySelector(".play-pause-btn");

  // Update time
  videoPlayer.addEventListener("timeupdate", function () {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

    videoTime.textContent =
      formatTime(currentTime) + " / " + formatTime(duration);
  });

  // Format time in mm:ss format
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }

  // Add leading zero if the number is less than 10
  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }

  // Play/Pause the video when the button is clicked
  playPauseBtn.addEventListener("click", function () {
    if (videoPlayer.paused || videoPlayer.ended) {
      videoPlayer.play();
      playPauseBtn.innerHTML = "&#10074;&#10074;";
    } else {
      videoPlayer.pause();
      playPauseBtn.innerHTML = "&#9658;";
    }
  });

  // Automatically load the next video when the current video ends
  videoPlayer.addEventListener("ended", function () {
    const nextVideoSource = getNextVideoSource();

    if (nextVideoSource) {
      videoPlayer.src = nextVideoSource;
      videoPlayer.load();
      videoPlayer.play();
    }
  });

  // Define the video sources
  const videoSources = [
    "/GuruTech/videos/WhatsApp Video 2023-07-01 at 9.59.19 AM.mp4",
    "/path/to/video2.mp4",
    "/path/to/video3.mp4",
    // Add more video sources as needed
  ];

  // Get the index of the current video source
  function getCurrentVideoIndex() {
    return videoSources.indexOf(videoPlayer.currentSrc);
  }

  // Get the next video source
  function getNextVideoSource() {
    const currentIndex = getCurrentVideoIndex();
    const nextIndex = currentIndex + 1;

    if (nextIndex < videoSources.length) {
      return videoSources[nextIndex];
    } else {
      return null;
    }
  }
});

