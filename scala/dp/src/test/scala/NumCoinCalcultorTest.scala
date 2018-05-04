class NumCoinCalculatorTestSuite extends org.scalatest.FunSuite {
    test("calculate number of ways of making change for 0 units") {
      val ways = NumCoinCalculator.getWays(List(1, 2, 3), 0)
      assert(ways === 1)
    }
    test("calculate number of ways of making change for [] and 4") {
      val ways = NumCoinCalculator.getWays(List(), 4)
      assert(ways === 0)
    }
    test("calculate number of ways of making change for [1] and 1") {
      val ways = NumCoinCalculator.getWays(List(1), 1)
      assert(ways === 1)
    }
    test("calculate number of ways of making change for [1] and 2") {
      val ways = NumCoinCalculator.getWays(List(1), 2)
      assert(ways === 1)
    }
    test("calculate number of ways of making change for [1, 2] and 2") {
      val ways = NumCoinCalculator.getWays(List(1, 2), 2)
      assert(ways === 2)
    }
    test("calculate number of ways of making change for [1, 2, 3] and 4") {
      val ways = NumCoinCalculator.getWays(List(1, 2, 3), 4)
      assert(ways === 4)
    }
}
