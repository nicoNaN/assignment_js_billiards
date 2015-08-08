var Controller = (function(args) {

  var init = function() {
    newBall = new Ball(350, 250);

    setInterval(function() {
      newBall.tic();
      $("#ball").css({"margin-left": newBall.position.x, "margin-top": newBall.position.y });
    }, 50);

  };

  return {
    init: init,
  };

})();
