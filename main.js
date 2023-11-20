function welcome() {
  alert("Selmat datang di website tasbih online by Azi :)");
  const removeHidden = document.querySelector("#contents");
  removeHidden.removeAttribute("hidden");
}

document.body.onload = welcome;

function increment(){
  const increment = document.querySelector("#count").innerText++;
      if(increment >= 99){
        const getNewElmeent = document.getElementById('muncul');
        getNewElmeent.innerText = 'hamdalah';
      }
    }
document.getElementById("incrementButton").onclick = increment;
function clear() {
    const resetBt = document.getElementById('count');
    resetBt.innerText = '0';
}
document.getElementById('resetButton').onclick = clear;
