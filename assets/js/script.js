
let ele1 = document.querySelector("#ele1");

paint = function (color="green") {
ele1.style.backgroundColor = color;
};

paint();
ele1.addEventListener("click", function () {
paint("yellow")
});
