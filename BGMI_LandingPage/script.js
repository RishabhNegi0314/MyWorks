Shery.imageEffect("#back", 
    {style:5, 
     config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.99,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.066376561504168},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.03,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.43,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":0.4,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":2.67,"range":[0,10]},"metaball":{"value":0.15,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}},gooey:true})

var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;

    document.querySelector("#main").addEventListener("click",function(){
        if(!animating){
            animating = true;
            gsap.to(h1s[index],{
                top:'-=100%',
                ease: Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    gsap.set(this._targets[0],{top:"100%"});
                    animating = false;
            },
        });
        index=== h1s.length-1? index=0:index++;
    
        gsap.to(h1s[index],{
            top:'-=100%',
            ease: Expo.easeInOut,
            duration:1,
        });
    }
});
})

var button = document.querySelector("#heroleft button");

    button.addEventListener("mouseover", function() {
        gsap.to(button, {
            scale: 1.2, 
            duration: 0.3, 
            ease: "power2.out" ,
            color:"white",
            backgroundColor: "black",
        });
    });

    button.addEventListener("mouseleave", function() {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
            color:"black",
            backgroundColor: "white",
        });
    });


    var links = document.querySelectorAll("#nleft a, #nright a");

links.forEach(function(link) {
    link.addEventListener("mouseover", function(){
        gsap.to(link, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
        });
    });

    link.addEventListener("mouseleave", function(){
        gsap.to(link, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    });
});

    