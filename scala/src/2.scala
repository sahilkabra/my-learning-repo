package grab.two {

  object Solution {
	def solution(arr: Array[Int]): Int = {
		var cost = 0
		if (arr.length < 4) arr.length * 2 //travelling 2 days or less, buy 1 day tickets
		else if (arr.length > 23) 25 //travelling 23 days or more, buy the montly ticket
		else {
			//group by travel dates of 7
			val calendar = Array.fill(30)(0)
			//set all days travelling to 1
			for (i <- arr) calendar(i - 1) = 1
			println(calendar.mkString(" "))
			var day = 0
			while (day < 30) {
				if (calendar(day) == 1) {
					if (calendar.slice(day, day + 6).sum > 3) {
						//if travelling for more than 3 days, buy 7 day ticket at cost of 7
						println("Buy 7 day")
						cost += 7
						day += 7
					} else {
						println("Buy 1 day")
						cost += 2
						day += 1
					}
				} else day += 1
			}
		}
		cost
	}
  }

  import org.scalatest.{FlatSpec, Matchers}

  class Test extends FlatSpec with Matchers {
	"Solution" should "be 11" in {
	  val inp = Array(1, 2, 3, 5, 7, 29, 30 )
	  val result = Solution.solution(inp)
	  result should be(11)
	}
  }
}
