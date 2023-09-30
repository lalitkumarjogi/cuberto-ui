const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function textanimation(){
    gsap.from(".homemain h1",{
         y:100,
         stagger:0.5,
         scale:0,
         duration:1,
         delay:0.5,
    }) 
}
textanimation()


function imageanimation(){
      gsap.to(".nav img",{
        scale:2,
        repeat:-0.5,
       yoyo:true,
        x:50,
        duration:0.5,
        delay:0.5,

      })
}
imageanimation()


function mousefollow()
{
    var box=document.querySelector(".box")
var body=document.querySelector("body")
 body.addEventListener("mousemove",function(val){
    box.style.left=val.x+"px";
    box.style.top=val.y+"px"
  })
}
mousefollow()