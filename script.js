const btn = document.getElementById("btn");
const email = document.getElementById("email");
const error = document.getElementById("error");
const msg = document.getElementById("msg");

const inputArea = document.getElementById("inputArea");

btn.addEventListener("click", function () {
    if (email.value.includes("@") && email.value.includes(".")) {
        email.value = "";
        msg.classList.remove("invalid");
        email.classList.remove("invalid");
        error.classList.remove("invalid");
        window.location.href = "./submitted.html"
    }
    else {
        msg.classList.add("invalid");
        email.classList.add("invalid");
        error.classList.add("invalid");
    }
});