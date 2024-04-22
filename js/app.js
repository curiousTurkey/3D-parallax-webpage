const parallax = document.querySelectorAll(".parallax");
let xValue = 0, yValue = 0;

window.addEventListener("mousemove",(event) => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;

    console.log(xValue , yValue);
    parallax.forEach(element =>{
        let speedx = element.dataset.speedx;
        let speedy = element.dataset.speedy;
        let zValue = event.clientX - parseFloat(getComputedStyle(element).left);
        console.log(zValue)
        element.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px)) perspective(2300px) translateZ(${zValue}px)`;
    })
});