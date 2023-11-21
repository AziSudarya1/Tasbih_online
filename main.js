function welcome() {
  alert("Selmat datang di website tasbih online tetaplah berbuat kebaikan :)");
  const removeHidden = document.querySelector("#contents");
  removeHidden.removeAttribute("hidden");
}

document.body.onload = welcome;

function increment(){
  const increment = document.querySelector("#count").innerText++;
    }
document.getElementById("incrementButton").onclick = increment;
function clear() {
    const resetBt = document.getElementById('count');
    resetBt.innerText = '0';
}
document.getElementById('resetButton').onclick = clear;
