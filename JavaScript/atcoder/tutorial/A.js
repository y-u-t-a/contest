// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n")
  tmp = input[1].split(" ")

  //文字列から10進数に変換するときはparseIntを使う
  var a = parseInt(input[0], 10)
  var b = parseInt(tmp[0], 10)
  var c = parseInt(tmp[1], 10)
  var s = input[2]

  //出力
  console.log(`${a+b+c} ${s}`)
}

//*この行以降は編集しない
Main(require("fs").readFileSync("/dev/stdin", "utf8"))