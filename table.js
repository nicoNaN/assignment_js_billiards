var Table = (function(args) {

  var dimensions = { width: 700, height: 500 };
  var borders = { top: 0, bottom: 500, right: 700, left: 0 };
  var activeBalls = [];

  var init = function(args) {
    _render();
  };

  var _render = function() {
    _renderTable();
    _renderActiveBalls();
  };

  _renderTable = function() {
    $("#billiards-table").append("<div id='table'></div>");
  };

  _renderActiveBalls = function() {
    $("#table").append("<div id='ball'></div>");
  };

  return {
    init: init,
    dimensions: dimensions,
    borders: borders,
    activeBalls: activeBalls,
  };

})();
