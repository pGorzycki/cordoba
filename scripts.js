
// SCROLL ANIMATION
const startAnimations = () => {
    const animationWrappers = document.getElementsByClassName("animate");
    for (let i = 0; i < animationWrappers.length; i++) {
        if (animationWrappers[i].getBoundingClientRect().y < (window.innerHeight * 0.8)){
            if (!animationWrappers[i].classList.contains("animate-start")) {
                numberAnimations();
                animationWrappers[i].classList.add("animate-start");
            }
        }
        else {
            animationWrappers[i].classList.remove("animate-start");
        }
    }
};
window.addEventListener("scroll", startAnimations);


// NUMBERS ANIMATION

const numberAnimations = () => {
    const price = document.querySelector(".price");
    const distance = document.querySelector(".distance");
    const engine = document.querySelector(".engine");
    const horses = document.querySelector(".horses");


    let priceNumber = 0;
    let distanceNumber = 0;
    let engineNumber = 0;
    let horsesNumber = 0;

    const priceAnimation = () => {
        priceNumber = priceNumber + 100;
        price.textContent = priceNumber + " zł";
        if (priceNumber >= 3000) {
            clearInterval(priceInterval);
            }
        };
    const distanceAnimation = () => {
        distanceNumber = distanceNumber + 1000;
        distance.textContent = distanceNumber + " km";
        if (distanceNumber >= 152000) {
            clearInterval(distanceInterval);
        }
    };
    const engineAnimation = () => {
        engineNumber = engineNumber + 100;
        engine.textContent = engineNumber + " cm3";
        if (engineNumber >= 1400) {
            clearInterval(engineInterval);
            engineNumber = 0;
        }
    };
    const horsesAnimation = () => {
        horsesNumber = horsesNumber + 5;
        horses.textContent = horsesNumber + " KM";
        if (horsesNumber >= 75) {
            clearInterval(horsesInterval);
            horsesNumber = 0;
        }
    };

    const priceInterval = setInterval(priceAnimation, 80);
    const distanceInterval = setInterval(distanceAnimation, 20);
    const engineInterval = setInterval(engineAnimation, 150);
    const horsesInterval = setInterval(horsesAnimation, 180);


};


