// Declaring all required variables
let emInput = document.getElementById("email");
let emLabel = document.querySelector("form label");
let btn = document.querySelector("form button");
let succesMsg = document.querySelector(".success__msg");
let spanError = document.createElement("span");

// This is a vaildation for two things the first if there is no value it will make an error the second if the email is not vaild
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emInput.value != "") {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/g;
    if (regEx.test(emInput.value)) {
      succesMsg.style.display = "flex";
      let succesBtn = document.querySelector(".content button");
      succesBtn.onclick = function () {
        succesMsg.style.display = "none";
      };
    } else {
      spanError.textContent = "Vaild email required";
      spanError.style.color = "hsl(4, 100%, 67%)";
      emLabel.appendChild(spanError);
      emInput.style.border = "1px solid hsl(4, 100%, 67%)";
      emInput.style.backgroundColor = "#FFE8E6";
    }
  } else {
    spanError.textContent = "Cannot be empty";
    spanError.style.color = "hsl(4, 100%, 67%)";
    emLabel.appendChild(spanError);
    emInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emInput.style.backgroundColor = "#FFE8E6";
  }
});
// remove all errors when foucs on the input
emInput.onfocus = function () {
  emInput.style.border = "1px solid hsl(231, 7%, 60%)";
  emInput.style.backgroundColor = "white";
  spanError.textContent = "";
};
