package grab.zero {

  object Solution {
    def solution(arr: Array[Int]): Int = {
      var equil = -1
      var sumleft = 0
      var sumright = arr.drop(1).sum
      for (i <- (0 until arr.length) if equil == -1) {
        if (sumleft == sumright) equil = i
        else {
          sumleft = sumleft + arr(0)
          if (i == arr.length) sumright = 0
          else sumright = sumright - arr(i + 1)
        }
      }
      equil
    }
  }

  import org.scalatest.{FlatSpec, Matchers}

  class Test extends FlatSpec with Matchers {
    "Solution" should "be 1" in {
      val inp = Array(-1, 3, -4, 5, 1, -6, 2, 1)
      val result = Solution.solution(inp)
      result should be(1)
    }
    it should "be -1" in {
      val inp: Array[Int] = Array()
      val result = Solution.solution(inp)
      result should be(-1)
    }
  }

}