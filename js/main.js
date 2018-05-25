
function $(className) {
  return document.getElementsByClassName(className).item(0);
}

function toggleFullScreen() {
  var fullscreenElement = document.fullscreenElement ||
    document.msFullscreenElement ||
    document.mozFullscreenElement ||
    document.webkitFullscreenElement;

  if (!fullscreenElement) {
    var elem = document.documentElement;
    var requestFullscreen = elem.requestFullscreen ||
      elem.msRequestFullscreen ||
      elem.mozRequestFullScreen ||
      elem.webkitRequestFullscreen;
    requestFullscreen.call(elem);

  } else {
    var exitFullscreen = document.exitFullscreen ||
      document.msExitFullscreen ||
      document.mozExitFullscreen ||
      document.webkitExitFullscreen;
    if (exitFullscreen) {
      exitFullscreen.call(document);
    }
  }
}

window.addEventListener('load', function() {

  $("skip-to-end").addEventListener('click', function() {
    window.scrollTo(0, document.body.scrollHeight);
  });

  $("fullscreen").addEventListener('click', function() {
    toggleFullScreen();
  });
});
