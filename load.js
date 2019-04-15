function getDOM(){
    const header = getHeader();
    header.appendChild(getLogo());
    header.appendChild(getDesktopMenu());
    header.appendChild(getMobileMenu());
    document.body.appendChild(header);

    const menuContentDiv = getMenuContentDiv();
    menuContentDiv.appendChild(getContentHeader());
    menuContentDiv.appendChild(getContentParagraph());
    menuContentDiv.appendChild(getContentSecondParagraph());
    menuContentDiv.appendChild(getCreateDesignButton());
    menuContentDiv.appendChild(getDots());
    document.body.appendChild(menuContentDiv);

    createStyleRules();
}


let isMenu = false;

function showMenu() {
    if (!isMenu) {
        document.getElementsByClassName('dropdown')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('dropdown')[0].style.display = 'none';
    }
    isMenu = !isMenu;
}

function getHeader() {
    let header = document.createElement('header');
    header.classList = 'navbar';
    header.style.textAlign = "center";
    header.style.margin = "0 auto";
    return header;
}

function getLogo() {
    let logoParentDiv = document.createElement('div');
    logoParentDiv.classList = 'logo';
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
    
    const menuItems = ['Home', 'Products', 'Templates', 'Pricing', 'SIGNIN', 'SIGNUP'];
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
    menuButtonDiv.innerHTML = 'MENU';
    let menuListUl = document.createElement('ul');
    menuListUl.className = 'dropdown';
    mobileDiv.appendChild(menuListUl);
    mobileDiv.appendChild(menuButtonDiv);

    const menuItems = ['Home', 'Products', 'Templates', 'Pricing', 'SIGNIN', 'SIGNUP'];
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
    if (menuItems[index] === 'SIGNIN' || menuItems[index] === 'SIGNUP') {
        a.classList.add('menu-right');
        a.id = menuItems[index].toLowerCase();
    }
    a.innerHTML = menuItems[index];
    li.appendChild(a);
    return li;
} 

function getMenuItems(menuClass) {
    const menuItems = ['Home', 'Products', 'Templates', 'Pricing', 'SIGNIN', 'SIGNUP'];
    for(let i = 0; i < menuItems.length; i++){
        let li = document.createElement('li'); 
        let a = document.createElement('a');
        a.href= '#';
        a.className = 'menu-link';
        if (menuItems[i] === 'SIGNIN' || menuItems[i] === 'SIGNUP') {
            a.classList.add('menu-right');
            a.id = menuItems[i].toLowerCase();
        }
        a.innerHTML = menuItems[i];
        li.appendChild(a);
        document.getElementsByClassName(menuClass)[0].appendChild(li);
    }
}

function getMenuContentDiv() {
    let div = document.createElement('div');
    div.classList = 'content';
    div.id = 'menu-content';
    return div;
}

function getContentHeader() {
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Create Stunning Visual Media';
    return h1;
}

function getContentParagraph() {
    let p1 = document.createElement('p');
    p1.innerHTML = 'Super simple tool to create trendy videos and pictures for your ads, social media, blogs and websites.';
    return p1;
}

function getContentSecondParagraph() {
    let p2 = document.createElement('p');
    p2.innerHTML = 'Make your project stand out!';
    return p2;
}

function getCreateDesignButton() {
    let button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = 'Create design ';
    let i = document.createElement('i');
    i.className = 'fas fa-arrow-right';
    button.appendChild(i);
    return button;
}

function getDots() {
    let dotsParentDiv = document.createElement('div');
    dotsParentDiv.id = 'dots';
    for(let i = 0; i < 4; i++){
        dotsParentDiv.appendChild(getDot());
    }
    return dotsParentDiv;
}

function getDot() {
    let dot = document.createElement('div');
    dot.className = 'dot';
    return dot;
}

////////////////////////////////////////////////////

