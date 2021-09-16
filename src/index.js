"use strict";
import "./css/style.css";
import titleIconPath from "./icons/shield.svg";

const TrueBlueTodo = (() => {
  let content = document.getElementById("content");

  // Top Bar contains Logo, Navbat and Title
  const addTopBar = () => {
    let topBarContainer = document.createElement("div");
    topBarContainer.className = "top-bar-container";

    /** Append Elements */
    topBarContainer.appendChild(createTopBarIcon());
    topBarContainer.appendChild(createTopBarTextContainer());
    topBarContainer.appendChild(createTopBarNavbar());

    content.appendChild(topBarContainer);
  };

  const createTopBarTextContainer = () => {
    let topBarTextContainer = document.createElement("div");
    topBarTextContainer.className = "top-bar-text";
    let topBarText = document.createElement("h4");
    topBarText.innerText = "True Blue Todo";

    topBarTextContainer.appendChild(topBarText);
    return topBarTextContainer;
  };

  const createTopBarIcon = () => {
    /* Top bar icon */
    let topBarIcon = document.createElement("img");
    topBarIcon.src = titleIconPath;
    topBarIcon.alt = "My awesome image";
    topBarIcon.className = "top-bar-icon";

    return topBarIcon;
  };

  const createTopBarNavbar = () => {
    /* Navbar */
    let navbar = document.createElement("div");
    navbar.className = "navbar-container";

    for (let i = 0; i < 3; i++) {
      let navbarButton = document.createElement("button");
      navbarButton.className = "navbar-button";
      navbarButton.innerText = "Example button";
      navbar.appendChild(navbarButton);
    }

    return navbar;
  };
  // Add todos from the list of todos and update them

  /* TODO */
  /** Background for empty list */
  // "Cattle die, kinsmen die; the self must also die. I know one thing which never dies: the reputation of each dead man"
  let poeticEddaQuote =
    "Deyr fé,\ndeyja frændr,\ndeyr sjalfr it sama,\nek veit einn,\nat aldrei deyr:\ndómr um dauðan hvern.";

  return {
    addTopBar,
  };
})();

const Module = (() => {
  TrueBlueTodo.addTopBar();
})();
