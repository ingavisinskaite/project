"use strict";

const content = {
    "menu": ["Home", "Products", "Templates", "Pricing", "SIGNIN", "SIGNUP"],
    "p1": "Super simple tool to create trendy videos and pictures for your ads, social media, blogs and websites.",
    "p2": "Make your project stand out!",
    "h1": "Create Stunning Visual Media",
    "createButton": "Create design ",
};

let contentJSON = JSON.stringify(content);

function getDOM(){

    const header = getHeader();
    header.appendChild(getLogo());
    header.appendChild(getDesktopMenu());
    header.appendChild(getMobileMenu());

    const menuContentDiv = getMenuContentDiv();
    menuContentDiv.appendChild(getContentHeader());
    menuContentDiv.appendChild(getContentParagraph());
    menuContentDiv.appendChild(getContentSecondParagraph());
    menuContentDiv.appendChild(getCreateDesignButton());
    menuContentDiv.appendChild(getDots());

    const container = getContainer();
    container.appendChild(header);
    container.appendChild(menuContentDiv);
    document.body.appendChild(container);

    createStyleRules();
}

function getContainer(){
    let container = document.createElement('div');
    container.className = 'container';
    return container
}

function getHeader() {
    let header = document.createElement('header');
    header.className = 'navbar';
    return header;
}

function getLogo() {
    let logoParentDiv = document.createElement('div');
    logoParentDiv.className = 'logo';
    let image = document.createElement('img');
    image.src = './logo.jpg';
    logoParentDiv.appendChild(image);
    return logoParentDiv;
}

function getDesktopMenu() {
    let menuParentDiv = document.createElement('div');
    menuParentDiv.className = 'menu desktop';
    let ul = document.createElement('ul');
    ul.className = 'desktop-menu'
    menuParentDiv.appendChild(ul);
    
    const menuItems = JSON.parse(contentJSON).menu;
    for (let i = 0; i < menuItems.length; i++) {
        ul.appendChild(getMenuItem(menuItems, i));
    }    

    return menuParentDiv;
}

function getMobileMenu() {
    let mobileDiv = document.createElement('div');
    mobileDiv.className = 'mobile';
    let menuButtonDiv = document.createElement('div');
    menuButtonDiv.className = 'menu-button';
    menuButtonDiv.onclick = function() { showMenu() }; 
    let menuSymbol = document.createElement('i');
    menuSymbol.className = 'fas fa-align-justify';
    menuButtonDiv.appendChild(menuSymbol);
    let menuListUl = document.createElement('ul');
    menuListUl.className = 'dropdown';
    mobileDiv.appendChild(menuListUl);
    mobileDiv.appendChild(menuButtonDiv);

    const menuItems = JSON.parse(contentJSON).menu;
    for (let i = 0; i < menuItems.length; i++) {
        let item = getMenuItem(menuItems, i);
        menuListUl.appendChild(item);
    } 

    return mobileDiv;
}

function getMenuItem(menuItems, index) {
    let li = document.createElement('li'); 
    let a = document.createElement('a');
    a.href = '#';
    a.className = 'menu-link';
    if(menuItems[index] == JSON.parse(contentJSON).menu[0]){
        a.classList.add('selected')
    }
    if (menuItems[index] == JSON.parse(contentJSON).menu[4] || menuItems[index] == JSON.parse(contentJSON).menu[5]) {
        a.classList.add('menu-right');
        a.id = menuItems[index].toLowerCase();
    }
    a.innerHTML = menuItems[index];
    li.appendChild(a);
    return li;
} 

function getMenuContentDiv() {
    let div = document.createElement('div');
    div.classList = 'content';
    div.id = 'menu-content';
    return div;
}

function getContentHeader() {
    let h1 = document.createElement('h1');
    h1.innerHTML = JSON.parse(contentJSON).h1;
    return h1;
}

function getContentParagraph() {
    let p1 = document.createElement('p');
    p1.innerHTML = JSON.parse(contentJSON).p1;
    return p1;
}

function getContentSecondParagraph() {
    let p2 = document.createElement('p');
    p2.innerHTML = JSON.parse(contentJSON).p2;
    return p2;
}

function getCreateDesignButton() {
    let button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = JSON.parse(contentJSON).createButton;
    let i = document.createElement('i');
    i.className = 'fas fa-arrow-right';
    button.appendChild(i);
    return button;
}

function getDots() {
    let dotsParentDiv = document.createElement('div');
    dotsParentDiv.id = 'dots';
    for(let i = 0; i < 4; i++){
        if(i === 0){
            let selectedDot = getDot();
            selectedDot.classList.add('selected-dot');
            dotsParentDiv.appendChild(selectedDot);
        } else {
            dotsParentDiv.appendChild(getDot());
        }
    }
    return dotsParentDiv;
}

function getDot() {
    let dot = document.createElement('div');
    dot.className = 'dot';
    return dot;
}

let isMenu = false;

function showMenu() {
    if (!isMenu) {
        document.getElementsByClassName('dropdown')[0].style.display = 'block';
        closeMenu();
    } else {
        document.getElementsByClassName('dropdown')[0].style.display = 'none';
    }
    isMenu = !isMenu;
    
}

function closeMenu(){
    document.getElementsByClassName('content')[0].addEventListener('click', function(){
        document.getElementsByClassName('dropdown')[0].style.display = 'none';
        isMenu = !isMenu;
    })
}


