var random = (min, max) => {
  var rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};

let run_no = document.getElementById('run_no');
let run_yes = document.getElementById('run_yes');
let run_close = document.getElementById('run_close');
let run_result = document.getElementById('run_result');

run_no.addEventListener('mouseenter', () => {
  run_no.style.left = `${random(0, 80)}%`;
  run_no.style.top = `${random(0, 80)}%`;
});

// run_result.innerHTML = 'Эркек экенсин тутуп алдын а';
run_no.onclick = () => {
  run_result.style.display = 'flex';
  run_result.innerHTML =
    'Эркек экенсин  &#160;  <img src="icons8-facebook-like-100.png" alt="">';
};
run_yes.onclick = () => {
  run_result.style.display = 'flex';
  run_result.innerHTML =
    'Мен билгем &#160; <img src="icons8-emoji-64.png" width="100px"> ';
};
run_close.onclick = () => {
  run_result.style.display = 'flex';
  run_result.innerHTML =
    'Калжыңдабай жөн ойно! &#160;<img src="icons8-emoji-128.png" alt="">';
};
