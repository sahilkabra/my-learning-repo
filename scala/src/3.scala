package grab.three {

  object Solution {
    def solution(arr: Array[Array[Int]]): Int = {
      def sameCountryToLeft(currentCountry: Int, row: Int, col: Int, map: Array[Array[Int]]): Boolean = {
        if (col == 0) false
        else map(row)(col - 1) == currentCountry
      }
      def sameCountryToRight(currentCountry: Int, row: Int, col: Int, map: Array[Array[Int]]): Boolean = {
        if (col == map(0).length - 1) false
        else map(row)(col + 1) == currentCountry
      }
      def sameCountryToNorth(currentCountry: Int, row: Int, col: Int, map: Array[Array[Int]]): Boolean = {
        if (row == 0) false
        else map(row - 1)(col) == currentCountry
      }

      var countries: Int = 0
      for (row <- 0 until arr.length) {
        for (col <- 0 until arr(row).length) {
          var currentCountry = arr(row)(col)
          if (!sameCountryToLeft(currentCountry, row, col, arr) &&
            !sameCountryToNorth(currentCountry, row, col, arr)
            && !sameCountryToRight(currentCountry, row, col, arr)){
            countries += 1
          }
        }
      }
      countries
    }
  }

  import org.scalatest.{FlatSpec, Matchers}

  class Test extends FlatSpec with Matchers {
    "Solution" should "be 11" in {
      val inp: Array[Array[Int]] = Array(Array(5, 4, 4), Array(4, 3, 4), Array(3, 2, 4), Array(2, 2, 2), Array(3, 3, 4), Array(1, 4, 4), Array(4, 1, 1))
      val result = Solution.solution(inp)
      result should be(11)
    }
  }
}