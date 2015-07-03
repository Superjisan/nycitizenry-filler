var imageHighUrls = ["/images/nycempirestate-high.jpg", "/images/nycstreet-high.jpg"];
var imageLowUrls = ["/images/nycempirestate-low.jpg", "/images/nycstreet-low.jpg"];
var imageIndex = 0;
$(document).ready(function() {
  setInterval(function() {
    if (imageIndex === imageHighUrls.length - 1) {
      imageIndex = 0
    } else {
      imageIndex++
    };

    if (!imageLowUrls[imageIndex]) {
      throw new Error("image url not found in index");
    } else {
      $(".wrapper").css("background-image", "url(" + imageLowUrls[imageIndex] + ")");
      $(".content").css("background-image", "url(" + imageHighUrls[imageIndex] + ")");
    }

  }, 3000);
})