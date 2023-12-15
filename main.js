function welcome() {
  alert("Selmat datang di website tasbih online tetaplah berbuat kebaikan :)");
  const removeHidden = document.querySelector("#contents");
  removeHidden.removeAttribute("hidden");
}

document.body.onload = welcome;


//kita coba pakai local storage

//buat key dari local storage

const localStorageKey = 'PRESS_FREQUENCY';

const incrementButton = document.querySelector('#incrementButton');
const resetButton = document.querySelector('#resetButton');
const displayCount = document.querySelector('#count');


//kita berikan nilai item dari local storage
displayCount.innerText = localStorage.getItem(localStorageKey);


//update nilai ketika tombol increment di tekan 

incrementButton.addEventListener('click', () =>{
  //menggunakan method getitem untuk setUp awalnya / untuk mengaksesnya 
  let countWithGetItem = localStorage.getItem(localStorageKey);
  countWithGetItem++;

  //menggunakan setItem untuk set value awalnya 
  localStorage.setItem(localStorageKey, countWithGetItem);

  //tampilkan pada id count
  displayCount.innerText = localStorage.getItem(localStorageKey);

});

//memberikan value 0 ke tampilan / reset

  resetButton.addEventListener('click', () =>{
    localStorage.removeItem(localStorageKey);
    displayCount.innerText = 0;
  });


