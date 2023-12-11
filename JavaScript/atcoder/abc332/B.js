/**
 * K回繰り返す
 * グラスが水で満たされているとき、すなわちグラスにちょうど G ml 入っているとき、グラスの水をすべて捨てる。
  そうでなく、マグカップが空であるとき、マグカップを水で満たす。
  上のいずれでもないとき、マグカップが空になるかグラスが水で満たされるまで、マグカップからグラスに水を移す。
 * G（グラス） < M（マグ）
 * K G M
 * @param {string} input
 */
function Main(input) {
  const [ K, G, M ] = input.split(" ").map(n => parseInt(n, 10))
  let g = 0
  let m = 0

  for (let index = 0; index < K; index++) {
    if (g === G) {
      g = 0
    } else if (m === 0) {
      m = M
    } else {
      const nokori = G - g
      if (nokori > m) {
        g = g + m
        m = 0
      } else {
        m = m - nokori
        g = G
      }
    }
  }

  console.log(`${g} ${m}`)
}

//*この行以降は編集しない
Main(require("fs").readFileSync("/dev/stdin", "utf8"))