$(document).ready(function() {
  var game = new Game();

  $("#select-name").on("submit",function (event) {
    event.preventDefault(); //To not refresh the page
    console.log($('#name').val())
    var player = new Player($('#name').val())
    game.addPlayer(player)
    updateHeadingText(player.name)
    $(".form").remove();
});
  function updateHeadingText(name){
    var new_text = `${name}'s scorecard`
    $('#title').text(new_text)
  };
});