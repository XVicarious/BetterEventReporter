var Player = function(id) {
  this.id = id;
  // rounds = [[player, wins]]
  this.rounds = [];
};

Player.wins = function() {
  var total = 0;
  this.rounds.forEach(function(round){
    total += round[1];
  });
  return total;
};

Player.losses = function() {
  var total = 0;
  for (var i = 0; i < this.rounds.length; i++) {
    var roundWins = this.rounds[i][1];
    if (Math.round(roundWins) === roundWins && roundWins === 1) {
      // if there is no tie, and the player won 1 game
      total += 2;
    } else if (roundWins === 2 && this.rounds[0].rounds[i][1] === 1) {
      // if the player won 2 games, and his/her opponent won 1 game
      total += 1;
    }
    // otherwise, good job guy!
  }
  return total;
};

Player.ratio = function() {
  return (this.wins() / this.losses());
};

Player.opponentRatio = function() {
  var totalRatio = 0;
  this.rounds.forEach(function(round){
    totalRatio = round[0].ratio();
  });
  return (totalRatio / this.rounds.length);
};
