"use strict";
import "./css/style.css";
import titleIconPath from './icons/shield.svg'

const TrueBlueTodo = (() => {
  let content = document.getElementById("content");

  // Top Bar contains Logo, Navbat and Title
  const addTopBar = () => {
    let topBarContainer = document.createElement("div");
    topBarContainer.className = "top-bar-container";

    /* Text Container */
    let topBarTextContainer = document.createElement('div')
    topBarTextContainer.className = 'top-bar-text'
    let topBarText = document.createElement('h4')
    topBarText.innerText = "True Blue Todo";

    topBarTextContainer.appendChild(topBarText)

    /* Top bar icon */
    let topBarIcon = document.createElement('img');
    topBarIcon.src = titleIconPath;
    topBarIcon.alt = 'My awesome image'
    topBarIcon.className = 'top-bar-icon';

    /* Navbar */
    let navbar = document.createElement('div');
    navbar.className = 'navbar-container';

    for(let i = 0; i < 3; i++) {
      let navbarButton = document.createElement('button')
      navbarButton.className = 'navbar-button'
      navbarButton.innerText = 'Example button'
      navbar.appendChild(navbarButton)
    }


    /** Append Elements */
    topBarContainer.appendChild(topBarIcon);
    topBarContainer.appendChild(topBarTextContainer)
    topBarContainer.appendChild(navbar);

    content.appendChild(topBarContainer);
  };

  /* TODO */
  /** Background for empty list */
  // "Cattle die, kinsmen die; the self must also die. I know one thing which never dies: the reputation of each dead man"
  let poeticEddaQuote =
    "Deyr fé,\ndeyja frændr,\ndeyr sjalfr it sama,\nek veit einn,\nat aldrei deyr:\ndómr um dauðan hvern.";

  return {
    addTopBar
  };
})()

const Module = (() => {
  TrueBlueTodo.addTopBar();
})();
