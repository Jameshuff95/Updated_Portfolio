// This determines which section is loaded on forst load
window.onload = function() {
  showSection('contact_section'); // Display bio section on page load
    switchSkill('frontend_list');
    switchOtherSkill('technical_skills');
    switchImage('image0_div');
 };

// themes
const lightMode = {
  background_color: "white",
  color: "black"
};

const darkMode = {
  background_color: "black",
  color: "lightblue"
};

// global selectors
const div = document.querySelector('#switch_tip');
const switcher = document.querySelector('#inner_switch');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('a');
const flashlight = document.querySelector('#flashlight');
const listContainer = document.getElementById('list_container');
const arrowLeft = document.querySelector('.fa-arrow-left');
const arrowRight = document.querySelector('.fa-arrow-right');

// initial states
let isClicked = false;
let originalX = 0;
let originalY = 0;
let currentIndex = 0; 

// Apply light mode as default
body.style.backgroundColor = lightMode.background_color;
body.style.color = lightMode.color;
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = lightMode.color;
}

// Controls themes and switch_tip position
switcher.addEventListener('click', function(event) {
  if (isClicked) {
    div.style.transform = `translate(${originalX}px, ${originalY}px)`;
    flashlight.style.display = "none";
    body.style.backgroundColor = lightMode.background_color;
	  
    body.style.color = lightMode.color;
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = lightMode.color;
    }
    isClicked = false;
  } else {
      const newX = event.clientX;
      const newY = event.clientY;
      div.style.transform = `translate(${0}%, ${10}vmin)`;
      flashlight.style.display = "block";
      body.style.backgroundColor = darkMode.background_color;
      body.style.color = darkMode.color;
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = darkMode.color;
      }
      isClicked = true;
    }
});

// This determines the position of the flashlight
document.addEventListener('mousemove', function(event) {
	
  // This gets the cursor coordinates relative to the viewport
  const x = event.clientX;
  const y = event.clientY;

  // Get the scroll offset of the page
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
	
  // This adds a smooth CSS transition property to the flashlight
  flashlight.style.transition = 'left 0.2s ease, top 0.2s ease'; 
	
  // This accounts for the scroll offset
  flashlight.style.left = x - 50 + scrollX + 'px';
  flashlight.style.top = y - 50 + scrollY + 'px';
	
});

// This determines what section is displayed connected by onclick used with each navLink in HTML file
function showSection(sectionId) {
  let sectionToShow = document.getElementById(sectionId);
  let sections = document.getElementsByTagName('section');
	
  // hide all other sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
	
  // show the currently selected section
  sectionToShow.style.display = 'block';
}

// This determines which skill is displayed connected by onclick used with each navLink in HTML file
function switchSkill(divId) {
  let listToShow = document.getElementById(divId);
  let lists = document.getElementsByClassName('list_container_ul');
	 
  // hide all other sections
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.display = 'none';
  }
	
  // show the currently selected section
  listToShow.style.display = 'block';
}

// This determines which other_skill is displayed connected by onclick used with each navLink in HTML file
function switchOtherSkill(divId) {
  let skillToShow = document.getElementById(divId);
  let skill = document.getElementsByClassName('skill_div');
	
  for (let i = 0; i < skill.length; i++) {
    skill[i].style.display = 'none';
  }
	
  skillToShow.style.display = 'block';
}

// This determines which project image is displayed connected by onclick used with each navLink in HTML file
function switchImage(divId) {
  const imageToShow = document.getElementById(divId);
  const image = document.getElementsByClassName('project_container');
		
  for (let i = 0; i < image.length; i++) {
    image[i].style.display = 'none';
  }
	
  imageToShow.style.display = 'block';
}


