const btn = document.getElementById("btn");
const errMsg = [
    document.getElementById("email"),
    document.getElementById("error"),
    document.getElementById("msg")
]

btn.addEventListener("click", function () {
    if (email.value.includes("@") && email.value.includes(".")) {
        window.location.href = "./submitted.html"
        for (let i = 0; i < errMsg.length; i++) {
            errMsg[i].classList.remove("invalid");
        }
        email.value = "";
    }
    else {
        for (let i = 0; i < errMsg.length; i++) {
            errMsg[i].classList.add("invalid");
        }
    }
});