import "./styles.css";

let sortArray = (arr, t) => {
  let items = [];
  let item = {
    arr: [],
    formula: `${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]}`,
    total: arr[0] + arr[1] + arr[2] + arr[3] === t ? "〇" : "×"
  };
  item.arr = arr;
  items.push(item);
  return items;
};

let result = sortArray([1, 2, 5, 4], 12);
console.log(result);
