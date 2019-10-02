const startAnimations = () => {
    const animationWrappers = document.getElementsByClassName("animate");
    for (let i = 0; i < animationWrappers.length; i++) {
        if (animationWrappers[i].getBoundingClientRect().y < (window.innerHeight * 0.8)){
            animationWrappers[i].classList.add("animate-start");
        } else {
            animationWrappers[i].classList.remove("animate-start");
        }
    }
};
window.addEventListener("scroll", startAnimations);