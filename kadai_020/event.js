// btnというidを持つHTML要素を取得し、変数に代入する
const btn = document.getElementById("btn");

/**
 * HTML要素がクリックされたときにイベント処理を実行する
 * ->「ボタン」をクリックするとテキストが変わる
 */
btn.addEventListener("click", () => {
  const text = document.getElementById("text");
  text.textContent = "ボタンをクリックしました";
});
