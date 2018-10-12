var showhide = document.getElementsByClassName("show-hide");
var headernav = document.getElementsByClassName("header-nav");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
    for (var i = 0; i < showhide.length; i++) {
      showhide[i].style.display = "inline-block";
    }
    headernav[0].style.display = "none";
	  document.getElementsByClassName("logo-big")[0].classList.add("logo-big-collapse");
	  document.getElementsByClassName("search-box")[0].classList.add("search-box-collapse");
  } else {
    for (var i = 0; i < showhide.length; i++) {
      showhide[i].style.display = "none";
    }
    headernav[0].style.display = "block";
	  document.getElementsByClassName("logo-big")[0].classList.remove("logo-big-collapse");
	  document.getElementsByClassName("search-box")[0].classList.remove("search-box-collapse");
  }
}
