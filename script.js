gsap.to("#box1", {
  x: 500,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "yellow",
  borderRadius: "50%",
  scale: 0.5,
});

gsap.from("#box2", {
  x: 500,
  duration: 2,
  delay: 1,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.5,
});

gsap.from("h1", {
  opacity: 0,
  duration: 2,
  y: 20,
  delay: 1,
  stagger: -1, // run in reverse
  repeat: -1,
  yoyo: true,
});

gsap.to("#box3", {
  x: 400,
  duration: 2,
  delay: 1,
  rotate: 1 * 360,
  repeat: -1, // repeat 1 time means run once and one repeat = 2 time
  yoyo: true, // initial to final and final to initial so on
});

// gsap.to("#box4",{
//   x:1500,
//   rotate:360,
//   duration:1.5,
//   borderRadius:"30%",
//   delay:1,
// }) // time taken = 1+1.5=2.5
// gsap.to("#box5",{
//   x:1500,
//   rotate:360,
//   duration:1.5,
//   borderRadius:"25%",
//   delay:3, // for previous animation time + 0.5
// })
// gsap.to("#box6",{
//   x:1500,
//   rotate:360,
//   duration:1.5,
//   borderRadius:"20%",
//   delay:5, // for previous animation time(3+0.5) + 0.5
// })

var tl = gsap.timeline();
tl.to("#box4",{
  x:1500,
  rotate:360,
  duration:0.5,
  borderRadius:"30%",
  delay:1,
})
tl.to("#box5",{
  x:1500,
  rotate:360,
  duration:1.5,
  borderRadius:"25%",
  delay:0.5, 
})
tl.to("#box6",{
  x:1500,
  rotate:360,
  duration:1.5,
  borderRadius:"20%",
  delay:0.5,
})


var tl2 = gsap.timeline();
tl2.from("h2",{
   y:-30,
  opacity:0,
  duration:0.5,
  delay:0.2
})
tl2.from("h4",{
   y:-30,
  opacity:0,
  duration:0.5,
  stagger:0.3
})
tl2.from("h3",{
  y:20,
  opacity:0,
  duration:0.5,
  scale:0.2,
})
