class NumCoinCalculatorTestSuite extends org.scalatest.FunSuite {
    test("calculate number of ways of making change for 0 units") {
      val ways = NumCoinCalculator.getWays(Array(1, 2, 3), 0)
      assert(ways === 1)
    }
    test("calculate number of ways of making change for [] and 4") {
      val ways = NumCoinCalculator.getWays(Array(), 4)
      assert(ways === 0)
    }
    test("calculate number of ways of making change for [1] and 1") {
      val ways = NumCoinCalculator.getWays(Array(1), 1)
      assert(ways === 1)
    }
    test("calculate number of ways of making change for [1] and 2") {
      val ways = NumCoinCalculator.getWays(Array(1), 2)
      assert(ways === 1)
    }
    test("calculate number of ways of making change for [1, 2] and 1") {
      val ways = NumCoinCalculator.getWays(Array(1, 2), 1)
      assert(ways === 1)
    }
    test("calculate number of ways of making change for [1, 2] and 2") {
      val ways = NumCoinCalculator.getWays(Array(1, 2), 2)
      assert(ways === 2)
    }
    test("calculate number of ways of making change for [1, 2] and 3") {
      val ways = NumCoinCalculator.getWays(Array(1, 2), 3)
      assert(ways === 2)
    }
    test("calculate number of ways of making change for [1, 2, 3] and 3") {
      val ways = NumCoinCalculator.getWays(Array(1, 2, 3), 3)
      assert(ways === 3)
    }
    test("calculate number of ways of making change for [1, 2, 3] and 4") {
      val ways = NumCoinCalculator.getWays(Array(1, 2, 3), 4)
      assert(ways === 4)
    }
    test("calculate number of ways of making change for [1, 5, 10, 20] and 50") {
      val ways = NumCoinCalculator.getWays(Array(1, 5, 10, 20), 50)
      assert(ways === 56)
    }
    test("calculate number of ways of making change for [2, 5, 3, 6] and 10") {
      val ways = NumCoinCalculator.getWays(Array(2, 5, 3, 6), 10)
      assert(ways === 5)
    }
    test("calculate number of ways of making change for [2] and 1") {
      val ways = NumCoinCalculator.getWays(Array(2), 1)
      assert(ways === 0)
    }
}
