$(document).ready(function () {

  // $('.carousel').carousel({interval:false})
  
  const navbar = document.querySelector(".main-nav");
  const toggler = document.querySelector(".menu-toggle");
  const crYear = document.getElementById("cr-year");

  toggler.addEventListener("click", (event) => {
    navbar.classList.toggle('responsive')
  })


  window.onscroll = function() {myFunction()};
  // Get the header
  var header = document.querySelector(".main-nav");
  
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  // copyright year auto update
  crYear.innerHTML = new Date().getUTCFullYear();



	var btn = $('.up');

	// btn.on('click', function () { 
	// 	$('html,body').animate({
	// 		scrollTop: 0 
	// 	}, 500); 

	// });

	$(window).on('scroll', function () { 
		var a = $(this), 
			height = a.height(),
			top = a.scrollTop();

		if (top > height) {
			if (!btn.is(':visible')) {
				btn.show();
			}
		} else {
			btn.hide();
		}
  });
  



});


