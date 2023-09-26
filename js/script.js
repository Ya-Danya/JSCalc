function plus() {
  let first_number = Number(document.getElementById('first_input').value);
  let second_number = Number(document.getElementById('second_input').value);
  

  document.getElementById('result').textContent = "Result: " + (first_number + second_number);
}

function minus() {
  let first_number = Number(document.getElementById('first_input').value);
  let second_number = Number(document.getElementById('second_input').value);

  document.getElementById('result').textContent = "Result: " + (first_number - second_number);
}



document.getElementById('plus').onclick = plus;
document.getElementById('minus').onclick = minus;
// console.error();
// console.warn();
// console.info();

//allert("Всплывающее окно");
//var data = confirm("Всплывающее окно с разрешением"); ответ - буль
