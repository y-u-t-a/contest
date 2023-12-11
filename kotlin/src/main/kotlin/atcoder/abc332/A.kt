package atcoder.abc332

fun main() {
    val (n, s, k) = readln().split(" ").map { it.trim().toInt() }
    var total = 0
    repeat(n) {
        val (p, q) = readln().split(" ").map { it.trim().toInt() }
        total += p * q
    }
    total = if (total >= s) total else total + k

    println(total)
}