let result_input = document.getElementById("result_input");
let container = document.querySelectorAll(".container button");
let reset_btn = document.querySelector(".reset_btn");
let equal_btn = document.querySelector(".equal_btn");
let delete_btn = document.querySelector(".delete_btn");
let current = "";
const calculeAll = () => {
  container.forEach((btn) => {
    btn.onclick = (e) => {
      let value = e.target.getAttribute("value");
      result_input.value += value;
      if (value === "=") {
        result_input.value = eval(current);
        current = result_input.value;
      } else {
        current += value;
        result_input.value = current;
      }
    };
  });
};
calculeAll();

reset_btn.onclick = () => {
  result_input.value = "";
  current = "";
};
delete_btn.onclick = () => {
  current = current.slice(0, -1);
  result_input.value = current;
};

let select_number = document.querySelectorAll(".select_number");
let lauding=document.querySelector(".lauding")
const change_bk = () => {
  select_number.forEach((btn) => {
    btn.onclick = (e) => {
        document.body.classList.remove("first_change_colors","second_change_colors","therde_change_colors");
        lauding.classList.remove("first_lauding","seconde_lauding","therde_lauding")
      let one = e.target.closest(".one");
      let two=e.target.closest(".two");
      let tree=e.target.closest(".tree");
      if(one){
        document.body.classList.toggle("first_change_colors");
        lauding.classList.toggle("first_lauding")
    }
    if(two){
        document.body.classList.toggle("second_change_colors");
        lauding.classList.toggle("seconde_lauding")
    }
    if(tree){
        document.body.classList.toggle("therde_change_colors")
        lauding.classList.toggle("therde_lauding")
    }
    };
  });
};
change_bk();
