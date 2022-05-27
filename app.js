
document.addEventListener("DOMContentLoaded", function() {
  fetch('https://picsum.photos/v2/list')
 .then(response => response.json())
 .then((data) => {

  for (let i=0;i<10;i++){
    
    console.log(data[i].url)
    
    document.querySelector(".slideshow-container").innerHTML+=`<div class="mySlides fade">
     
    
     <div class="numbertext">${i%10}</div>
      <img src="${data[i].download_url}.jpg" height="500" width="800">
        <div class="text">${data[i].author}</div>
   </div>`
  }

  //slider buttons
  // document.querySelector(".slideshow-container").innerHTML+=`
  // <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  //    <a class="next" onclick="plusSlides(1)">&#10095;</a>`

     let slideIndex = 0;
showSlides();

function showSlides() {
  let i;

 
  let slides = document.getElementsByClassName("mySlides");



  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
 
 }

    


)});
 







