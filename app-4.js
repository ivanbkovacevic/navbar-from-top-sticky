gsap.registerPlugin(ScrollTrigger);

gsap.to('.a',{
    scrollTrigger:{
        trigger:'.a',
        start:'top center',
        toggleActions:'restart pause reverse pause',
        scrub:true,
        pin:true,
        snap:1
        },
    x:600,
    rotation:660,
    duration:5,
    opacity:1
});