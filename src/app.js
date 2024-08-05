
document.querySelector(".box").innerHTML = " BOO";


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.to(".box", {
        duration: 2, 
        rotation: 720,     // Duration of the animation
        y: 300,           // Move the box down by 300px
        ease: "bounce.out", // Use the bounce easing function
        repeat: 2,       // Repeat indefinitely
        yoyo: true       
        });
        
        })




console.log('HELLO WOLRD');