$(document).ready(function() {

  // toggle color picker
  $('.palette').on('click', function() {
    $(this).hide();
    $('.jscolor').show();
  });
  $('.frame').on('mousedown', function() {
    $('.jscolor').hide();
    $('.palette').show();
  });

  var currentColor = '#' + $('.jscolor').val();

  var gridSize = 75;
  $('.frame')
    .css('width', gridSize + 'vh')
    .css('height', gridSize + 'vh');

  function createGrid() {

    // clear squares on grid if reloading
    $('.frame')
      .html('')
      .css('background', '#222')
      .css('outline', '1px solid #aaa');

    // size of squares based on input
    var n = parseInt($('.num').val());
    if (isNaN(n) || n < 1 || n > 200) {
      $('.num').val('40');
      n = 40;
    }

    // fill frame with squares
    for (var i = 0; i < (n * n); i++) {
      var square = document.createElement('div');
      var squareSize = (gridSize / n) + 'vh';
      $(square)
        .css('height', squareSize)
        .css('width', squareSize);
      $('.frame').append(square);
    }

    // instructions appear on grid
    $('.instructions').show();

    // drawing on grid
    $('.frame div').on('mousedown', function() {
      $('.instructions').hide();
      $(this).css('background', '#' + $('.jscolor').text());
    });

    var mouseDown = 0;
    $(document).mousedown(() => mouseDown = 1).mouseup(() => mouseDown = 0);

    $('.frame div').on('mousemove', function() {
      if (mouseDown === 1)
        $(this).css('background', '#' + $('.jscolor').text());
    });
    // prevent grid from dragging
    $('.frame div').on('dragstart', () => false);
  }

  $('.create').on('click', () => createGrid());

}); //end ready
