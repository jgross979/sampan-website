const nav = document.querySelector('.nav-container');
const lHeader = document.querySelector('.landing-header')
const headerBackground = document.querySelector('.header-background');
const navControl = document.querySelector('.nav-control');
const logoBackup = document.querySelector('.logo-backup');
const listItem = document.querySelector('.list-item')


const navController = () =>{
  nav.classList.toggle('nav-closed');
  lHeader.classList.toggle('header-open');
  headerBackground.classList.toggle('header-open');
  if(navControl.innerHTML.includes('<i class="fas fa-angle-right"></i>')){
    navControl.innerHTML = '<i class="fas fa-angle-left"></i>'
    hideLogo();
  }else{
    navControl.innerHTML = '<i class="fas fa-angle-right"></i>'
    hideLogo();
  };
};

const hideLogo = ()=>{
    logoBackup.classList.toggle('hidden');
}

//Nav open on load
window.onload = ()=>{
  setTimeout(() => {
    navController();
  }, 2000);
};

// Close nav and move header
navControl.addEventListener('click', (e)=>{
  navController();
});
