// VARIABLES
var btn1 = document.querySelector("#ham-menu")
var closebtn = document.querySelector("#close")
var container1 = document.querySelector("#mobile-menu")
var backtop = document.querySelector("#top")


// MOBILE MENU OPEN BUTTON
btn1.addEventListener("click", function(){
if(container1.style.display == "block"){
  container1.style.display = "none"
}else{
  container1.style.display = "block"
}
})


// MOBILE MENU CLOSE BUTTON
closebtn.addEventListener("click", function(){
    if(container1.style.display == "none"){
      container1.style.display = "block"
    }else{
      container1.style.display = "none"
    }
})


// BACK TO TOP BUTTON
window.addEventListener("scroll", () => {
  if (scrollY > 420) {
     backtop.style.display = "block";
  } else {
     backtop.style.display = "none";
  }
});



// MEDIA QUERY TO CLOSE MOBILE NAVIGATION AUTOMATIC
function myFunction(x) {
    if (x.matches) { 
    container1.style.display = "none"
    } 
    else{
      container1.style.display = "none"
    }
    }
    
    var x = window.matchMedia("(max-width: 1040px)")
    myFunction(x)
    x.addListener(myFunction)




//   AUTOMATIC SLIDER JQUERY 
var owl = $('.automatic-slider');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
//   MANUAL SLIDER JQUERY 
$('.owl-one').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
     0: {
        items: 1
     },
     600: {
        items: 2
     },
     1000: {
        items: 3
     }
  }
})
