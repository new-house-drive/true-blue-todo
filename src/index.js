"use strict";
import "./css/style.css";
import titleIconPath from './icons/shield.svg'

const TrueBlueTodo = (() => {
  let content = document.getElementById("content");

  const addTopBar = () => {
    let title = document.createElement("div");
    title.className = "content-title";

    let titleText = document.createElement('div')
    titleText.className = 'title-text'
    let titleTextP = document.createElement('h4')
    titleTextP.innerText = "True Blue Todo";

    titleText.appendChild(titleTextP)

    let titleIcon = document.createElement('img');
    titleIcon.src = titleIconPath;
    titleIcon.alt = 'My awesome image'
    titleIcon.className = 'title-icon';

    title.appendChild(titleIcon);
    title.appendChild(titleText)

    content.appendChild(title);
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
