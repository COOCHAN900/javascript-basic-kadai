// btnというidを持つHTML要素を取得し、変数に代入する
const btn = document.getElementById("btn");

/**
 * HTML要素がクリックされたときにイベント処理を実行する
 * ->「ボタン」をクリックすると2秒後にテキストが変わる
 */
btn.addEventListener("click", () => {
  setTimeout(() => {
    const text = document.getElementById("text");
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
