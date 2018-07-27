// calculates popular basketball stats
module.exports = {
  CalaculateTrueShootingPercentage: function(points, fga, fta) {
      return ((points) / (2 * (fga + (0.44 * fta))) * 100);
  },
    CalculateEffectiveFieldGoalPercentage: function(threepm, fga) {
      return ((0.5 * threepm/ fga));
    },
    CalculateDefensiveReboundPercentage: function (drb, tm, pm, teamDrb, opponentOrb) {
        return ((drb * (tm / 5)) / (pm * (teamDrb + opponentOrb)));
    },
    CalculateOffensiveReboundPercentage: function (orb, tm, pm, teamOrb, opponentDrb) {
        return ((orb * (tm / 5)) / (pm * (teamOrb + opponentDrb)));
    },
    CalaculateFreeThrowRate: function(fta, fga) {
      return (fta / fga);
    },
    CalculateScoreRate: function (ppg, ppm) {
        return (ppg/ppm);
    },
    CalaculateAssistTurnOverRatio(ast, tov) {
      return Math.abs((1 / ((ast/tov))) * 100);
    },
    CalaculateScoreRate(ppg, minSecGame) {
      return (ppg / (minSecGame / 60));
    }

};