var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myWorks");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



function activateLink(link) {
  var navbarLinks = document.querySelectorAll('.navbar a');

  // Remove 'active' class from all links
  navbarLinks.forEach(function(navLink) {
    navLink.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  link.classList.add('active');
}


var typed = new Typed('#element', {
  strings: ['Frontend Developer &amp; Designer A portfolio to show my expertise and work'],
  typeSpeed: 75,
});