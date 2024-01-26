



const showImageButton = document.getElementsByClassName("show-image-button");
const myImage = document.getElementsByClassName("my-image");
showImageButton.addEventListener("click", () => { 
   myImage.classList.toggle("visible"); 
});