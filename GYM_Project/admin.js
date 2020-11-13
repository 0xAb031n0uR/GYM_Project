
const color = document.querySelector('#color-code');
const about = document.querySelector('#about-text');
const aboutText = document.querySelector('#about-changing');
const gymName = document.querySelector('#gym-name');
const logoName = document.querySelector('#name');


if(sessionStorage.getItem("color")){
    const storageValue =  sessionStorage.getItem("color");
    document.documentElement.style.setProperty('--main-color', storageValue)
}
if(sessionStorage.getItem("about")){
    const storageValue1 =  sessionStorage.getItem("about");
    aboutText.innerHTML = storageValue1;
}
if(sessionStorage.getItem("logo")){
    const storageValue2 =  sessionStorage.getItem("logo");
    logoName.innerHTML = storageValue2;
}

  const button = document.querySelector('#submit');
  
  button.addEventListener("click", (e) => {
   e.preventDefault();
  })
  
  
  function changeColor(){
    if(color.value.length > 0){
        sessionStorage.setItem('color', `${color.value}`);
    }
    if(about.value.length > 0){
    sessionStorage.setItem('about', `${about.value}`);
    }
    if(gymName.value.length > 0){
    sessionStorage.setItem('logo', `${gymName.value}`);
    }
    location.reload();
  }