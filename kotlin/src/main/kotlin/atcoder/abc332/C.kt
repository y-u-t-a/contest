package atcoder.abc332

fun main() {
    val (n, m) = readln().split(" ").map { it.trim().toInt() }
    val schedule = readln()
    var mstock = m
    var lstock = 0
    var needs = 0

    repeat(n) {
        when(schedule[it]) {
            '0' -> {
                mstock = m
                lstock = needs
            }
            '1' -> {
                if (mstock == 0 && lstock == 0) {
                    needs++
                } else if (mstock == 0) {
                    lstock--
                } else {
                    mstock--
                }
            }
            '2' -> {
                if (lstock == 0) {
                    needs++
                } else {
                    lstock--
                }
            }
            else -> {}
        }
    }
    println(needs)
}