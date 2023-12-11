// inputに入力データ全体が入る
/**
 * N種類、送料無料になる金額 S円、送料 K円
 * 単価 P 個数 Q
 * N S K
 * P Q
 * ...
 */
/** 
 * @param {string} input
 */
function Main(input) {
  const lines = input.split("\n")
  const [ N, S, K ] = lines[0].split(" ").map(n => parseInt(n, 10))
  const filtered = lines.slice(1, N + 1)
  let sum = 0

  filtered.forEach(line => {
    const [P, Q] = line.split(" ").map(n => parseInt(n, 10))
    sum += P * Q
  })
  //出力
  console.log(`${sum < S ? sum + K : sum}`)
}

//*この行以降は編集しない
Main(require("fs").readFileSync("/dev/stdin", "utf8"))