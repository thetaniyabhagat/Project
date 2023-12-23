var crsr=document.querySelector("#cursor")
var crsr_blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-30+"px"
    crsr.style.top=dets.y-12+"px"
    crsr_blur.style.left=dets.x-125+"px"
    crsr_blur.style.top=dets.y-125+"px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    crsr.style.scale=2
    crsr.style.border="1px solid #fff"
    crsr.style.backgroundColor="transparent"
    crsr.style.left=dets.x-50+"px"
    crsr.style.top=dets.y-50+"px"
})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border="0px solid #95C11E"
    crsr.style.backgroundColor="#95C11E"
})
})
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        /*markers:true,*/
        start:"top -15%",
        end:"top -14%",
        scrub:1
    }
}) 

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        /*markers:true,*/
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in",{
    scale:0.7,
    opacity:0,
    duration:1,
    /*stagger:0.4,*/
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        /*markers:true,*/
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }

})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    /*stagger:0.4,*/
    scrollTrigger:{
    trigger:".card",
        scroller:"body",
       /* markers:true,*/
        start:"top 100%",
        end:"top 60%",
        scrub:2
    }

})

c
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
      /* markers:true,*/
        start:"top 98%",
        end:"top 85%",
        scrub:1,
        stagger:0.1
    }

})

gsap.from("#page4 h1",{
    y:100,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
      /* markers:true,*/
        start:"top 98%",
        end:"top 85%",
        scrub:3,
    }
})