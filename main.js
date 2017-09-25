$(document).ready(function () {

  $('#mainInput').on('keyup', function () {
    var size = +$('#mainInput').val();
    divMaker(size);
    for (var b = 0; b < size; b++) {
      buttonMaker(size);
    }

  });
 $('#control').slideUp(0);

 $('#blueButton').on('click', function () {
     colorCenter.blue();
 });

 $('#redButton').on('click', function () {
   colorCenter.red();
 });

 $('#randomButton').on('click', function () {
   colorCenter.random();
 });

 $('#restart').on('click', function () {
   teleprompt();
 });

 teleprompt();
});



function divMaker (size) {
    $('#place').html('<div id="place"></div>');
    for (var i = 0; i < size; i++) {
      var divr = $('<div id='+i+' class="divr"></div>');
      divr.appendTo('#place');
    }
  };

  function buttonMaker (size) {
    for (var n = 0; n < size; n++) {
      var buttoner = $('<button class="buttoner"></button');
      buttoner.appendTo('#'+n+'');
    }
  };

  function slider () {
    $('#control').slideToggle();
  };

  function teleprompt () {
    var bigfigga = prompt('Enter a number between 1-64');
    colorCenter.sts();
    if (bigfigga != null) {
      bigfigga = parseInt(bigfigga);
      divMaker(bigfigga);
      for (var b = 0; b < bigfigga; b++) {
        buttonMaker(bigfigga);
      }}};

  var colorCenter = {
    blue: function () {
      $('#place').on('mouseenter', 'button', function () {
        $(this).css('background-color', 'blue');
      });
    },
    red: function () {
      $('#place').on('mouseenter', 'button', function () {
        $(this).css('background-color', 'red');
      });
    },
    random: function () {
      $('#place').on('mouseenter', 'button', function () {
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);

        $(this).css('background-color', 'rgb('+r+', '+g+', '+b+')');

      });
    },
    sts: function () {
      $('#place').on('mouseenter', 'button', function () {
        $(this).css('background-color', 'black');
      });
    }
  }
