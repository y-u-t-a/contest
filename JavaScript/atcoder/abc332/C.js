/**
 * N（スケジュール日数） M（無地Tシャツ枚数）
 * S（0|1|2 からなる文字列）0: 予定なし、1: 食事、2: イベント
 * 食事 → 無地 or ロゴ
 * イベント → ロゴ
 * @param {string} input
 */
function Main(input) {
  const lines = input.split("\n")
  const [ N, M ] = lines[0].split(" ").map(n => parseInt(n, 10))
  const schedule = lines[1]
  let stock = M
  let lstock = 0
  let needs = 0

  for (let index = 0; index < N; index++) {
    switch(schedule[index]) {
      case "0":
        stock = M
        lstock = needs
        break
      case "1":
        if (stock === 0 && lstock === 0) {
          needs++
        } else if (stock === 0) {
          lstock--
        } else {
          stock--
        }
        break
      case "2":
        if (lstock === 0) {
          needs++
        } else {
          lstock--
        }
        break
      default:
        break
    }
  }

  console.log(needs)
}

//*この行以降は編集しない
Main(require("fs").readFileSync("/dev/stdin", "utf8"))