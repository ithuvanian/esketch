$(document).ready(function() {

  var gridSize = 75;
  $('#frame')
    .css('width', gridSize + 'vh')
    .css('height', gridSize + 'vh');

  function createGrid() {

    // clear squares on grid if reloading
    $('#frame')
    .html('')
    .css('background', '#222')
    .css('outline', '1px solid #aaa');

    // size of grid based on input
    var n = parseInt($('#num').val());
    if (isNaN(n) || n < 1 || n > 100) {
      $('#num').val('16');
      n = 16;
    }

    for (var i = 0; i < (n * n); i++) {
      var square = document.createElement('div');
      var squareSize = (gridSize / n) + 'vh';
      $(square)
        .css('height', squareSize)
        .css('width', squareSize);
      $('#frame').append(square);
    }

    // instructions appear on grid
    $('#instructions').css('display', 'block');

    // drawing on grid
    $('#frame div').on('mousedown', function() {
      $('#instructions').css('display', 'none');
      $(this).css('background', '#fff');
    });

    var mouseDown = 0;
    $(document).mousedown( () => mouseDown = 1 ).mouseup( () => mouseDown = 0 );

    $('#frame div').mousemove(function() {
      if (mouseDown === 1)
        $(this).css('background', '#fff');
    });
    // prevent grid from dragging
    $('#frame div').on('dragstart', () => false);
  }

  $('#create').on( 'click', () => createGrid() );

}); //end ready
