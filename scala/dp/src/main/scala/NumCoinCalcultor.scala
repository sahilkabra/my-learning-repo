/**
 * Calculate the number of ways in which change may be returned.
 */
object NumCoinCalculator extends App {

  private def calculate(coins: List[Int], unit: Int, currentCoinIndex: Int): Int = {
    if (coins.isEmpty || unit < 0 || currentCoinIndex < 0) {
      0
    } else if (unit == 0) {
      1
    } else {
      val currentCoin = coins(currentCoinIndex)
      if (currentCoin > unit) {
        0 + calculate(coins, unit, currentCoinIndex - 1)
      } else {
        calculate(coins, unit - currentCoin, currentCoinIndex)
      }
    }
  }

  def getWays(coins: List[Int], unit: Int): Int = calculate(coins.sorted, unit, coins.length - 1)
}
