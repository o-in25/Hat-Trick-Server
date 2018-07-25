module.exports = {
  CalaculateTrueShootingPercentage: function(points, fga, fta) {
      return ((points) / (2 * (fga + (0.44 * fta))) * 100);
  }
};