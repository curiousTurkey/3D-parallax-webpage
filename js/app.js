const parallax = document.querySelectorAll(".parallax");
let xValue = 0, yValue = 0;
let rotateDegree = 0;
function update(xvalue){
    parallax.forEach(element =>{
        let speedx = element.dataset.speedx;
        let speedy = element.dataset.speedy;
        let speedz = element.dataset.speedz;
        let rotationSpeed = element.dataset.rotation;
        let isInLeft = (parseFloat(getComputedStyle(element).left) < window.innerWidth/2)?  1 : -1;
        let zValue = (xvalue - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.1;
        console.log(zValue)
        element.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
        rotateY(${rotateDegree * rotationSpeed}deg)
        translateY(calc(-50% + ${-yValue * speedy}px)) perspective(2300px) 
        translateZ(${zValue * speedz}px)`;
    })
}
update(0)
window.addEventListener("mousemove",(event) => {
    xValue = event.clientX - window.innerWidth / 2;
    yValue = event.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth/2)) * 20;
    console.log(xValue , yValue);
    update(event.clientX);
});
//gsap animation