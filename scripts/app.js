$(document).ready(function() {
  //Check to make sure JS is loaded
  console.log('JS is loaded!');

  /* Fetch source template and comple */
  var source = $('#players-template').html();
  var template = Handlebars.compile(source);
  //console.log(source);

  /* Create player object and run through template */
  var playerArray = [
    new Player("Player 1", "doge", "very blue", "much cheese", "so wow"),
    new Player("Player 2", "Grumpy Cat", "No.", "Your soul.", "meh."),
  ];
  var renderedHTML = template({ players: playerArray });
  $('.playerStats').append(renderedHTML);

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

    //Declare global variables
    var $doge = $('#doge');
    var $grumpy = $('#grumpy');
    $reset = $('#reset');

    //Show Reset button when winner declared
    var showReset = function() {
      $reset.removeClass('tmp-hidden');
    };

    //Reset game
    $('.btn').on('click', function() {
      $reset.addClass('tmp-hidden');
      raceHandler();
      $doge.css({left: 0});
      $grumpy.css({left: 0});
    });

  //Call function to initialize game
  raceHandler();

    //Race handler and check for winner
    function raceHandler () {
      $(window).on('keypress', function(e) {

         //Declare local variables
          var dogePosition = $('#doge').position().left;
          var grumpyPosition = $('#grumpy').position().left;
          var $track = $('#track').width();

          if ((e.which === 97) && (dogePosition <  ($track * 0.90))) {
            $doge.animate({'left': '+=50px'}, 10);
          }

          else if ( (e.which === 97) && (dogePosition > ($track * 0.90))) {
            $(window).off('keypress');
            showReset();
            alert('doge wins such happy');
          }

          if ((e.which === 108) && (grumpyPosition <  ($track * 0.90))) {
            $grumpy.animate({left: '+=50px'}, 10);
          }

          else if ((e.which === 108) && (grumpyPosition > ($track * 0.90))) {
            $(window).off('keypress');
            showReset();
            alert ('So, Grumpy Cat wins? Who cares.');
          }
      });
    }
});
