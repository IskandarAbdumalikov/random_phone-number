const TEL_NUMBERS =  [
  "+998 93 929 5727",
  "+998 99 614 3347",
  "+998 93 574 7600",
  "+998 93 467 0522",
  "+998 99 097 3306",
  "+998 91 507 1123",
  "+998 93 771 4320",
  "+998 88 278 4041",
  "+998 93 109 2049",
  "+998 91 009 3104",
  "+998 91 343 0668",
];

const tel = document.querySelector(".tel");
const btn = document.querySelector(".btn");
const collection = document.querySelector(".collection");
const addBtn = document.querySelector(".add-btn");
const form = document.querySelector(".form");
const addFormBtn = document.querySelector(".add-btn");
const telBtns = document.querySelector(".tel__btns");
const telNumber = document.querySelector("#number");
const cancelBtn = document.querySelector(".cancel");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);
  let interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length);
    tel.innerHTML = TEL_NUMBERS[randomNumber];
  }, 200);
  setTimeout(() => {
    clearInterval(interval);
    btn.removeAttribute("disabled");
  }, 3000);
});

function createItem(data) {
  while (collection.firstChild) {
    collection.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  data.forEach((el) => {
    let li = document.createElement("li");
    li.innerHTML = el;
    fragment.appendChild(li);
  });
  collection.appendChild(fragment);
}

createItem(TEL_NUMBERS);

form.addEventListener("submit", (e) => {
  const inputValue = telNumber.value;
  TEL_NUMBERS.push(`+${inputValue.slice(0, 3)} ${inputValue.slice(3, 5)} ${inputValue.slice(5,8)} ${inputValue.slice(8, 12)}`);

  e.preventDefault();
  createItem(TEL_NUMBERS);
  telNumber.value = "";
});

addBtn.addEventListener("click",()=>{
  form.classList.add("show__form")
})

cancelBtn.addEventListener("click", () => {
  form.classList.remove("show__form");
});