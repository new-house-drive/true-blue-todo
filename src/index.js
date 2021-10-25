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

  // Add dropdown menu depending on views.
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
  
  // Dashboard Container
  const addInitialDashboard = () => {
    let dashboardContainer = document.createElement('div');
    dashboardContainer.className = 'dashboard-container';
    
    dashboardContainer.appendChild(addInitialView())

    content.appendChild(dashboardContainer);
  }

  const addInitialView = () => {
    let view = document.createElement('div');
    view.className = 'view-container';

    
    view.appendChild(createEmptyTodo());

    return view;

  }

  const createEmptyTodo = () => {
    let todo = document.createElement('div');
    todo.className = 'todo-container';
    
    let emptyTaskContainer = document.createElement('div');
    emptyTaskContainer.className = "todo-empty-task-container";

    todo.appendChild(emptyTaskContainer)

    emptyTaskContainer.innerText = 'gjgj j jgngj jnj cjenv ievnirn i i ifn i i i iierin njrnvrv r hgn   jfnvurnvn unurn '

    let addTaskButton = document.createElement('button')
    addTaskButton.className = 'todo-add-task-button';

    addTaskButton.innerText = 'Add Task';

    todo.appendChild(addTaskButton)

    return todo;
  }




  // Add dashboard container for views

  // Make separate views

  // Integrate views navigation into the navbar

  /** Add background for empty list */
  // "Cattle die, kinsmen die; the self must also die. I know one thing which never dies: the reputation of each dead man"
  let poeticEddaQuote =
    "Deyr fé,\ndeyja frændr,\ndeyr sjalfr it sama,\nek veit einn,\nat aldrei deyr:\ndómr um dauðan hvern.";

  /*  */



    return {
    addTopBar,
    addInitialDashboard
  };
})();

const Module = (() => {
  TrueBlueTodo.addTopBar();
  TrueBlueTodo.addInitialDashboard();
})();
