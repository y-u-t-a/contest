package atcoder.abc332

fun main() {
    val (k, g, m) = readln().split(" ").map { it.trim().toInt() }
    var gstock = 0
    var mstock = 0

    repeat(k) {
        if (gstock == g) {
            gstock = 0
        } else if (mstock == 0) {
            mstock = m
        } else {
            val gspace = g - gstock
            if (gspace <= mstock) {
                gstock = g
                mstock -= gspace
            } else {
                gstock += mstock
                mstock = 0
            }
        }
    }
    println("$gstock $mstock")
}