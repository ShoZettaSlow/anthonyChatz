document.addEventListener("load", function(){
	window.scroll(0,100);
	document.getElementsByClassName('hNavElem')[0].addEventListener("focus", function() {
		window.scrollTo(x-coord, y-coord);
		document.getElementsByClassName('hContainer')[0].style.top = "0";
	})
})
var scrollFirstTime = true;
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	if(scrollFirstTime==true){
		scrollFirstTime = false;
		return;
	}
	if((window.pageYOffset < 650 || window.pageYOffset > 1000) && window.pageYOffset != 0){
		return;
	}
var currentScrollPos = window.pageYOffset;
var height = document.getElementsByClassName('hContainer')[0].offsetHeight;
  if (prevScrollpos > currentScrollPos) {
	document.getElementsByClassName('hContainer')[0].style.top = "0";
  } else {
	document.getElementsByClassName('hContainer')[0].style.top = "-"+height+"px";
  }
  prevScrollpos = currentScrollPos;
}