"use strict";
import "./css/style.css";

const TrueBlueTodo = (() => {
  let content = document.getElementById("content");

  const addTopBar = () => {
    let title = document.createElement("div");
    title.className = "content-title";
    title.innerText = "True Blue Todo";

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
