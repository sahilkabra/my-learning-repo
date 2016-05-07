package grab {

  object Solution {
    def solution(entry: String, exit: String): Int = {
      var cost = 2 //entry costs 2
      val entryTimes = entry.split(":").map(_.toInt)
      val exitTimes = exit.split(":").map(_.toInt)
      val hourDiff = exitTimes(0) - entryTimes(0)
      val minDiff = exitTimes(1) - entryTimes(1)
      println(f"$hourDiff $minDiff")
      if ((hourDiff == 0 && minDiff > 0) ||
        (hourDiff == 1 && minDiff == 0))
        cost += 3
      else if (hourDiff == 1 && minDiff > 0) cost += 7
      else {
        if (hourDiff > 0) {
          cost = cost + 3 //adding the first hour
          cost = cost + ((hourDiff - 1) * 4) //adding all sumsequent hours
        }
        if (minDiff > 0) cost = cost + 4 //adding partial diff
      }
      cost
    }
  }
  package test {
    import org.scalatest.{FlatSpec, Matchers}

    class Test extends FlatSpec with Matchers {
      "Solution" should "be 17" in {
        val entry = "10:00"
        val exit = "13:21"
        val result = Solution.solution(entry, exit)
        result should be(17)
      }
      it should "be 9 for 2 hours" in {
        val entry = "9:42"
        val exit = "11:42"
        val result = Solution.solution(entry, exit)
        result should be(9)
      }
      it should "be 5" in {
        val entry = "9:42"
        val exit = "10:00"
        val result = Solution.solution(entry, exit)
        result should be(5)
      }
      it should "be 9" in {
        val entry = "9:42"
        val exit = "11:00"
        val result = Solution.solution(entry, exit)
        result should be(9)
      }
      it should "be 9 after min also" in {
        val entry = "9:42"
        val exit = "10:43"
        val result = Solution.solution(entry, exit)
        result should be(9)
      }
      it should "be 29" in {
        val entry = "12:15"
        val exit = "18:36"
        val result = Solution.solution(entry, exit)
        result should be(29)
      }
      it should "be 97 for full day" in {
        val entry = "00:00"
        val exit = "23:99"
        val result = Solution.solution(entry, exit)
        result should be(97)
      }
      it should "be 2 for entry and exit" in {
        val entry = "9:42"
        val exit = "9:42"
        val result = Solution.solution(entry, exit)
        result should be(2)
      }
      it should "be 5 for one hour" in {
        val entry = "9:42"
        val exit = "10:42"
        val result = Solution.solution(entry, exit)
        result should be(5)
      }
    }
  }
}