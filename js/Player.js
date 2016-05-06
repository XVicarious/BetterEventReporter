var Player = function(id) {
  this.id = id;
  this.rounds = [];  // array of array of [player, wins]
  this.wins = function() {
    var total = 0;
    this.rounds.forEach(function(round){
      total += round[1];
    });
    return total;
  };
  this.losses = function() {
    var total = 0;
    for (var i = 0; i < this.rounds.length; i++) {
      var roundWins = this.rounds[i][1];
      if (Math.round(roundWins) === roundWins && roundWins === 1) {
        // if there is no tie, and the player won 1 game
        total += 2;
      } else if (roundWins === 2 && this.rounds[i][0].rounds[i][1] === 1) {
        // if the player won 2 games, and his/her opponent won 1 game
        total += 1;
      }
      // otherwise, good job guy!
    }
    return total;
  };
  this.ratio = function() {
    return (this.wins() / this.losses());
  };
  this.opponentRatio = function() {
    var totalRatio = 0;
    this.rounds.forEach(function(round){
      totalRatio = round[0].ratio();
    });
    return (totalRatio / this.rounds.length);
  };
  this.addRound = function(opponent, wins) {
    this.rounds.push([opponent, wins]);
  }
};
