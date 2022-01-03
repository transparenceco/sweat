const animationEnter = (container) => {
    return gsap.from(container, {autoAlpha:0, duration:1, clearProps:'all', ease:'out'});
}

const animationLeave = (container) => {
    return gsap.to(container, { autoAlpha:0, duration:0.5, clearProps:'all', ease:'none'});
}

barba.init ({
    transitions: [
        {   
            once({next}){
                animationEnter(next.container);
            },
            leave: ({current}) => animationLeave(current.container),
            enter({next}){
                animationEnter(next.container);
            }
        }
    ]
})