$(document).on('ready', function() {
  // check to make sure JS is loaded
  console.log('JS is loaded!');

  /*fetch source template and comple */
  var source = $('#players-template').html();
  var template = Handlebars.compile(source);
  //console.log(source);

  /* Create player object and run through template */
  var playerArray = [
    new Player("Player 1", "doge", "very blue", "much cheese", "wow."),
    new Player("Player 2", "Grumpy Cat", "No.", "Your soul.", "meh."),
  ];
  var renderedHTML = template({ players: playerArray });
  $('.playerStats').append(renderedHTML);
});

/* Player Object Constructor */
function Player(player, name, favColor, favFood, motto){

    /* Object Attributes */
    this.player = player;
    this.name = name;
    this.favColor = favColor;
    this.favFood = favFood;
    this.motto = motto;
    /* End Object Attributes */
}
$(function() {
  // global variables
  $reset = $('#reset');
  var winner = '';

  //reset to initial state of race
  var raceAgain = function() {
    $reset.addClass('tmp-hidden');
    $('.player').css({left: 0});
    winner = '';
  };

  //show confetti and reset button when winner declared
  var executeWin = function() {
    $reset.removeClass('tmp-hidden');
  };

  // take keypress event and move correct player
  var movePlayer = function(keypressEvent) {

    // returns key like 'a', 'l', etc.
    var keyCode = String.fromCharCode(keypressEvent.keyCode);

    // find player and player's position
    var $player = $('[data-key="' + keyCode + '"]');
    var leftPosition = $player.offset().left;

    // set player's new position (move forward)
    $player.css({left: leftPosition + 10});

    // if player moved past end of track
    if ($player.offset().left >= $('#track').width() - $player.width()) {

      // set winner to player and execute win
      winner = $player;
      executeWin();
      alert('Game over! Press Reset to play again.');
    }
  };

  // add event-handlers
  var race = function() {
    $(window).on('keypress', function(event) {
      if (!winner) {
        movePlayer(event);
      }
    });
    $reset.on('click', function() {
      raceAgain();
    });
  };

  // start the race!
  race();
});
