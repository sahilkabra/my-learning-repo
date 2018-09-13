/**
 * Calculate the number of ways in which change may be returned.
 */
object NumCoinCalculator extends App {

  private def rcalculate(coins: Array[Long], amountToMakeChange: Long, currentCoinIndex: Int): Long = {
    if (coins.isEmpty || currentCoinIndex < 0 || amountToMakeChange < 0) 0
    else if (amountToMakeChange == 0) 1
    else {
      val currentCoinValue = coins(currentCoinIndex)
      if (currentCoinValue == 1) 1
      else if (currentCoinValue > amountToMakeChange) rcalculate(coins, amountToMakeChange, currentCoinIndex - 1)
      else {
        (rcalculate(coins, amountToMakeChange, currentCoinIndex - 1)
          + rcalculate(coins, amountToMakeChange - currentCoinValue, currentCoinIndex))
      }
    }
  }

  private def dpcalculate(coins: Array[Long], amount: Long): Long = {
    val ways = Array.fill(amount + 1)(0)
    ways(0) = 1

    for (i <- 0 to coins.length; j <- coins(i) to amount) {
      ways(j) = ways(j) + ways(j - coins(i))
    }
    ways(amount + 1)
  }

  def getWays(coins: Array[Long], unit: Long): Long =
    // rcalculate(coins.sorted, unit, coins.length - 1)
    dpcalculate(coins.sorted, unit)
}
