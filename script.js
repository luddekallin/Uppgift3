const goodbyeBtn = document.querySelector("#goodbyeBtn");
const helloTag = document.querySelector("h1");

goodbyeBtn.addEventListener(
    "click",
    function (event){
        helloTag.innerHTML = "Goodbye World!"
    }
);