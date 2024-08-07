// 東京都の天気予報データを取得するためのURL
const urlGet = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
// イベント処理の対象となるボタン
const buttonGet = document.getElementById("ajax-btnGet");

/**
 * ボタンのクリック時にイベント処理を実行する
 */
buttonGet.addEventListener("click", () => {
  // 気象庁のWebサイトにリクエストを送信し、天気予報データを取得する
  fetch(urlGet)
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => response.json()) // JSON形式のデータに変換
    .then((data) => {
      // JSONデータから「東京の明日の天気」を抽出して表示
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      console.log("東京の明日の天気：" + weather);
    });
});

// ダミーデータを送信するためのURL
const urlPost = "https://jsonplaceholder.typicode.com/posts";

// イベント処理の対象となるボタン
const buttonPost = document.getElementById("ajax-btnPost");

/**
 * ボタンのクリック時にイベント処理を実行する
 */
buttonPost.addEventListener("click", () => {
  // 送信するダミーデータ
  const dummyData = { name: "侍太郎", age: 30 };

  // ダミーサーバーにAjaxリクエストを送信する
  fetch(urlPost, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dummyData), // JSON形式に変換
  })
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => response.json()) // JSON形式のデータに変換
    .then((data) => {
      // サーバーから受け取ったダミーデータを見やすい形にして表示
      console.log("サーバーからの応答：\n" + JSON.stringify(data, null, 2));
    });
});
