var slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function changeImage(imageUrl1, imageUrl2, imageUrl3) {
  var slides = document.getElementsByClassName("slide");
  var imgElements = slides[0].getElementsByTagName("img");
  imgElements[0].src = imageUrl1;
  imgElements[1].src = imageUrl2;
  imgElements[2].src = imageUrl3;
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide");
  var prevIndex = slideIndex;

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  for (var i = 0; i < slides.length; i++) {
    if (i === slideIndex || i === prevIndex) {
      slides[i].classList.add("active");
    } else {
      slides[i].classList.remove("active");
    }
  }
}
