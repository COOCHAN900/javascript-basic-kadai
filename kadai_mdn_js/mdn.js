// 現在時刻を取得
const date = new Date();

// 年月日
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

// 出力表記に合わせた変数
const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);
