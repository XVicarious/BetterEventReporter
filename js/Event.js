var Event = function(players) {
  this.players = players;
  this.reportRound = function(playerOne, playerTwo, winsOne, winsTwo) {
    playerOne.addRound(playerTwo, winsOne);
    playerTwo.addRound(playerOne, winsTwo);
  };
  this.getRankings = function() {
    var playersCopy = this.players.slice(0);
    return playersCopy.sort(this.rankPlayers);
  };
  this.rankPlayers = function(playerA, playerB) {
    // todo: I didn't think enough about this, wins, ratios, both?  Probably both...
    // someone who went 2-0, 1-2 did better than someone that went 2-1, 1-2, yet the have the same
    // number of wins, gotta check this proper in time
    if (playerA.wins() > playerB.wins()) {
      return -1;
    } else if (playerA.wins() < playerB.wins()) {
      return 1;
    } else {
      // Both players have the same number of wins
      if (playerA.opponentRatio() > playerB.opponentRatio()) {
        return -1;
      } else if (playerA.opponentRatio() < playerB.opponentRatio()) {
        return 1;
      } else {
        // Both players have the same opponent ratio as well!
        return 0;
      }
    }
  };
};
