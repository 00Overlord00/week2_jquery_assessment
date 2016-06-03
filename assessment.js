
  var numClick = [];
  var clicks = 0;
  $('#document').ready(function(){

  console.log('Script: GO');
  $('#generate').click(function(){
    $('body').append('<div id = "daddy"></div>');
    $('#daddy').append('<div id = "newDiv"></div>');
    $('#daddy').children().last().append('<button id = "delete">DELETE</button');
    $('#daddy').children().last().append('<button id = "change">CHANGE</button>');
    numClick.push(clicks);
    $('#daddy').children().last().append('<p>Times clicked:' + numClick.length);
    clicks ++;
  });

  $(document).on('click', '#delete', function(){
    $(this).parent().remove();
      });

  $(document).on('click', '#change', function(){
    $(this).parent().css('background-color', 'red');
  });




});
