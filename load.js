// KAIP REIKĖS DARYTI TOLIAU PAVYZDYS
// function getBody(){
//     document.body.appendChild(getLogoImage());
// }

// function getLogoImage(){
//     let image = document.createElement('img');
//     image.className = 'logo';
//     image.src = 'logo.jpg';
//     image.alt = 'logo';
//     return image;
// }

function getDOM() {
    getHeader();
    getHome();
}

//Import header HTML

function getHeader() {
    let navBar = document.createElement('div');
    navBar.id = 'nav-placeholder'
    let header = document.createElement('header');
    header.classList = 'navbar';
    navBar.appendChild(header);
    document.body.appendChild(navBar);
    getLogo();
    getMenu();
    getMobileMenu();
    
}

function getLogo() {
    let div = document.createElement('div');
    div.classList = 'logo';
    let image = document.createElement('img');
    image.src = './logo.jpg';
    div.appendChild(image);
    document.getElementsByClassName('navbar')[0].appendChild(div);
}

function getMobileMenu() {
    let mobileDiv = document.createElement('div');
    mobileDiv.className = 'mobile';
    let menuButtonDiv = document.createElement('div');
    menuButtonDiv.className = 'menu-button';
    menuButtonDiv.onclick = function() { dropdown() };
    menuButtonDiv.innerHTML = 'MENU';
    let menuListUl = document.createElement('ul');
    menuListUl.className = 'dropdown';
    mobileDiv.appendChild(menuListUl);
    mobileDiv.appendChild(menuButtonDiv);
    document.getElementsByClassName('navbar')[0].appendChild(mobileDiv);
    getMenuItems('dropdown')
}

function getMenu() {
    let div = document.createElement('div');
    div.className = 'menu desktop';
    let ul = document.createElement('ul');
    ul.className = 'desktop-menu'
    div.appendChild(ul);
    document.getElementsByClassName('navbar')[0].appendChild(div);
    getMenuItems('desktop-menu');
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

//Import Home HTML

function getHome() {
    let div = document.createElement('div');
    div.classList = 'content';
    div.id = 'menu-content';
    document.body.appendChild(div);
    getBody();
}

function getBody() {
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Create Stunning Visual Media';
    let p1 = document.createElement('p');
    p1.innerHTML = 'Super simple tool to create trendy videos and pictures for your ads, social media, blogs and websites.';
    let p2 = document.createElement('p');
    p2.innerHTML = 'Make your project stand out!';
    let button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = 'Create design';
    let i = document.createElement('i');
    i.className = 'fas fa-arrow-right';
    button.appendChild(i);
    document.getElementById('menu-content').appendChild(h1);
    document.getElementById('menu-content').appendChild(p1);
    document.getElementById('menu-content').appendChild(p2);
    document.getElementById('menu-content').appendChild(button);
}

function getDots() {
    let div = document.createElement('div');
    div.id = 'dots';
    for(let i = 0; i < 4; i++){
        let div1 = document.createElement('div')
        div1.className = 'dot';
        div.appendChild('div1');
    }
}

////////////////////////////////////////////////////

