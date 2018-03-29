const nav = document.querySelector('.nav-container');
const lHeader = document.querySelector('.landing-header')
const headerBackground = document.querySelector('.header-background');
const navControl = document.querySelector('.nav-control');
const logoBackup = document.querySelector('.logo-backup');
const listItem = document.querySelector('.list-item');
const menuContainer = document.querySelector('.menu-container');
const menuButtons = document.querySelectorAll('.menu-button');
const menuSection = document.querySelectorAll('.menu-section');


//All Nav open logic for landing page
const navControllerL = () =>{
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

//All Nav open logic for menu page
const navControllerM = () =>{
  nav.classList.toggle('nav-closed');
  menuContainer.classList.toggle('header-open');
  if(navControl.innerHTML.includes('<i class="fas fa-angle-right"></i>')){
    navControl.innerHTML = '<i class="fas fa-angle-left"></i>'
    hideLogo();
  }else{
    navControl.innerHTML = '<i class="fas fa-angle-right"></i>'
    hideLogo();
  };
};

// Hide Logo
const hideLogo = ()=>{
    logoBackup.classList.toggle('logo-hidden');
}

//Nav open on load
window.onload = ()=>{
  setTimeout(() => {
     lHeader || headerBackground ? navControllerL(): navControllerM();
  }, 2000);
};

// Close nav and move header
navControl.addEventListener('click', (e)=>{
    lHeader || headerBackground ? navControllerL(): navControllerM();
});

//Add event listeners to menu buttons
menuButtons.forEach((menuButton)=>{
  menuButton.addEventListener('click', (e)=>{
    let selected = e.currentTarget
    toggleMenus(selected)
  })
})

//Toggle menu visibility
const toggleMenus = (selected) =>{
  menuSection.forEach((section)=>{
      if(section.id !== selected.innerText){
        section.classList.contains('hidden') ? null: section.classList.toggle('hidden');
      }else{
        section.classList.contains('hidden') ? section.classList.toggle('hidden'): null;
      }
    })
}
