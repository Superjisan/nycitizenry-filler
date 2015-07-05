var directions = ["up", "down", "left", "right"];
var effects = ["drop", "clip", "puff", "fade"];
var divClasses = [".nycstatue", ".nycempire", ".nycgrand", ".nycrainbow", ".nycstreet"]
var imageIndex = 0;
var directionIndex = 0;

$(document).ready(function() {
  setInterval(function() {
    if (!divClasses[imageIndex]) {
      throw new Error("image url not found in index");
    } else {
      var indexBefore = (imageIndex == 0) ? divClasses.length - 1 : imageIndex - 1;
      $(divClasses[indexBefore]).hide("drop", {
        direction: directions[directionIndex]
      }, 400, function() {
        $(divClasses[imageIndex]).show(effects[directionIndex], "linear", 700, function() {
          imageIndex = (imageIndex === divClasses.length - 1) ? 0 : imageIndex + 1;
          directionIndex = (directionIndex === directions.length - 1) ? 0 : directionIndex + 1;
        });
      });
    }

  }, 5000);
})