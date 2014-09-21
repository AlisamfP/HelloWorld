// Generated by CoffeeScript 1.8.0
(function() {
  var animate, ease;

  ease = function(progress, easing) {
    switch (easing) {
      case 'ease-out':
        return Math.sin(Math.PI / 2 * progress);
      case 'ease-in':
        return 1 - (Math.cos(Math.PI / 2 * progress));
      case 'ease-in-out':
        return (1 - (Math.cos(Math.PI * progress))) / 2;
      default:
        return progress;
    }
  };

  animate = function(element, easing) {
    var endTime, endX, intervalID, startTime, startX;
    if (easing == null) {
      easing = 'none';
    }
    startTime = Date.now();
    endTime = startTime + 2000;
    startX = $('#animate').offset().left;
    endX = startX + $('#animate').width() - element.width();
    return intervalID = setInterval(function() {
      var currentTime, currentX, progress;
      currentTime = Date.now();
      if (currentTime > endTime) {
        currentTime = endTime;
      }
      progress = (currentTime - startTime) / (endTime - startTime);
      progress = ease(progress, easing);
      currentX = progress * (endX - startX);
      element.css({
        left: currentX
      });
      if (currentTime >= endTime) {
        return clearInterval(intervalID);
      }
    }, 1000 / 30);
  };

  $(document).ready(function() {
    return $('.dis').click(function() {
      animate($('.first'));
      animate($('.second'), 'ease-out');
      animate($('.third'), 'ease-in');
      return animate($('.fourth'), 'ease-in-out');
    });
  });

}).call(this);
