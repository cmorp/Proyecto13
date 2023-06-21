
// 3.1

ele1 = document.querySelector("#ele1")

ele1.addEventListener("click", function () {
    ele = document.querySelector("#ele1");
    ele.style.backgroundColor = "yellow";
})

// 3.2 

paint = function (color) {
    let ele2 = document.querySelector("#ele2");
    ele2.style.backgroundColor = color;
};

paint("green");
ele2.addEventListener("click", function () {
    paint("yellow")
});